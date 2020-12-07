const Discord = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "deredere",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

	let gifs = ['https://cdn.weebs.cl/images/AZJRxZpt.gif', 'https://ibb.co/yXK1shx', 'https://ibb.co/0hKsxsw']
	let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]

	const embed = new Discord.MessageEmbed()
    .setDescription(language("DEREDERE").replace(/{{author}}/g, message.author.username))
    .setImage(randomIMG)
    .setColor("RANDOM")
	message.channel.send(embed)
}
}