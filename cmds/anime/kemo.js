const Discord = require("discord.js")

module.exports = {
  config: {
    nombre: "kemo",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: async (client, message, args) => {
  let gifs = ['https://cdn.weebs.cl/images/2SVAAOch.jpeg', 'https://cdn.weebs.cl/images/ZA3e0KH3.jpeg']
  let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]
  
  let embed = new Discord.MessageEmbed()
    .setDescription("Kemonomimi")
    .setImage(randomIMG)
    .setColor("RANDOM")
  message.channel.send(embed)
}
}