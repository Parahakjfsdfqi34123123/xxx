const slotItems = ["🍉", "🍊", "🍒", "🍋", "🍇", "🃏", "💵"];
const db = require("quick.db");
const Discord = require('discord.js');
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "slots",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: async (client, message, args) => {
    //IMPORTANTE
    let Users_Premium = db.get("Users_Premium")
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
  
    //LO DEMÁS
    let user = message.author;
    let moneydb = await db.fetch(`money_${message.guild.id}_${user.id}`)
    let money = parseInt(args[0]);
    let win = false;
    
    if(!args[0] || money < 10) {
      return message.channel.send(language("SLOTS_MONEY_NO_10"))
    }
    
    if(moneydb < money) {
      return message.channel.send(language("SLOTS_NO_MONEY"))
    }

    let number = []
    for (var i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if(Users_Premium.includes(message.author.id)) {
      if (number[0] == number[1] && number[1] == number[2]) { 
        money *= 15
        win = true;
      } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 7
        win = true;
      }
    }

    if(!Users_Premium.includes(message.author.id)) {
      if (number[0] == number[1] && number[1] == number[2]) { 
        money *= 9
        win = true;
      } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 2
        win = true;
      }
    }
    
	
    if (win) {
        let slotsEmbed1 = new Discord.MessageEmbed()
            .setAuthor('Slots', user.displayAvatarURL())
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\n` + language("SLOTS_SUCESS_WIN").replace(/{{money}}/g, money))
            .setColor("GREEN")
            .setTimestamp()
        message.channel.send(slotsEmbed1)
        db.add(`money_${message.guild.id}_${user.id}`, money)
    } else {
        let slotsEmbed = new Discord.MessageEmbed()
            .setAuthor('Slots', user.displayAvatarURL())
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\n` + language("SLOTS_SUCESS_NO_WIN").replace(/{{money}}/g, money))
            .setColor("RED")
            .setTimestamp()
        message.channel.send(slotsEmbed)
        db.subtract(`money_${message.guild.id}_${user.id}`, money)
    }

  }
}