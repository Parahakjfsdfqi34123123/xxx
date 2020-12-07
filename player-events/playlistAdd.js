let guildLanguages = require("../Data/guilds-language.json");
const emotes = require ("../config/emojis.json");

module.exports = (client, message, playlist) => {
  const guildLanguage = guildLanguages[message.guild.id] || "spanish";
  const language = require(`../languages/${guildLanguage}`);

  message.channel.send(language("MUSIC_PLAYLIST_ADD").replace(/{{error}}/g, emotes.error).replace(/{{playlist_title}}/g, playlist.title).replace(/{{playlist_songs}}/g, playlist.items.length));
};