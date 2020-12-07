const db = require("quick.db")
const Discord = require("discord.js")
const ms = require("parse-ms");
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "beg",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 5
  },
  run: async (client, message, args) => {
    //IMPORTANTE
    let Users_Premium = db.get(`Users_Premium`)
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
    
    //lO DEMÁS
    let user = message.author;

    let timeout = 180000;
    

    let beg = await db.fetch(`beg_${message.guild.id}_${user.id}`);
    if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(language("BEG_LACK_OF_TIME_").replace(/{{user}}/g, user.tag).replace(/{{minutes}}/g, time.minutes).replace(/{{seconds}}/g, time.seconds))
    .setTimestamp()
    
    message.channel.send(timeEmbed)
    } else {
      if(Users_Premium && Users_Premium.includes(message.author.id)) {
        
        let amount = 100;
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`beg_${message.guild.id}_${user.id}`, Date.now())
    
        let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)
    
        let moneyEmbed = new Discord.MessageEmbed()
        .setAuthor(language("BALANCE_EMBED_AUTHOR").replace(/{{user}}/g, user.username), user.avatarURL())
        .setColor("GREEN")
        .setDescription(language("BEG_SUCESS_EMBED_DESCRIPTION").replace(/{{user}}/g, user.username).replace(/{{amount}}/g, amount))
        .addField(language("BALANCE_EMBED_FIELD"),
        language("BEG_SUCESS_FIELD_CONTENT").replace(/{{bal}}/g, bal))
        .setTimestamp()
    
        message.channel.send(moneyEmbed)
      }
      
      
      if(Users_Premium && !Users_Premium.includes(message.author.id)) {
        let amount = 40;
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`beg_${message.guild.id}_${user.id}`, Date.now())
    
        let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)
    
        let moneyEmbed = new Discord.MessageEmbed()
        .setAuthor(language("BALANCE_EMBED_AUTHOR").replace(/{{user}}/g, user.username), user.avatarURL())
        .setColor("GREEN")
        .setDescription(language("BEG_SUCESS_EMBED_DESCRIPTION").replace(/{{user}}/g, user.username).replace(/{{amount}}/g, amount))
        .addField(language("BALANCE_EMBED_FIELD"),
        language("BEG_SUCESS_FIELD_CONTENT").replace(/{{bal}}/g, bal))
        .setTimestamp()
    
        message.channel.send(moneyEmbed)
      }
    }
  }
}