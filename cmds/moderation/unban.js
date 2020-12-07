const Discord = require("discord.js")
const db = require("quick.db")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "unban",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 5
  },
  run: (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(language("UNBAN_NO_PERMISSIONS"))
    }
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(language("UNBAN_CLIENT_NO_PERMISSIONS"))
    }
  
    let userID = args[0];
    if(!userID) return message.channel.send(language("UNBAN_NO_ID"))
    
    message.guild.fetchBans().then(bans => {
      if(bans.size == 0) return;
      let bUser = bans.find(b => b.user.id == userID);
      if(!bUser) return;
      message.guild.members.unban(bUser.user);
    });
  }
}