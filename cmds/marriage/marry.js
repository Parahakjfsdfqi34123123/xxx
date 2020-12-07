const Discord = require("discord.js");
const db = require("quick.db");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = {
  config: {
    nombre: "marry",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 10
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let user = await message.mentions.users.first() || client.users.cache.get(args[0]);
    if (!user) return message.channel.send(language("MARRY_NO_MENTION"))

    if(db.get(`marry_${user.id}`)) return message.channel.send(language("MARRY_ALREADY_USER_MARRIED"));
    if(db.get(`marry_${message.author.id}`)) return message.channel.send(language("MARRY_ALREADY_AUTHOR_MARRIED"));

    message.channel.send(language("MARRY_PROPOSE_WAIT").replace(/{{usuario}}/g, user).replace(/{{author}}/g, message.author));

    const collector = message.channel.createMessageCollector(m => m.author.id === user.id && m.channel.id === message.channel.id, {time : 20000});
    
    collector.on("collect", collected => { 
      if (collected.content.toLowerCase() === "si" || collected.content.toLowerCase() === 'yes'){ 
        message.channel.send(language("MARRY_SUCESS"));
        
        db.set(`marry_${message.author.id}`, user.id);
        db.set(`marry_${user.id}`, message.author.id)
        
      } else if (collected.content.toLowerCase() === "no" || collected.content.toLowerCase() === 'not'){ 
        message.channel.send(language("MARRY_SUCESS_NO_ACCEPT"));
      }
    });

    collector.on("end", collected => { 
      if (collected.size === 0) return message.channel.send(language("MARRY_NO_SUCESS"));
      });  
  }
}