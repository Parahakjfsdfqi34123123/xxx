const db = require("megadb")
let prefix_db = new db.crearDB("prefixes");
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "setprefix",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 5
  },
  run: (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
  
    let prefix_default = '.';
    let permiso = "ADMINISTRATOR"
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(language("SETPREFIX_NO_PERMISSIONS").replace(/{{permiso}}/g, permiso))
    if(!args[0]) {
      prefix_db.establecer(`${message.guild.id}`, prefix_default)
      return message.channel.send(language("SETPREFIX_DEFAULT").replace(/{{prefix_default}}/g, prefix_default))
    }
    prefix_db.establecer(`${message.guild.id}`, args[0])
    return message.channel.send(language("SETPREFIX_SUCESS").replace(/{{new_prefix}}/g, args[0]))
  }
}