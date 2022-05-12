let libWrapper: {
    is_fallback: boolean;
    // LibWrapper requires this type to be a function
    // eslint-disable-next-line @typescript-eslint/ban-types
    register(module: string, target: number | string, fn: Function, type: string): void
};

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

    // libWrapper will exist at runtime thanks to the libWrapper module.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    libWrapper = globalThis.libWrapper;
    libWrapper.register('mg-block-initiative', 'Combat.prototype.rollInitiative',
        // eslint-disable-next-line @typescript-eslint/ban-types
        async function (wrapped: Function, ...args: unknown[]) {
            console.log('Block Initiative Calling Combat.prototype.RollInitiative');
            const result = await (wrapped(...args) as Promise<Combat>).then((wrappedResult) => {
                // Apply Initiative Handicap for players that were included in the initiative roll
                return (applyInitiativeHandicap(wrappedResult, args[0] as string | string[]));
            });
            return result;
        }, 'WRAPPER');

    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    /* eslint-disable @typescript-eslint/no-unsafe-call */
    libWrapper.register('mg-block-initiative', 'Combat.prototype.rollAll',
        // eslint-disable-next-line @typescript-eslint/ban-types
        async function (wrapped: Function, ...args: unknown[]) {
            /* eslint-enable @typescript-eslint/no-unsafe-call */
            /* eslint-enable @typescript-eslint/no-unsafe-member-access */
            console.log('Block Initiative Calling Combat.prototype.rollAll');
            await wrapped(...args) as Promise<void>
            // Calculate the minimum and maximum initiative scores among PCs
            // Move any monsters that did not beat all PCs to last in initiative

        }, 'WRAPPER');

    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    /* eslint-disable @typescript-eslint/no-unsafe-call */
    libWrapper.register('mg-block-initiative', 'Combat.prototype.rollNPC',
        // eslint-disable-next-line @typescript-eslint/ban-types
        async function (wrapped: Function, ...args: unknown[]) {
            /* eslint-enable @typescript-eslint/no-unsafe-call */
            /* eslint-enable @typescript-eslint/no-unsafe-member-access */
            console.log('Block Initiative Calling Combat.prototype.rollNPC');
            await (wrapped(...args) as Promise<void>);
            // Same function as rollAll

        }, 'WRAPPER');

    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    /* eslint-disable @typescript-eslint/no-unsafe-call */
    libWrapper.register('mg-block-initiative', 'Combatant.prototype.rollInitiative',
        // eslint-disable-next-line @typescript-eslint/ban-types
        async function (wrapped : Function, ...args: unknown[]) {
            /* eslint-enable @typescript-eslint/no-unsafe-call */
            /* eslint-enable @typescript-eslint/no-unsafe-member-access */
            console.log('Block Initiative Calling Combatant.prototype.rollInitiative');
            // Same function as Combat.rollInitiative
            const result = wrapped(...args) as Promise<Combatant>;
            return result;
        }, 'WRAPPER');

});

Hooks.once('ready', () => {
    if (!game.modules.get('lib-wrapper')?.active && (game.user as User).isGM)
        ui.notifications.error("Module mg-block-initiative requires the 'libWrapper' module. Please install and activate it.");
});

Hooks.on("renderEncounterTrackerPF2e", function (app: Application, html: JQuery, data: object) {
    // render changes to the encounter tracker
    // Implement combat groups in a similar manner to how they are implemented in the combat groups mod.
    // Add the Combat phase UI element
    // Is displayed above all the combatants, but below the row containing the round counter, button to roll initiative, reset initiative, etc.
    // consists of 4 sections, displayed horizontally in this order: Enemies Act, Players React, Players Act, Enemies React
    // The Current phase is displayed differently than the Others
    // Add "Reaction" button
    // Render for all users, whether Player or GM
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


// Apply Initiative Handicap
// The roll has been done on the backend by the time this hook has been called, we need to modify the values and the rest 
// should resolve itself.
// This makes initiative changes for a particular token.
/*
Hooks.on("preUpdateCombatant", async function (combatant: Combatant, change: object) {

    await combatant.setFlag("mg-block-initiative", combatant.id, true)
    // Only handle the initiative roll logic if this chat message is being created for an initiative roll

    // Will re-enable if I ever get pf2e types working
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const isInitiativeRoll = change.initiative != null;

    if (isInitiativeRoll) {
        // If the combatant being specified by the message is a player, apply the initiative handicap
        const encounter = game.combat;
        if (combatant.isNPC) {
            applyInitiativeHandicap(combatant, change);
        }
    }
    // After handicap is applied, get min and max player initiative
    const initiative: MinMaxInitiative = getMinMaxPlayerInitiative(encounter);

    // move any npcs that rolled lower than the highest PC initiative to the bottom of initiative
    for (const encounterCombatant of encounter.combatants) {
        if (encounterCombatant.isNPC
            && encounterCombatant.initiative < initiative.playerInitMax
            && encounterCombatant.initiative >= initiative.playerInitMin
            && !encounterCombatant.getFlag("mg-block-initiative", encounterCombatant.id)) {
            await game.combat.setInitiative(encounterCombatant.id, initiative.playerInitMin - 1);

        }
    }


    await combatant.setFlag("mg-block-initiative", combatant.id, false)
});
*/

/*
Hooks.on("updateCombatant", function () {
})
*/
Hooks.on("updateCombat", function () {
    // If you're updating the round number
    // perform any logic to reset values specific to a combat round
})

// If an enemy ends their turn and they are not behind all players, they should be moved so that they are behind all players.
Hooks.on("pf2e.endTurn", function (combatant: Combatant, encounter: Combat) {
    const initiative: MinMaxInitiative = getMinMaxPlayerInitiative(encounter);

    if (combatant.initiative >= initiative.playerInitMax - 3) {
        game.combat.setInitiative(combatant.id, initiative.playerInitMin - 4).catch((error: unknown) => {
            Hooks.callAll("error", "mg-block-initiative", error)
        });
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
        if (combatant.hasPlayerOwner && combatant.initiative !== null) {
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
function applyInitiativeHandicap(combat: Combat, ids: string | Array<string>): Combat {

    // if just a string type, convert to string array, to let it be iterated over the same way the array is.
    if (typeof ids === "string") {
        ids = new Array<string>(ids);
    }

    // for every player combatant that has rolled initiative (indicated by their id being present in ids), handicap their initiative.
    ids.forEach((combatantId: string) => {
        const combatant: Combatant = combat.combatants.find(c => c.id === combatantId);
        if (combatant && combatant.hasPlayerOwner) {
            let initModifier: string = game.settings.get('mg-block-initiative', 'InitiativeHandicap') as string;
            initModifier = initModifier.startsWith('+') ? initModifier.split('+')[1] : initModifier;

            if (Number(initModifier)) {
                // Will re-enable if I ever get pf2e types working
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                combatant.initiative += Number(initModifier)
            }
        }
    })
    return combat;
}
class MinMaxInitiative {
    playerInitMax: number
    playerInitMin: number
}

class RollObjectOptions {
    formula: string | null
    updateTurn = true
    messageOptions: object
}
