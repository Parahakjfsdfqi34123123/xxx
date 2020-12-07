const Discord = require("discord.js")

module.exports = {
  config: {
    nombre: "nani",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: async (client, message, args) => {
  let gifs = ['https://i.ibb.co/qmS10Gq/1xr2k3.jpg', 'https://i.ibb.co/5TyP9qP/3ebyv6.jpg']
  let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]
  
  let embed = new Discord.MessageEmbed()
    .setImage(randomIMG)
    .setColor("RANDOM")
  message.channel.send(embed)
}
}