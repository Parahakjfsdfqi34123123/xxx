const Discord = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "awoo",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

  let gifs = ['https://i.ibb.co/sQcV4B3/awoo.gif', 'https://i.ibb.co/89YdVpK/9CIKBbv.gif']
  let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]
  
  let embed = new Discord.MessageEmbed()
    .setImage(randomIMG)
    .setColor("RANDOM")
  message.channel.send(embed)
}
}