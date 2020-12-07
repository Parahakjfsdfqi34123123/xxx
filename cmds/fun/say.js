let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "say",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    message.delete()
    let texto = args.join(' ');
    let permisos = message.channel.permissionsFor(message.member);

    if(!texto) return message.channel.send(language("SAY_NO_TEXT"))

    message.channel.send(texto, {
      disableMentions: "all"
    });
  }
}