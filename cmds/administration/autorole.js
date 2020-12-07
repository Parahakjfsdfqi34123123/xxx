const Discord = require("discord.js")
const db = require("quick.db")
const db2 = require("megadb")
let prefix_db = new db2.crearDB('prefixes')
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "autorole",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 5
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let prefix = prefix_db.tiene(`${message.guild.id}`) ? await prefix_db.obtener(`${message.guild.id}`) : '.';

    let permiso = "MANAGE_GUILD"
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(language("AUTOROLE_NO_PERMISSIONS").replace(/{{permiso}}/g, permiso))
  
    if(args[0] == 'on') {
      let rol = message.mentions.roles.first()
      if(!rol) return message.channel.send(language("AUTOROLE_NO_MENTION").replace(/{{prefix}}/g, prefix))
  
      db.set(`welrole_${message.guild.id}`, role.id)
      message.channel.send(language("AUTOROLE_SUCESS").replace(/{{rol}}/g, rol.name))
    }
    if(args[0] == 'off') {
      return message.channel.send(language("AUTOROLE_DISABLE"))
      db.delete(`welrole_${message.guild.id}`)
    }
  }
}