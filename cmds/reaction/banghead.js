const Discord = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "banghead",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

	let gifs = ['https://ibb.co/ZdzpqcP', 'https://ibb.co/YTHDzXN']
	let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]

	const embed = new Discord.MessageEmbed()
    .setDescription(language("BANGHEAD").replace(/{{author}}/g, message.author.username))
    .setImage(randomIMG)
    .setColor("RANDOM")
	message.channel.send(embed)
}
}