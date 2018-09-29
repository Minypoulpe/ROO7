const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = message.author.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Member Information")
    .setColor("#FF8000")
    .setThumbnail(bicon)
    .addField("Name", message.author.username)
    .addField("Role", message.author.roles)
    message.channel.send(botembed);
}

module.exports.help = {
  name:"memberinfo"
}
