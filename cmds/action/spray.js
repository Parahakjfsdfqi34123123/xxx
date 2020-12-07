const Discord = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "spray",
    alias: [],
    descripcion: "",
	uso: "",
	cooldown: 2
  },run: (client, message, args) => {
	const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
	
	let gifs = ['https://cdn.weebs.cl/images/bbPgMyzv.gif', 'https://cdn.weebs.cl/images/Flqvfgk4.gif']
	let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]
	let user = message.mentions.users.first()

	if(!user) return message.channel.send(language("SPRAY_NO_MENTION"))
		
		let embed = new Discord.MessageEmbed()
		.setDescription(language("SPRAY").replace(/{{author}}/g, message.author.username).replace(/{{user}}/g, user.username))
		.setImage(randomIMG)
		.setColor("RANDOM")
		message.channel.send(embed)
	
  }
}