const Discord = require("discord.js")
const mars = require("marsnpm")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "shoot",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },run: async(client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

  let url = await mars.shoot()
  let user = message.mentions.users.first()
  
  if(!user) {
    let embed = new Discord.MessageEmbed()
    .setDescription(language("SHOOT").replace(/{{client_user}}/g, client.user.username).replace(/{{author}}/g, message.author.username))
    .setColor('RANDOM')
    .setImage(url);
    message.channel.send(embed)
  }  else {
    let embed = new Discord.MessageEmbed()
    .setDescription(language("SHOOT_MENTION").replace(/{{author}}/g, message.author.username).replace(/{{user}}/g, user.username))
    .setColor('RANDOM')
    .setImage(url);
    message.channel.send(embed)
  }
  }
}