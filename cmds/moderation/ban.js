const Discord = require("discord.js")
const db = require("quick.db")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "ban",
    alias: ["suspender"],
    descripcion: "",
    uso: "",
    cooldown: 5
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(language("BAN_NO_PERMISSIONS"))
    }
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(language("BAN_CLIENT_NO_PERMISSIONS"))
    }
  
    let userm = message.mentions.members.first();
    if(!userm) return message.channel.send(language("BAN_NO_MENTION"))
    if (!message.guild.member(userm).bannable) return message.channel.send(language("BAN_MEMBER_NO_BANNABLE"));

    userm.ban()
  
    message.channel.send(language("BAN_SUCESS").repalce(/{{user}}/g, userm.tag))
  }
}