const Discord = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "heal",
    alias: [],
    descripcion: "",
	uso: "",
	cooldown: 2
  },run: (client, message, args) => {
	const guildLanguage = guildLanguages[message.guild.id] || "spanish";
	const language = require(`../../languages/${guildLanguage}`);
	
	let gifs = ['https://cdn.weebs.cl/images/8Yf2pAFE.gif', 'https://cdn.weebs.cl/images/ys054Rvh.gif']
	let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]
	let user = message.mentions.users.first()

	if(!user) {
		
		let embed = new Discord.MessageEmbed()
		.setDescription(language("HEAL").replace(/{{author}}/g, message.author.username))
		.setImage(randomIMG)
		.setColor("RANDOM")
		message.channel.send(embed)
	} else {
		
		let embed = new Discord.MessageEmbed()
		.setDescription(language("HEAL_MENTION").replace(/{{author}}/g, message.author.username).replace(/{{user}}/g, user.username))
		.setImage(randomIMG)
		.setColor("RANDOM")
		message.channel.send(embed)
	}
  }
}