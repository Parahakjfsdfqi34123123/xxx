const Discord = require("discord.js")

module.exports = {
  config: {
    nombre: "rero",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: async (client, message, args) => {
  let gifs = ['https://imgur.com/wz912kn', 'https://imgur.com/gJI6223']
  let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]
  
  let embed = new Discord.MessageEmbed()
    .setDescription("rero rero rero")
    .setImage(randomIMG)
    .setColor("RANDOM")
  message.channel.send(embed)
}
}