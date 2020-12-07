const Discord = require("discord.js");
let guildLanguages = require("../../Data/guilds-language.json");
const moment = require("moment");

module.exports = {
  config: {
    nombre: "roleinfo",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 3
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
    
    if(!role) return message.channel.send(language("ROLEINFO_NO_ROLE"))
  
    const rol = new Discord.MessageEmbed()
    .setAuthor(language("ROLEINFO_EMBED_AUTHOR").replace(/{{role}}/g, role.name), message.guild.iconURL())
    .addField(language("ROLEINFO_EMBED_FIELD_NAME"), `${role.name}`, true)
    .addField("ID:", `${role.id}`, true) //Id del rol
    .addField(language("ROLEINFO_EMBED_FIELD_CREATED"), moment.utc(role.createdAt).format('DD/MM/YYYY h:mm A'), true)
    .addField(language("ROLEINFO_EMBED_FIELD_MEMBERS"), `${role.members.size}`, true)
    .addField(language("ROLEINFO_EMBED_FIELD_POSITION"), `${role.rawPosition}`, true)
    .addField(language("ROLEINFO_EMBED_FIELD_HEXCOLOR"), `${role.hexColor}`, true) 
    .addField(language("ROLEINFO_EMBED_FIELD_MENTIONABLE"), `${role.mentionable ? language("ROLEINFO_BOOLEANS_YES") : language("ROLEINFO_BOOLEANS_NOT")}`, true)
    .addField(language("ROLEINFO_EMBED_FIELD_SEPARATED"), `${role.hoist ? language("ROLEINFO_BOOLEANS_YES") : language("ROLEINFO_BOOLEANS_NOT")}`, true)
    .addField(language("ROLEINFO_EMBED_FIELD_MANAGED_BY_THE_SYSTEM"), `${role.managed ? language("ROLEINFO_BOOLEANS_YES") : language("ROLEINFO_BOOLEANS_NOT")}`, true)
    .setColor(role.hexColor)
     
    message.channel.send(rol)
  }
}