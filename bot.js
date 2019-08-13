const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("609418276036018180")
setInterval(function() {
channel.send(`احبك يا بوس خذ كل هاذ الكريديت احبك`);
}, 30)
})

client.login(process.env.BOT_TOKEN);