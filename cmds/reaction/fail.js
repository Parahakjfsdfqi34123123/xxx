const Discord = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "fail",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
    
	let gifs = ['https://ibb.co/McvD50B', 'https://ibb.co/Cv9H7hS']
	let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]

	const embed = new Discord.MessageEmbed()
    .setDescription(language("FAIL").replace(/{{author}}/g, message.author.username))
    .setImage(randomIMG)
    .setColor("RANDOM")
	message.channel.send(embed)
}
}