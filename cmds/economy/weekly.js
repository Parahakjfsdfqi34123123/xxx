const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "weekly",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: async (client, message, args) => {
    //IMPORTANTE
    let Users_Premium = db.get(`Users_Premium`);
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
  
    //LO DEMÁS
    let embed = new Discord.MessageEmbed()
    .setAuthor(language("WEEKLY_NO_SUCESS_EMBED_AUTHOR"), client.user.displayAvatarURL())
    .setDescription(language("WEEKLY_NO_SUCESS_EMBED_DESCRIPTION"))
    .addField(language("WEEKLY_NO_SUCESS_EMBED_FIELD"), language("WEEKLY_NO_SUCESS_EMBED_FIELD_CONTENT"))
    .setColor('GREEN')
    .setImage('https://i.ibb.co/JBxQgb2/descarga.jpg')
    .setTimestamp()
    .setFooter(`${client.user.username} v1.2.1`)
  
    if(!Users_Premium.includes(message.author.id)) return message.channel.send(embed);
    
    var user = message.author;
  
    let timeout = 604800000;
    let amount = Math.floor(Math.random() * (2350 - 7890) + 2350)

    let weekly = await db.fetch(`weekly_${message.guild.id}_${user.id}`);

    if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
      let time = ms(timeout - (Date.now() - weekly));
  
      let timeEmbed = new Discord.MessageEmbed()
      .setAuthor(language("WEEKLY_EMBED_AUTHOR"), client.user.displayAvatarURL())
      .setColor("GREEN")
      .setDescription(language("WEEKLY_LACK_OF_TIME").replace(/{{user}}/g, user.username).replace(/{{days}}/g, time.days).replace(/{{hours}}/g, time.hours).replace(/{{minutes}}/g, time.minutes).replace(/{{seconds}}/g, time.seconds))
      .setTimestamp()
      message.channel.send(timeEmbed)
      
    } else {
      
      let moneyEmbed = new Discord.MessageEmbed()
      .setAuthor(language("WEEKLY_EMBED_AUTHOR"), client.user.displayAvatarURL())
      .setColor("GREEN")
      .setDescription(language("WEEKLY_SUCESS").replace(/{{user}}/g, user.username).replace(/{{amount}}/g, amount))
      .setTimestamp()
      
      message.channel.send(moneyEmbed)
      
      db.add(`money_${message.guild.id}_${user.id}`, amount)
      db.set(`weekly_${message.guild.id}_${user.id}`, Date.now())
    }
  }
}