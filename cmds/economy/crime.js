const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("parse-ms");
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "crime",
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
    
    //LO DEMÁS
    let amount = Math.floor(Math.random() * 124 + 18)
    let author = message.author;
    let timeout = 1800000;
    
    let crime = await db.fetch(`crime_${message.guild.id}_${author.id}`);
    
    if (crime !== null && timeout - (Date.now() - crime) > 0) {
    let time = ms(timeout - (Date.now() - crime));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(language("CRIME_LACK_OF_TIME_").replace(/{{author}}/g, author.tag).replace(/{{minutes}}/g, time.minutes).replace(/{{seconds}}/g, time.seconds))
    .setTimestamp()
    
    message.channel.send(timeEmbed)
      
    } else {
      
       if(Users_Premium && Users_Premium.includes(message.author.id)) {
         
          let amount = Math.floor(Math.random() * 300 + 124)
          let posibilidad = Math.floor(Math.random() * 100 + 1)
        
          if(posibilidad >= 10) {
            let embed = new Discord.MessageEmbed()
            .setAuthor(author.tag, author.displayAvatarURL())
            .setDescription(language("CRIME_SUCESS_EMBED_DESCRIPTION").replace(/{{amount}}/g, amount))
            .setColor("GREEN")
            .setTimestamp()
            
            message.channel.send(embed)
            
            db.add(`money_${message.guild.id}_${author.id}`, amount)
            db.set(`crimeG_${message.guild.id}_${author.id}`, Date.now())
         }

         if(posibilidad <= 10) {
            let noAmount = Math.floor(Math.randm() * 30 + 1)
            let embed = new Discord.MessageEmbed()
            .setAuthor(author.tag, author.displayAvatarURL())
            .setDescription(language("CRIME_NO_SUCESS_EMBED_DESCRPTION").replace(/{{amount}}/g, amount))
            .setColor("GREEN")
            .setTimestamp()
          
            db.subtract(`money_${message.guild.id}_${author.id}`, noAmount)
            db.set(`crimeG_${message.guild.id}_${author.id}`, Date.now())
          
            message.channel.send(embed)
          }
        }
      
      if(Users_Premium && !Users_Premium.includes(message.author.id)) {
        
        let amount = Math.floor(Math.random() * 210 + 30)
        let posibilidad = Math.floor(Math.random() * 100 + 10)
          
        if(posibilidad >= 45) {
          let embed = new Discord.MessageEmbed()
          .setAuthor(author.tag, author.displayAvatarURL())
          .setDescription(language("CRIME_SUCESS_EMBED_DESCRIPTION").replace(/{{amount}}/g, amount))
          .setColor("GREEN")
          .setTimestamp()

          message.channel.send(embed)

          db.add(`money_${message.guild.id}_${author.id}`, amount)
          db.set(`crime_${message.guild.id}_${author.id}`, Date.now())
        }
          
        if(posibilidad <= 45) {
          let noAmount = Math.floor(Math.randm() * 55 + 1)
          let embed = new Discord.MessageEmbed()
          .setAuthor(author.tag, author.displayAvatarURL())
          .setDescription(language("CRIME_NO_SUCESS_EMBED_DESCRPTION").replace(/{{amount}}/g, amount))
          .setColor("GREEN")
          .setTimestamp()

          message.channel.send(embed)
            
          db.subtract(`money_${message.guild.id}_${author.id}`, noAmount)
          db.set(`crime_${message.guild.id}_${author.id}`, Date.now())
        }
      }
    }
  }
}