const Discord = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "cuddle",
    alias: [],
    descripcion: "",
	uso: "",
	cooldown: 2
  },run: (client, message, args) => {
	const guildLanguage = guildLanguages[message.guild.id] || "spanish";
	const language = require(`../../languages/${guildLanguage}`);
	
	let gifs = ['https://cdn.weebs.cl/images/BvmBZbjz.gif', 'https://cdn.weebs.cl/images/whs21FZO.gif']
	let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]
	let user = message.mentions.users.first()

	if(!user) return message.channel.send(language("CUDDLE_NO_MENTION"))
		
		let embed = new Discord.MessageEmbed()
		.setDescription(language("CUDDLE").replace(/{{author}}/g, message.author.username).replace(/{{user}}/g, user.username))
		.setImage(randomIMG)
		.setColor("RANDOM")
		message.channel.send(embed)
	
}
}