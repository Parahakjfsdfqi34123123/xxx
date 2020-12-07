const Discord = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "splash",
    alias: [],
    descripcion: "",
	uso: "",
	cooldown: 2
  },run: (client, message, args) => {
	const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
	
	let gifs = ['https://images-ext-2.discordapp.net/external/MdQCGphxDhcSbEtmVxpi7Pi6ypakXfziQX2wliA07lY/https/cdn.weebs.cl/images/qXy7a1z0.gif', 'https://images-ext-2.discordapp.net/external/49U2joh7kKuxV6v3klXEg7bQXNq5OPqBsCyKr9VQKzA/https/cdn.weebs.cl/images/HQdF_cbn.gif']
	let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]
	let user = message.mentions.users.first()

	if(!user) return message.channel.send(language("SPLASH_NO_MENTION"))
		
		let embed = new Discord.MessageEmbed()
		.setDescription(language("SPLASH").replace(/{{author}}/g, message.author.username).replace(/{{user}}/g, user.username))
		.setImage(randomIMG)
		.setColor("RANDOM")
		message.channel.send(embed)
  }
}