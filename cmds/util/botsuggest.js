const { MessageEmbed } = require("discord.js");
let guildLanguages = require("../../Data/guilds-language.json");
const db = require("quick.db");

module.exports = {
  config: {
    nombre: "botsuggest",
    alias: [],
	cooldown: 5
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let author = message.author.tag;
    let channelLogsSuggestions = client.channels.cache.get('780109146023657512')
    let suggest = args.join(' ');

    if (!suggest) return message.channel.send(language("SUGGEST_NO_SUGGESTION"))

    let embed = new MessageEmbed()
    .setAuthor(`Sugerido por ${author}`, message.author.displayAvatarURL())
    .addField(`Nueva sugerencia.`, suggest)
    .setColor('BLUE')
    .setFooter(`Proveniente del Servidor: ${message.guild.name}`)
    .setTimestamp();

    message.react('✅');
    message.delete({
      timeout: 1000
    });

    message.channel.send(language("SUGGESTIONS_BOT_SUCESS").replace(/{{author}}/g, message.author.username))
    
    channelLogsSuggestions.send(embed)
  }
}