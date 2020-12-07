let guildLanguages = require("../Data/guilds-language.json");
const emotes = require ("../config/emojis.json");

module.exports = (client, message, query, tracks) => {
  const guildLanguage = guildLanguages[message.guild.id] || "spanish";
  const language = require(`../languages/${guildLanguage}`);

  message.channel.send({
    embed: {
      color: 'BLUE',
      author: { name: language("MUSIC_RESULTS") },
      timestamp: new Date(),
      description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
    },
  });
};