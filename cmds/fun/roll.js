let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "roll",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let num = Math.floor(Math.random() * 100 + 1)
  
    message.channel.send(language("ROLL").replace(/{{author}}/g, message.author.username).replace(/{{number}}/g, num))
  }
}