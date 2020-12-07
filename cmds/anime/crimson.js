const Discord = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "crimson",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

  let gifs = ['https://66.media.tumblr.com/ff2f927cf5f79ddbb2cbbd366a373340/tumblr_pnpmspDg4Z1vz5npso1_540.gif', 'https://66.media.tumblr.com/ff2f927cf5f79ddbb2cbbd366a373340/tumblr_pnpmspDg4Z1vz5npso1_540.gif']
  let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]
  
  let embed = new Discord.MessageEmbed()
    .setDescription(language("CRIMSON").replace(/{{author}}/g, message.author.username))
    .setImage(randomIMG)
    .setColor("RANDOM")
  message.channel.send(embed)
}
}