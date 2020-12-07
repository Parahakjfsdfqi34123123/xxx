const Discord = require("discord.js")
const db = require("quick.db");
const ms = require("parse-ms");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = {
  config: {
    nombre: "withdraw",
    alias: ["retirar"],
    cooldown: 4
  },
  run: async (client, message, args) => {
    //IMPORTANTE
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
  
    //LO DEMÁS
    let user = message.author
    
    let member = db.fetch(`money_${message.guild.id}_${user.id}`)
    let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)
    
    if(args[0]) {
      let cate = args[0].replace("-", "")
      
      if (cate == 'all') {
        let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
        let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
      
        let embedbank = new Discord.MessageEmbed()
        .setAuthor(user.tag, user.avatarURL())
        .setColor('GREEN')
        .setDescription(language("WITHDRAW_NO_MONEY"))
        .setTimestamp()
        
        if(bank === 0) return message.channel.send(embedbank)
        
        db.subtract(`bank_${message.guild.id}_${user.id}`, bank)
        db.add(`money_${message.guild.id}_${user.id}`, bank)
        
        let embed = new Discord.MessageEmbed()
        .setAuthor(user.tag, user.avatarURL())
        .setDescription(language("WITHDRAW_ALL_MONEY").replace(/{{bank}}/g, bank))
        .setColor('GREEN')
        .setTimestamp()
      
        message.channel.send(embed)
      } else {
        
        let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
        let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
      
        let embedbank = new Discord.MessageEmbed()
        .setAuthor(user.tag, user.avatarURL())
        .setColor('GREEN')
        .setDescription(language("WITHDRAW_NO_MONEY"))
        .setTimestamp()
        
        if(bank === 0) return message.channel.send(embedbank)
        
        let bal = db.fetch(`bank_${message.guild.id}_${user.id}`)
        if(bal == null) bal = 0;
        
        let embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(language("WITHDRAW_NO_MUCH_MONEY").replace(/{{bal}}/g, bal))
        .setTimestamp()
        
        if(member2 < cate) {       
          return message.channel.send(embed)
        }
      
        db.subtract(`bank_${message.guild.id}_${user.id}`, cate)
        db.add(`money_${message.guild.id}_${user.id}`, cate)
      
        let embedSucess = new Discord.MessageEmbed()
          .setAuthor(user.tag, user.avatarURL())
          .setDescription(language("WITHDRAW_SUCESS").replace(/{{cate}}/g, cate))
          .setColor('GREEN')
          .setTimestamp()

          message.channel.send(embedSucess)      
      }
      
      
    }
    
      
    if(!args[0]) {
      let embed = new Discord.MessageEmbed()
      .setAuthor(user.tag, user.avatarURL())
      .setDescription(language("WITHDRAW_NO_SPECIFICATION_ARGS_EMBED_DESCRIPTION"))
      .addField(language("WITHDRAW_NO_SPECIFICATION_ARGS_EMBED_FIELD"), language("WITHDRAW_NO_SPECIFICATION_ARGS_EMBED_FIELD_CONTENT"))
      .setColor('GREEN')
      .setTimestamp()
      
      message.channel.send(embed)
    }
  }
}