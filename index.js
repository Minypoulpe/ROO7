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

  if(command ==('everyone')){
    message.channel.send("Bientôt terramerde")

});

bot.login(process.env.token);

