let guildLanguages = require("../../Data/guilds-language.json")
const Discord = require("discord.js")

module.exports = {
  config: {
    nombre: "tsundere",
    alias: ["ts"],
    descripcion: "",
	uso: "",
	cooldown: 2
  },run: (client, message, args) => {
	const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
	
	let gifs = ['https://cdn.weebs.cl/images/ivW3zQOL.gif', 'https://cdn.weebs.cl/images/m94lSW9K.gif']
	let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]
	let user = message.mentions.users.first()

	if(!user) {
		
		let embed = new Discord.MessageEmbed()
		.setDescription(language("TSUNDERE").replace(/{{author}}/g, message.author.username))
		.setImage(randomIMG)
		.setColor("RANDOM")
		message.channel.send(embed)
	} else {
		
		let embed = new Discord.MessageEmbed()
		.setDescription(language("TSUNDERE_MENTION").replace(/{{author}}/g, message.author.username).replace(/{{user}}/g, user.username))
		.setImage(randomIMG)
		.setColor("RANDOM")
		message.channel.send(embed)
	}
  }
}