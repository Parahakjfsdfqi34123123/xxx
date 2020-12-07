let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "8ball",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let texto = args.join(' ');
    if(!texto) return message.channel.send(language("OCHOBALL_NO_TEXT"))
    var rpts = language("OCHOBALL_RPTS")
  
    message.channel.send(':8ball: '+rpts[Math.floor(Math.random() * rpts.length)])
  }
}