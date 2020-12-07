const Discord = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = {
  config: {
    nombre: "roles",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 3
  },
  run: (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let roles = message.guild.roles.cache.filter(r => r.name !== '@everyone');
    let rlist = roles.map(r => r.name).join('\n');
    
    let embed = new Discord.MessageEmbed()
    .setAuthor(language("ROLES_EMBED_AUTHOR").replace(/{{server}}/g, message.guild.name), message.guild.iconURL())
    .setDescription(rlist)
    .setColor('RANDOM')
    
    message.channel.send(embed)
  }
}