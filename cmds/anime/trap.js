const Discord = require("discord.js")

module.exports = {
  config: {
    nombre: "trap",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: async (client, message, args) => {
  let gifs = ['https://i.ibb.co/cTL9NSN/flat800x800075f.jpg', 'https://i.ibb.co/z6Yb44b/tenor.png']
  let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]
  
  let embed = new Discord.MessageEmbed()
    .setDescription("Trap")
    .setImage(randomIMG)
    .setColor("RANDOM")
  message.channel.send(embed)
}
}