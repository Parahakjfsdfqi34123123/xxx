const Discord = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "jpose",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

  let gifs = ['https://cdn.weebs.cl/images/d6q0W0P_.gif', 'https://cdn.weebs.cl/images/bvJdTTUO.gif']
  let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]
  
  let embed = new Discord.MessageEmbed()
    .setDescription(language("JPOSE").replace(/{{author}}/g, message.author.username))
    .setImage(randomIMG)
    .setColor("RANDOM")
  message.channel.send(embed)
}
}