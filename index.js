const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} chargé!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`ROOOOOOO7`);
});

bot.on("message", async message => {
  let role = message.guild.roles.find('name', 'Terrarien')
  let role2 = message.guild.roles.find('name', 'Terramerde')
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!pUser) return message.channel.send("Je ne trouve pas ce membre");

  if(message.member.roles.find('name', 'Terramerde')){
    message.channel.send("Il a déjà ce rôle")
    }

  else{
    pUser.addRole(role2);
    pUser.removeRole(role);
    message.channel.send(`${pUser} a reçu le rôle Terramerde. Merci de lui enlever dans 1 semaine et de lui remettre le rôle Terrarien.`);
    pUser.send(`Tu as reçu le rôle Terramerde car tu n'as pas respecter une des règles. Tu devrais les relire dans le salon #règles. Ton rôle sera retirer dans une semaine`)
    }
  }
});

bot.login(process.env.token);
