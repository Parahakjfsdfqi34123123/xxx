const Discord = require("discord.js")
const mars = require("marsnpm")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "cry",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: async(client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

  let url = await mars.cry()
  
  let embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(language("CRY").replace(/{{author}}/g, message.author.username))
  .setImage(url);
  message.channel.send(embed)
}
}