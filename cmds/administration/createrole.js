const Discord = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "createrole",
    alias: [],
    cooldown: 5
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let permiso = "MANAGE_ROLES"
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(language("CREATEROLE_NO_PERMISSIONS").replace(/{{permiso}}/g, permiso));
    
    if(!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(language("CREATEROLE_CLIENT_NO_PERMISSIONS"))
    }

    let name = args[0]
    if(!name) return message.channel.send(language("CREATEROLE_NO_NAME").replace(/{{author}}/g, message.author.username))
    let color = args[1] || 'BLUE';
    if(color && !color.includes("#")) {
      color = "#" + args[1];
    }
    let reason = args.slice(2).join(' ');
    
    message.guild.roles.create({
      data: {
        name: name,
        color: color,
      },
      reason: reason
    }).then(console.log('Se ha creado un rol.')).catch(console.error)
    message.channel.send(language("CREATEROLE_SUCESS").replace(/{{nombre}}/g, name))
  }
}