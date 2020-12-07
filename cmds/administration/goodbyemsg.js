const Discord = require("discord.js")
const db = require("quick.db")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "goodbyemsg",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 5
  },
  run: (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    if(!message.member.hasPermission("ADMINISTRATOR")) {
      message.chanenl.send(language("GOODBYEMESSAGE_NO_PERMISSIONS"))
    }

    let goodbyemsg = db.get(`leaveMessage_${message.guild.id}`);
  
    let text = args.join(' ')
    
    if(!text) {
     let embed = new Discord.MessageEmbed()
     .setAuthor(language("GOODBYEMESSAGE_EMBED_AUTHOR"), message.guild.iconURL()) 
     .addField('')
    }return message.channel.send(`El mensaje de bienvenida configurado en este servidor es:\n\`\`\`css\n\`\`\``)
  
    db.set(`leaveMessage_${message.guild.id}`, text)
  
    message.channel.send(`<:yes:723198776474468433> Tu **mensaje de bienvenida personalizado** ahora está configurado.`)
  }
}