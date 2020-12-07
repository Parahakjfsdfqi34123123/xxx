const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const dbs = require("megadb")
let levels_db = new dbs.crearDB("niveles")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "deposit",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 3
  },
  run: async (client, message, args) => {
    //IMPORTANTE
    let Users_Premium = db.get("Users_Premium")
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
  
    //LO DEMÁS
    let user = message.author;

    let member = db.fetch(`money_${message.guild.id}_${user.id}`)
    let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)
    
    if(args[0]) {
      let cate = args[0].replace("-", "")

      if (cate == 'all') {
        let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
        let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
        
        let embedbank = new Discord.MessageEmbed()
        .setAuthor(user.tag, user.displayAvatarURL())
        .setColor('GREEN')
        .setDescription(language("DEPOSIT_ALL_NO_MONEY"))
        .setTimestamp()

        if(money === 0) return message.channel.send(embedbank)

        db.add(`bank_${message.guild.id}_${user.id}`, money)
        db.subtract(`money_${message.guild.id}_${user.id}`, money)
        
        let embed5 = new Discord.MessageEmbed()
        .setAuthor(user.tag, user.displayAvatarURL())
        .setColor("GREEN")
        .setDescription(language("DEPOSIT_ALL_SUCESS").replace(/{{money}}/g, money))
        .setTimestamp()
      
        message.channel.send(embed5)
  
       } else {
        
          let bal = db.fetch(`money_${message.guild.id}_${user.id}`)
      
          let embed4 = new Discord.MessageEmbed()
          .setColor("GREEN")
          .setDescription(language("DEPOSIT_NO_MONEY_AMOUNT").replace(/{{bal}}/g, bal))
          .setTimestamp()

          if (member < cate) {
            return message.channel.send(embed4)
          }
        
          db.add(`bank_${message.guild.id}_${user.id}`, cate)
          db.subtract(`money_${message.guild.id}_${user.id}`, cate)
          
          let moneybilletera = db.fetch(`money_${message.guild.id}_${user.id}`)
          if (moneybilletera === null) moneybilletera = 0;

          let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
          if (bank === null) bank = 0;
          
          let embedSucess = new Discord.MessageEmbed()
          .setAuthor(user.tag, user.displayAvatarURL())
          .setDescription(language("DEPOSIT_SUCESS").replace(/{{cate}}/g, cate))
          .setColor('GREEN')
          .setTimestamp()

          message.channel.send(embedSucess)
      }
    }
    
    if(!args[0]) {
      let embed = new Discord.MessageEmbed()
      .setAuthor(user.tag, user.displayAvatarURL())
      .setDescription(language("DEPOSIT_NO_ARGS_EMBED_DESCRIPTION"))
      .addField(language("DEPOSIT_NO_ARGS_FIELD"), language("DEPOSIT_NO_ARGS_FIELD_CONTENT"))
      .setColor('RED')
      .setTimestamp()
      
      message.channel.send(embed)
    }
  }
}