const Discord = require("discord.js")
const star = require("star-labs")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "dance",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

  
  let aB = message.author
  const aC = new Discord.MessageEmbed()
    .setDescription(language("DANCE").replace(/{{author}}/g, aB.username))
    .setImage(star.lick())
    .setColor('RANDOM')
  message.channel.send(aC);
}
}