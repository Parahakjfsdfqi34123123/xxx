const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "roulette",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 5
  },
  run: async (client, message, args) => {
    //IMPORTANTE
    let Users_Premium = db.get("Users_Premium")
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
  
    //LO DEMÁS
	  let user = message.author;

	  function isOdd(num) { 
  		if ((num % 2) == 0) return false;
  		else if ((num % 2) == 1) return true;
  	}
    
  	let colour = args[0];
  	let money = parseInt(args[1]);
  	let moneydb = await db.fetch(`money_${message.guild.id}_${user.id}`)

  	let random = Math.floor(Math.random() * 100);


    if (!colour)  return message.channel.send(language("ROULETTE_NO_COLOR_MAS_USE"));
    colour = colour.toLowerCase()
    if (!money) return message.channel.send(language("ROULETTE_NO_SPECIFICATION")); 
    if (money > moneydb) return message.channel.send(language("ROULETTE_NO_MUCH_MONEY"));
    
    if (colour == "b" || colour.includes("noir") || colour.includes("black")) colour = 0;
    else if (colour == "r" || colour.includes("rouge") || colour.includes("red")) colour = 1;
    else if (colour == "g" || colour.includes("vert") || colour.includes("green")) colour = 2;
    else return message.channel.send(language("ROULETTE_NO_COLOR"));
    
    
    
    if (random == 0 && colour == 2) {
        money *= 15
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed1 = new Discord.MessageEmbed()
        .setAuthor(language("ROULETTE_SUCESS_EMBED_AUTHOR"), client.user.displayAvatarURL())
        .setColor("GREEN")
        .setDescription(language("ROULETTE_SUCESS_COLOR_GREEN_EMBED_DESCRIPTION").replace(/{{money}}/g, money))
        .setTimestamp();
      
        message.channel.send(moneyEmbed1)
        console.log(`${message.author.tag} Ganó ${money} en verde.`)
      
    } else if (isOdd(random) && colour == 1) { // Red
        money = parseInt(money * 1.5)
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed2 = new Discord.MessageEmbed()
        .setAuthor(language("ROULETTE_SUCESS_EMBED_AUTHOR"), client.user.displayAvatarURL())
        .setColor("GREEN")
        .setDescription(language("ROULETTE_SUCESS_COLOR_RED_EMBED_DESCRIPTION").replace(/{{money}}/g, money))
        .setTimestamp();
      
        message.channel.send(moneyEmbed2)
      
    } else if (!isOdd(random) && colour == 0) { // Black
        money = parseInt(money * 2)
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed3 = new Discord.MessageEmbed()
        .setAuthor(language("ROULETTE_SUCESS_EMBED_AUTHOR"), client.user.displayAvatarURL())
        .setColor("GREEN")
        .setDescription(language("ROULETTE_SUCESS_COLOR_BLACK_EMBED_DESCRIPTION").replace(/{{money}}/g, money))
        .setTimestamp();
      
        message.channel.send(moneyEmbed3)
      
    } else { // Wrong
        db.subtract(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed4 = new Discord.MessageEmbed()
        .setAuthor(language("ROULETTE_SUCESS_EMBED_AUTHOR"), client.user.displayAvatarURL())
        .setColor("RED")
        .setDescription(language("ROULETTE_SUCESS_NO_WIN_EMBED_DESCRIPTION").replace(/{{money}}/g, money))
        .setTimestamp();
      
        message.channel.send(moneyEmbed4)
    }
  }
}