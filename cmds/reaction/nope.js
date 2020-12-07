const Discord = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "nope",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
	
let gifs = ['https://i.ibb.co/Ptg0cSK/nope1.gif', 'https://i.ibb.co/v1t0ydT/nope2.gif']
let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]

const embed = new Discord.MessageEmbed()
	  .setDescription(language("NOPE").replace(/{{author}}/g, message.author.username))
    .setImage(randomIMG)
    .setColor("RANDOM")
message.channel.send(embed)

}
}