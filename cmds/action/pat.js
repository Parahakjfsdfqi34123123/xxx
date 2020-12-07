const Discord = require("discord.js")
const star = require('star-labs');
const db = require("quick.db")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "pat",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: async(client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

  let user = message.mentions.users.first()
  if(!user) return message.channel.send(language("PAT_NO_MENTION"))
  let url = await star.pat()
  
  let embed = new Discord.MessageEmbed()
  .setDescription(language("PAT").replace(/{{author}}/g, message.author.username).replace(/{{user}}/g, user.username))
  .setColor('RANDOM')
  .setImage(url)
  message.channel.send(embed)
  }
}