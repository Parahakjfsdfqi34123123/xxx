const Discord = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "baka",
    alias: [],
    descripcion: "",
	uso: "",
	cooldown: 2
  },
  run: (client, message, args) => {
	const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
	
	let gifs = ['https://cdn.weebs.cl/images/B-eb3P6C.gif', 'https://cdn.weebs.cl/images/FEg2PVa5.gif']
	let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]
	let user = message.mentions.users.first()

	if(!user) {
		
		let embed = new Discord.MessageEmbed()
		.setDescription(language("BAKA").replace(/{{author}}/g, message.author.username))
		.setImage(randomIMG)
		.setColor("RANDOM")
		message.channel.send(embed)
	} else {
		
		let embed = new Discord.MessageEmbed()
		.setDescription(language("BAKA_MENTION").replace(/{{user}}/g, user.username))
		.setImage(randomIMG)
		.setColor("RANDOM")
		message.channel.send(embed)
	}
  }
}