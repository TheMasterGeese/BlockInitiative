
// Ready-Check Module
// Register Game Settings
Hooks.once("init", function () {
    game.settings.register("block-initiative", "showChatMessagesForUserUpdates", {
        name: game.i18n.localize("BLOCKINITIATIVE.SettingsChatMessagesForUserUpdatesTitle"),
        hint: game.i18n.localize("BLOCKINITIATIVE.SettingsChatMessagesForUserUpdatesHint"),
        scope: "world",
        config: true,
        default: true,
        type: Boolean
    });
});

// Block-Initiative Module
// If the appropriate conditions are met, send a message over discord informing players it is their turn.
async function checkStatusForMessages() {
    let text;
    if (game.user.hasPlayerOwner && AreUsersReady(false)) {
        text = game.i18n.localize("BLOCKINITIATIVE.ResolvePlayerActionsMessage");
    } else if (AreUsersReady(true)) {
        text = game.i18n.localize("BLOCKINITIATIVE.PlayersReactMessage");
    } else {
        return;
    }
    let userList = await getUserDiscordIDs(game.user.hasPlayerOwner)
    let message = buildMessage(userList, text)
    sendDiscordMessage(message);
}

// Block-Initiative Module
async function AreUsersReady(getGMs) {
    // check to see if all users are ready
    let userList = [];
    for (let i = 0; i < game.users.contents.length; i++) {
        let user = game.users.contents[i]
        // if any users are not ready, then we don't want to do anything.
        if (!(await user.getFlag('block-initiative', 'isReady'))) {
            return false;
        }
        if ((!getGMs && user.hasPlayerOwner)
            || (getGMs && !user.hasPlayerOwner)) {

            userList.push(user.data.name)
        }
    }
    return true;
}

// Block-Initiative Module
async function sendDiscordMessage(message) {
    $.ajax({
        method: 'POST',
        url: game.i18n.localize("BLOCKINITIATIVE.DiscordUrl"),
        contentType: "application/json",
        data: message,
    });
}

// Block-Initiative Module
function buildMessage(pingTargets, message) {
    let messageString = "";
    for (let i = 0; i < pingTargets.length; i++) {
        messageString += "<@" + pingTargets[i] + "> "
    }
    let messageJSON = {
        "content": messageString + " " + message
    }

    let messageReturn = JSON.stringify(messageJSON);

    return messageReturn;
}

// Block-Initiative Module
function getPlayersInCombat() {
    let usersInCombat = [];
    let combatants = Array.from(game.combat.combatants.values());
    let actorIDs = [];
    for (let i = 0; i < combatants.length; i++) {
        actorIDs.push(combatants[i].data.actorId);
    }
    for (let j = 0; j < game.users.contents.length; j++) {
        let user = game.users.contents[j];
        if (user.isGM) {
            usersInCombat.push(user);
        } else if (!user.isGM && user.character) {
            let characterID = user.character.id;
            if (actorIDs.indexOf(characterID) != -1) {
                usersInCombat.push(user);
            }
        }
    }
    return usersInCombat;
}

// Block-Initiative Module
async function getUserDiscordIDs(getGMs) {
    let users;
    if (game.combat) {
        users = getPlayersInCombat();
    } else {
        users = game.users.contents;
    }
    let targetUsers = [];
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if ((getGMs && !user.hasPlayerOwner) ||
            (!getGMs && user.hasPlayerOwner)) {

            targetUsers.push(await user.getFlag('block-initiative', 'discordID'));
        }
    }
    return targetUsers;
}


