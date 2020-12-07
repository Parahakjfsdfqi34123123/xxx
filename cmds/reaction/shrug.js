const Discord = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "shrug",
    alias: [],
    descripcion: "",
    uso: ""
  },
  run: (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
	
let gifs = ['https://cdn.weebs.cl/images/XIcPwk7A.jpeg', 'https://cdn.weebs.cl/images/GC9BVvQG.jpeg']
let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]

const embed = new Discord.MessageEmbed()
	.setDescription(language("SHRUG").replace(/{{author}}/g, message.author.username))
    .setImage(randomIMG)
    .setColor("RANDOM")
message.channel.send(embed)

}
}