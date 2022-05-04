
// Ready-Check Module
// Register Game Settings
Hooks.once("init", function () {
    game.settings.register("mg-block-initiative", "EnableInitiativeHandicap", {
        name: game.i18n.localize("BLOCKINITIATIVE.SettingsEnableInitiativeHandicapTitle"),
        hint: game.i18n.localize("BLOCKINITIATIVE.SettingsEnableInitiativeHandicapHint"),
        scope: "world",
        config: true,
        default: true,
        type: Boolean
    });
});

Hooks.on("updateCombatant", function(combatant : any, data : { flags : any, initiative : number, _id : string } ) {

})


