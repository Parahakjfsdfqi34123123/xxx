let guildLanguages = require("../Data/guilds-language.json");
const emotes = require ("../config/emojis.json");

module.exports = (client, message, query, tracks, content, collector) => {
  const guildLanguage = guildLanguages[message.guild.id] || "spanish";
  const language = require(`../languages/${guildLanguage}`);

  message.channel.send(language("MUSIC_SEARCH_INVALID").replace(/{{error}}/g, emotes.error).replace(/{{tracks_length}}/g, tracks.length));
};