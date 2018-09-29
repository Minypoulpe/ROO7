const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`ROOOOOOO7`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '!';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  
  if (cmd === `${prefix}terramerde`){
      let role = message.guild.roles.find('name', 'Terrarien')
      let role2 = message.guild.roles.find('name', 'Terramerde')
      let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
      if(!pUser) return message.channel.send("Je ne trouve pas ce membre");
    
    if(message.member.roles.find('name', 'Terramerde')){
    message.channel.send("Il a déjà ce rôle")}
    
    
});

bot.login(process.env.token);
