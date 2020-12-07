const Discord = require("discord.js")
const db = require("quick.db")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "goodbyechannel",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 5
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let permiso = "ADMINISTRATOR"
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(language("WELCOMECHANNEL_NO_PERMISSIONS").replace(/{{permiso}}/g, permiso))
  
  let channel = message.mentions.channels.first() || message.guild.channels.cache.find(c => c.name == args[0])
  if(!channel) return message.channel.send(language("WELCOMECHANNEL_NO_CHANEL"))
  
  db.set(`welcomechannel_${message.guild.id}`, channel.id)
  
  message.channel.send(language("WELCOMECHANNEL_SUCESS").replace(/{{channel}}/g, channel))
}
}