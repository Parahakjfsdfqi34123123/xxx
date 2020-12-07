const Discord = require("discord.js")
const mars = require("marsnpm")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "sleep",
    alias: [],
    descripcion: "",
    uso: ""
  },
  run: async(client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
  let url = await mars.sleep()
  
  let embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setImage(url);
  message.channel.send(embed)
}
}