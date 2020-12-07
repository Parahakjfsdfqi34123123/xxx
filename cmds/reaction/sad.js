const Discord = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "sad",
    alias: [],
    descripcion: "",
    uso: ""
  },
  run: (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

	let gifs = ['https://i.ibb.co/nM5w0dT/3279318-full-fondos-de-pantalla-sad-anime-sad-anime-iphone-wallpapers-43-images-wallpaperboat.jpg', 'https://i.ibb.co/nQ52NLn/3c691659f01aba24f6a6deed24305989.gif']
	let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]

	const embed = new Discord.MessageEmbed()
    .setDescription(language("SAD").replace(/{{author}}/g, message.author.username))
    .setImage(randomIMG)
    .setColor("RANDOM")
	message.channel.send(embed)
}
}