/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// Register Game Settings
Hooks.once("init", function () {
    game.settings.register("mg-block-initiative", "InitiativeHandicap", {
        name: game.i18n.localize("BLOCKINITIATIVE.SettingsInitiativeHandicapTitle"),
        hint: game.i18n.localize("BLOCKINITIATIVE.SettingsInitiativeHandicapHint"),
        scope: "world",
        config: true,
        default: "-3",
        type: String
    });
});

Hooks.once("ready", () => {
    // TODO: Edit the setting on mg-ready-check that enables all players to initiate ready checks. Enable it, and add a warning to the setting hint
    // noting that if that setting is disabled, block-initiative may not send notifications properly if a GM isn't logged on.
    if (socket) {
		// create the socket handler
		socket.on('module.mg-block-initiative', (combatantId : string) => {
			if (game.userId === game.settings.get("mg-living-world-core", "GMProxy")) {
                const combatant = game.combat.combatants.filter(c => c.id === combatantId)[0];
                const reactionMessage = combatant.name + game.i18n.localize("BLOCKINITIATIVE.HasReacted");
                let usersToMessage = getUsersInCombat();
                // We don't need to include ourself in this ready check
                usersToMessage = usersToMessage.filter(u => !u.isGM && !combatant.testUserPermission(u, "OWNER"));
                    
                Hooks.callAll("initReadyCheck", reactionMessage, usersToMessage);
            }
		});
	}
});

Hooks.on("renderCombatTracker", function (app: Application, html: JQuery, data: object) {
    // render changes to the encounter tracker
    // Implement combat groups in a similar manner to how they are implemented in the combat groups mod.
    // Add the Combat phase UI element
    // Is displayed above all the combatants, but below the row containing the round counter, button to roll initiative, reset initiative, etc.
    // consists of 4 sections, displayed horizontally in this order: Enemies Act, Players React, Players Act, Enemies React
    // The Current phase is displayed differently than the Others

    // Add "Sort Into Blocks" button
    if (game.user.role === 4) { // Render for GM
        createSortIntoBlocksButton();
        
    }
    
    // Add "Reaction" buttons
    createReactionButtons();
    
    
    
    
        // For players, only render the reaction button for combatants they control
        // For GM, only render the reaction button for NPCs.

    // For players, this affects either the currently selected token or defaults to their character
    // For GMs, this affects the currently selected token
    // Starts ready check targeting all players with a token in the current scene
    // Says "X has reacted"
    // Add "Confirm Action" button
    // Render for GM
    // Affects the token the GM has selected
    // Starts ready check targeting the player that controls that token
    // Says "<Player> confirm action for <Token>"
    // Add "Invalid Action" button
    // Render for GM
    // Affects the token the GM has selected
    // Starts ready check targeting the player that controls that token
    // Says "<Player> re-select action for <Token>"
    // Override how the "Next turn" buttons work
    // Instead of changing the turn to the next combatant, it changes the phase to the next phase.
    // Instead of changing the turn to the previous combatant, it changes the phase to the previous phase.    
});

// If an enemy ends their turn and they are not behind all players, they should be moved so that they are behind all players.
Hooks.on("pf2e.endTurn", async function (combatant: Combatant, encounter: Combat) {
    const initiative: MinMaxInitiative = getMinMaxPlayerInitiative(encounter);

    if (combatant.isNPC && combatant.initiative >= initiative.playerInitMax) {
        await encounter.setFlag('mg-ready-check', 'overrideNextTurn', true).then((result) => {
            return result.setInitiative(combatant.id, initiative.playerInitMin - 1)
        })
    }
});

// listens for flag to override the next turn.
Hooks.on("pf2e.startTurn", async function (_combatant: Combatant, encounter: Combat) {
    if (encounter.getFlag('mg-ready-check', 'overrideNextTurn')) {
        encounter.data.turn = 0;
        encounter = await encounter.unsetFlag('mg-ready-check', 'overrideNextTurn');
    }
});

/**
 * Changes the current combat phase,
 */
function changePhase() {
    // If called with no parameters, changes to the next phase in sequence, otherwise it changes to the phase given as a parameter.
    // The sequence goes: Enemies Act -> Players React -> Players Act -> Enemies React -> Enemies Act and so forth.
    // When changing from Players React -> Players Act, trigger all end-of-turn effects on enemies, and all start-of-turn effects on players.
    // When changing from Enemies React -> Enemies Act, trigger all end-of-turn effects on players, and all start-of-turn effects on enemies.
    // During a particular combat round, start-of-turn and end-of-turn effects can only trigger once. This guards against instances where the GM
    // moving to a phase out of order (such as to make corrections) will not trigger these effects multiple times.
    // TODO: Implement a memento system to simulate Undo/Redo instead.
}
function getMinMaxPlayerInitiative(combat: Combat): MinMaxInitiative {
    let highestPlayerInit = -999999;
    let lowestPlayerInit = 999999;

    combat.combatants.forEach((combatant: Combatant) => {
        if (combatant.hasPlayerOwner && combatant.initiative != null) {
            highestPlayerInit = Math.max(highestPlayerInit, combatant.initiative);
            lowestPlayerInit = Math.min(lowestPlayerInit, combatant.initiative);
        }
    });

    const minMaxInitiative = {
        playerInitMax: highestPlayerInit,
        playerInitMin: lowestPlayerInit,
    };

    return minMaxInitiative;
}

// Applies initiative handicap to a particular token, intended to be applied to players.
async function applyInitiativeHandicap(encounter: Combat) {
    // for every player combatant that has rolled initiative (indicated by their id being present in ids), handicap their initiative.
    for (const combatant of encounter.combatants) {
        if (combatant.hasPlayerOwner) {
            let initModifier: string = game.settings.get('mg-block-initiative', 'InitiativeHandicap') as string;
            initModifier = initModifier.startsWith('+') ? initModifier.split('+')[1] : initModifier;

            if (Number(initModifier)) {
                await encounter.setInitiative(combatant.id, combatant.initiative + Number(initModifier));
            } else {
                // TODO: throw error
            }
        }
    }
}

async function sortIntoBlockInitiative() {
    const encounter: Combat = game.combat;
    await applyInitiativeHandicap(encounter)

    // After handicap is applied, get min and max player initiative
    const initiative: MinMaxInitiative = getMinMaxPlayerInitiative(encounter);

    // move any npcs that rolled lower than the highest PC initiative to the bottom of initiative
    for (const encounterCombatant of encounter.combatants) {
        if (encounterCombatant.isNPC
            && encounterCombatant.initiative < initiative.playerInitMax
            && encounterCombatant.initiative >= initiative.playerInitMin) {
            await game.combat.setInitiative(encounterCombatant.id, initiative.playerInitMin - 1);

        }
    }
}

function createSortIntoBlocksButton() {
    //set title based on whether the user is player or GM
    const btnTitle: string = game.i18n.localize("BLOCKINITIATIVE.SortIntoBlocksButton");
    const sortIntoBlocksButton = $(`<a class="combat-control mg-block-initiative sort-into-blocks" title="${btnTitle}"><i class="fas fa-arrow-down"></i></a>`);
    const encounterTitle = $("#combat-round").find(`.encounter-title`);
    const sortIntoBlocksButtonAlreadyPresent = $("#combat-round").find(`.mg-block-initiative .sort-into-blocks`).length > 0;

    // Add the button to the sidebar if it doesn't already exist
    if (!sortIntoBlocksButtonAlreadyPresent) {
        encounterTitle.before(sortIntoBlocksButton);
        jQuery(".sort-into-blocks").on("click", sortIntoBlocksOnClick);
    }

    /**
     * Ready check button listener
     * @param event the button click event
     */
    function sortIntoBlocksOnClick(event: JQuery.ClickEvent) {
        event.preventDefault();
        void sortIntoBlockInitiative();
    }
}

function createReactionButtons() {
    const currentUser = game.user;
    const currentCombatants = game.combat.data.combatants;
    const ownedCombatants : Combatant[] = currentUser.isGM ?
        currentCombatants.filter(combatant => combatant.isNPC) :
        currentCombatants.filter(combatant => combatant.canUserModify(currentUser, "update"));
    ownedCombatants.forEach(combatant => {
        createReactionButton(combatant);
    })
}

function createReactionButton(combatant : Combatant) {
    const btnTitle : string = game.i18n.localize("BLOCKINITIATIVE.ReactionButton");

    const reactionButton = $(`<a class="combatant-control mg-block-initiative reaction" style="color: var(--color-text-light-1)" title="${btnTitle}"><span class="activity-icon">R</span></a>`);
    const combatantRow = $("#combat-tracker").find(`[data-combatant-id=${combatant.id}]`);
    const tokenEffects = combatantRow.find(`.token-effects`);
    const reactionButtonAlreadyPresent = combatantRow.find(`.token-effects > .combatant-control, .mg-block-initiative, .reaction`).length > 0;

    // Add the button to the sidebar if it doesn't already exist
    if (!reactionButtonAlreadyPresent) {
        reactionButton.on("click", function(event: JQuery.ClickEvent) {
            event.preventDefault();
    
            const combatantId = $(this).parent().parent().parent().attr('data-combatant-id')
             
            if (socket) {
                socket.emit('module.mg-block-initiative', combatantId);
            }
        });
        tokenEffects.before(reactionButton);
    }
}

/**
 * Gets an array of users that have a token in the current scene.
 * @returns The array of users
 */
 function getUsersInCombat() : User[] {
	const usersInCombat : User[] = [];
    const combatants = game.combat.combatants;
	game.users.contents.forEach((user : User) => {
		combatants.forEach((combatant : Combatant) => {
			// permissions object that maps user ids to permission enums
			const tokenPermissions = combatant.actor.data.permission;
			
			// if the user owns this token, then they are in the scene.
			if (tokenPermissions[user.id] === 3 && !usersInCombat.includes(user)) {
				usersInCombat.push(user);
			}
		});
	});
	return usersInCombat;
}

class MinMaxInitiative {
    playerInitMax: number
    playerInitMin: number
}

class ReactionData {
    message: string
    users: User[]
}
