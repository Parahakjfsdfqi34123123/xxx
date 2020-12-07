const db = require("quick.db")
const Discord = require("discord.js")
const ms = require("parse-ms");
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "daily",
    alias: ["d"],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: async (client, message, args) => {
    //IMPORTANTE
    let Users_Premium = db.get(`Users_Premium`)
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
    
    //LO DEMÁS
    let user = message.author;

    let timeout = 86400000;
    
  
    let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
      let time = ms(timeout - (Date.now() - daily));
  
      let timeEmbed = new Discord.MessageEmbed()
      .setAuthor(language("DAILY_EMBED_AUTHOR"), user.displayAvatarURL())
      .setColor("GREEN")
      .setDescription(language("DAILY_LACK_OF_TIME").replace(/{{user}}/g, user.username).replace(/{{hours}}/g, time.hours).replace(/{{minutes}}/g, time.minutes).replace(/{{seconds}}/g, time.seconds))
      .setTimestamp()
      
      message.channel.send(timeEmbed)
    } else {
      if(Users_Premium.includes(message.author.id)) {
        let amount = 500;
          
        let moneyEmbed = new Discord.MessageEmbed()
        .setAuthor(language("DAILY_EMBED_AUTHOR"), user.displayAvatarURL())
        .setColor("GREEN")
        .setDescription(language("DAILY_SUCESS_EMBED_DESCRIPTION").replace(/{{user}}/g, user.username).replace(/{{amount}}/g, amount))
        .setTimestamp()
        
        message.channel.send(moneyEmbed)
        
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`daily_${message.guild.id}_${user.id}`, Date.now())
      }
      
      if(!Users_Premium.includes(message.author.id)) {
        let amount = 250;
          
        let moneyEmbed = new Discord.MessageEmbed()
        .setAuthor(language("DAILY_EMBED_AUTHOR"), user.displayAvatarURL())
        .setColor("GREEN")
        .setDescription(language("DAILY_SUCESS_EMBED_DESCRIPTION").replace(/{{user}}/g, user.username).replace(/{{amount}}/g, amount))
        .setTimestamp()
        
        message.channel.send(moneyEmbed)
        
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`daily_${message.guild.id}_${user.id}`, Date.now())
      }
    }
  }
}