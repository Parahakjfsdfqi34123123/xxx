const Discord = require("discord.js")

module.exports = {
  config: {
    nombre: "neko",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: async (client, message, args) => {
  let gifs = ['https://nekos.moe/image/BkHcX2hKM', 'https://nekos.moe/image/BJcq1Sx6M']
  let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]
  
  let embed = new Discord.MessageEmbed()
    .setDescription('Neko!!')
    .setImage(randomIMG)
    .setColor("RANDOM")
  message.channel.send(embed)
}
}