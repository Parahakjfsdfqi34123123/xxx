const Discord = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "fbi",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

  let gifs = ['https://cdn.weebs.cl/images/npe5jSC8.gif', 'https://cdn.weebs.cl/images/W_Vmi4VN.gif']
  let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]
  
  let embed = new Discord.MessageEmbed()
    .setDescription(language("FBI"))
    .setImage(randomIMG)
    .setColor("RANDOM")
  message.channel.send(embed)
}
}