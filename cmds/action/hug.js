const Discord = require("discord.js")
const mars = require("marsnpm")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "hug",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },run: async(client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

  let url = await mars.hug()
  let user = message.mentions.users.first()

	if(!user) return message.channel.send(language("HUG_NO_MENTION"))
  
  let embed = new Discord.MessageEmbed()
  .setDescription(language("HUG").replace(/{{author}}/g, message.author.username).replace(/{{user}}/g, user.username))
  .setColor('RANDOM')
  .setImage(url);
  message.channel.send(embed)
}
}