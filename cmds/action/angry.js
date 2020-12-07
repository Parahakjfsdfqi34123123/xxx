const Discord = require("discord.js")
const mars = require("marsnpm")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "angry",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: async(client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

  let url = await mars.angry()
  let img = message.mentions.users.first()
  
  if (!img) {
  
  let embed = new Discord.MessageEmbed()
  .setDescription(language("ANGRY").replace(/{{author}}/g, message.author.username))
  .setColor('RANDOM')
  .setImage(url);
  message.channel.send(embed)
    
  } else {
    
    let embed = new Discord.MessageEmbed()
    .setDescription(language("ANGRY_MENTION").replace(/{{author}}/g, message.author.username).replace(/{{user}}/g, img.username))
    .setColor('RANDOM')
    .setImage(url)
    message.channel.send(embed)
  }
}
}