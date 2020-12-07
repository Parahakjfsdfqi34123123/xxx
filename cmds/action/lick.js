const Discord = require("discord.js")
const star = require("star-labs")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "lick",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

  let aA = message.mentions.users.first()
  if(!aA) {
    let aB = message.author
    let aC = new Discord.MessageEmbed()
    .setDescription(language("LICK").replace(/{{client_user}}/g, client.user.username).replace(/{{author}}/g, aB.username))
    .setImage(star.lick())
    .setColor('RANDOM')

    message.channel.send(aC)
  } else {
  
  let aB = message.author
  const aC = new Discord.MessageEmbed()
    .setDescription(language("LICK_MENTION").replace(/{{author}}/g, aB.username).replace(/{{user}}/g, aA.username))
    .setImage(star.lick())
    .setColor('RANDOM')
  message.channel.send(aC);
}
  }
}