const Discord = require('discord.js');
const client = new Discord.Client();

// Set the client user's status
client.user.setStatus('faites ^^help pour les infos')
  .then(console.log)
  .catch(console.error);

client.login(process.env.TOKEN);
