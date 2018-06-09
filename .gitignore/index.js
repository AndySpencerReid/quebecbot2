const Discord = require("discord.js");

var bot = new Discord.client();

bot.on("ready", function() {
bot.user.setGame("QuebecBot, !help");
console.log("Le bot a bien ete connecte")
});

bot.login("process.env.TOKEN");
