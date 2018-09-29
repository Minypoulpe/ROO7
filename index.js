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

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '!';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {


  if(!args[0] || args[0 == "help"]) return message.reply("Usage: !prefix <desired prefix here>");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Prefix Set!")
  .setDescription(`Set to ${args[0]}`);

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "prefix"
}

   if (cmd === `${prefix}end`){
   let role = message.guild.roles.find('name', 'Terrarien')
   let role2 = message.guild.roles.find('name', 'Terramerde')
   let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   if(!pUser) return message.channel.send("Je ne trouve pas ce membre");
   
  if(message.member.roles.find('name', 'Terrarien')){
    message.channel.send("Il est déjà Terrarien")}
   
  else{
    pUser.addRole(role);
    pUser.removeRole(role2);
    message.channel.send(`${pUser} est de nouveau Terrarien.`);
    pUser.send(`Tu n'es plus Terramerde, tu as retrouvé tes permissions merci de respecter les règles dorénavant ;)`)}
  
 }
    
});

bot.login(process.env.token);
