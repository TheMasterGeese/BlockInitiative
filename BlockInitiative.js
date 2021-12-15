const discordURL = "https://webhook.site/1c78f57f-3900-42b7-a54a-fcb2a9e8c4a4"

// Reset Status When the Game is Ready
Hooks.on("ready", async function(){
    await sendPlayersReadyMessage();
});

async function sendPlayersReadyMessage() {
    $.ajax({
        url: discordURL,
        data: "all players are ready",
        success: function( response )  {
            console.log(result)
        },
    });
}