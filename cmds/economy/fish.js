const Discord = require("discord.js")
const db = require("quick.db")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "fish",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 3
  },
  run: async (client, message, args) => {
    //IMPORTANTE
    let Users_Premium = db.get(`Users_Premium`)
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
  
    //LO DEMÁS
    let rollfish = Math.floor(Math.random() * 4) +1;
  
    let user = message.author;
    let author = await db.fetch(`fish_${message.guild.id}_${user.id}`) 
    
    if(Users_Premium && Users_Premium.includes(message.author.id)) {
  
  	  if(rollfish === 1){
        let amount = Math.floor(Math.random() * 50) + 30;
        let embed = new Discord.MessageEmbed()
        .setAuthor('Fish', user.displayAvatarURL())
        .setDescription(language("FISH_SUCESS_EMBED_DESCRIPTION_ROLL_ONE").replace(/{{amount}}/g, amount))
        .setColor('GREEN')
        .setTimestamp()
        message.channel.send(embed)

        db.add(`money_${message.guild.id}_${user.id}`, amount)

    	}else if(rollfish === 2){
        let amount = Math.floor(Math.random() * 100) + 50;
        let embed = new Discord.MessageEmbed()
        .setAuthor('Fish', user.displayAvatarURL())
        .setDescription(language("FISH_SUCESS_EMBED_DESCRIPTION_ROLL_TWO").replace(/{{amount}}/g, amount))
        .setColor('GREEN')
        .setTimestamp()
        message.channel.send(embed)

        db.add(`money_${message.guild.id}_${user.id}`, amount)

    	}else if(rollfish === 3){
        let amount = Math.floor(Math.random() * 200) + 100;
        let embed = new Discord.MessageEmbed()
        .setAuthor('Fish', user.displayAvatarURL())
        .setDescription(language("FISH_SUCESS_EMBED_DESCRIPTION_ROLL_THREE").replace(/{{amount}}/g, amount))
        .setColor('GREEN')
        .setTimestamp()
        message.channel.send(embed)

        db.add(`money_${message.guild.id}_${user.id}`, amount)
  	  } else {
        message.channel.send(language("FISH_NO_SUCESS"))
      }
    }
    
    if(Users_Premium && !Users_Premium.includes(message.author.id)) {
      if(rollfish === 1){
        let amount = Math.floor(Math.random() * 5) + 1;
        let embed = new Discord.MessageEmbed()
        .setAuthor('Fish', user.displayAvatarURL())
        .setDescription(language("FISH_SUCESS_EMBED_DESCRIPTION_ROLL_ONE").replace(/{{amount}}/g, amount))
        .setColor('GREEN')
        .setTimestamp()
        message.channel.send(embed)

        db.add(`money_${message.guild.id}_${user.id}`, amount)

    	}else if(rollfish === 2){
        let amount = Math.floor(Math.random() * 50) + 20;
        let embed = new Discord.MessageEmbed()
        .setAuthor('Fish', user.displayAvatarURL())
        .setDescription(language("FISH_SUCESS_EMBED_DESCRIPTION_ROLL_TWO").replace(/{{amount}}/g, amount))
        .setColor('GREEN')
        .setTimestamp()
        message.channel.send(embed)

        db.add(`money_${message.guild.id}_${user.id}`, amount)

    	}else if(rollfish === 3){
        let amount = Math.floor(Math.random() * 80) + 50;
        let embed = new Discord.MessageEmbed()
        .setAuthor('Fish', user.displayAvatarURL())
        .setDescription(language("FISH_SUCESS_EMBED_DESCRIPTION_ROLL_THREE").replace(/{{amount}}/g, amount))
        .setColor('GREEN')
        .setTimestamp()
        message.channel.send(embed)

        db.add(`money_${message.guild.id}_${user.id}`, amount)
  	  }
    }
  }
}