const Discord = require("discord.js");
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
  config: {
    nombre: "nekogif",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: async (client, message, args) => {
  let randomIMG = await neko.sfw.nekoGif();
  
  let embed = new Discord.MessageEmbed()
    .setDescription("Nekos")
    .setImage(randomIMG)
    .setColor("RANDOM")
  message.channel.send(embed)
}
}