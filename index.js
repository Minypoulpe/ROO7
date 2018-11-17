const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`ROOOOOOO7`);
});

bot.on("message", async message => {
let prefix = "!";
let messageArray = message.content.split(" ");
let command = messageArray[0];
let args = messageArray.slice(1);
let role = message.guild.roles.find('name', 'Terrarien')
let role2 = message.guild.roles.find('name', 'Terramerde')
  
  if(command === `everyone`) {
    message.author.addRole(role2);
    message.author.removeRole(role);
  }
  
});

bot.login(process.env.token);

