const db = require("quick.db")
const Discord = require("discord.js")
const ms = require("parse-ms")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "work",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 4
  },
  run: async (client, message, args) => {
    //IMPORTANTE
    let Users_Premium = db.get('Users_Premium')
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
  
    //LO DEMÁS
    
    let user = message.author;
    let author = await db.fetch(`work_${message.guild.id}_${user.id}`) 
  
    let timeout = 600000;
  
    if (author !== null && timeout - (Date.now() - author) > 0) {
    let time = ms(timeout - (Date.now() - author));
    
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(language("WORK_LACK_OF_TIME").replace(/{{user}}/g, user.tag).replace(/{{minutes}}/g, time.minutes).replace(/{{seconds}}/g, time.seconds))
    .setTimestamp()
      
      message.channel.send(timeEmbed)
    } else {
      
      if(Users_Premium && !Users_Premium.includes(message.author.id)) {
        let replies = language("WORK_REPLIES")
        let amount = Math.floor(Math.random() * 664 + 18)
        let result = Math.floor((Math.random() * replies.length));
    
        let embed = new Discord.MessageEmbed()
        .setAuthor(`${user.tag}`, user.avatarURL())
        .setDescription(`${replies[result]} **${amount}** 💸`)
        .setColor('GREEN')
        .setTimestamp()
    
        message.channel.send(embed)
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`work_${message.guild.id}_${user.id}`, Date.now())
      }
      
      if(Users_Premium && Users_Premium.includes(message.author.id)) {
        let replies = language("WORK_REPLIES")
        let amount = Math.floor(Math.random() * 950 + 300)
        let result = Math.floor((Math.random() * replies.length));
    
        let embed = new Discord.MessageEmbed()
        .setAuthor(`${user.tag}`, user.avatarURL())
        .setDescription(`${replies[result]} **${amount}** 💸`)
        .setColor('GREEN')
        .setTimestamp()
    
        message.channel.send(embed)
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`work_${message.guild.id}_${user.id}`, Date.now())
      }
    }
  }
}