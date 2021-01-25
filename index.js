const rpc = require("discord-rpc")
const client = new rpc.Client({transport: 'ipc'})
const config = require("./config.json")

if(!config.Client_ID){
    return console.log("Please give your Client ID first !");
}

client.on('ready',() => {
    console.log(`Discord Presence Status Has been enabled into user: ${client.user.username}#${client.user.discriminator}`);
    client.setActivity({
        details: config.details,
        startTimestamp: config.timestamp ? new Date() : null,
        state: config.state,
        largeImageKey:config.large_image,
        largeImageText:config.large_image_text,
        smallImageKey:config.small_image,
        smallImageText:config.small_image_text
    })
})

client.login({clientId: config.Client_ID})
