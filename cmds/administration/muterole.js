const Discord = require("discord.js")
const db = require("quick.db")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "muterole",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 5
  },run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
  
    let perms1 = 'Manage Guild'
    let perms2 = 'Mute members'
    let perms3 = 'Manage Roles'
  
    if(!message.member.hasPermission(['MANAGE_GUILD', 'MUTE_MEMBERS', 'MANAGE_ROLES'])) {
      return message.channel.send(language("MUTEROLE_NO_PERMISSIONS").replace(/{{perms1}}/g, perms1).replace(/{{perms2}}/g, perms2).replace(/{{perms3}}/g, perms3))
    }
  
    let role = message.mentions.roles.first()
    if(!role) return message.channel.send(language("MUTEROLE_NO_ROLE"))
  
    db.set(`muterole_${message.guild.id}`, role.id)
  
    message.channel.send(language("MUTEROLE_SUCESS").replace(/{{role}}/g, role.name))
  }
}