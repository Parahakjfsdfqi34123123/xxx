const Discord = require("discord.js")

module.exports = {
  config: {
    nombre: "rem",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: async (client, message, args) => {
  let gifs = ['https://i.ibb.co/s9qXfMm/rero.gif', 'https://i.ibb.co/chcrLfg/rero2.png']
  let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]
  
  let embed = new Discord.MessageEmbed()
    .setDescription("Rem")
    .setImage(randomIMG)
    .setColor("RANDOM")
  message.channel.send(embed)
}
}