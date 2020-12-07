const Discord = require("discord.js")

module.exports = {
  config: {
    nombre: "poi",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: async (client, message, args) => {
  let gifs = ['https://i.ibb.co/vYtt0qP/yuudachi-poi-by-yuries-d8emuqz.jpg', 'https://i.ibb.co/gW8Pmsf/maxresdefault.jpg']
  let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]
  
  let embed = new Discord.MessageEmbed()
    .setDescription("Poi")
    .setImage(randomIMG)
    .setColor("RANDOM")
  message.channel.send(embed)
}
}