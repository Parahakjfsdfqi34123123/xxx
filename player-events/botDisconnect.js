let guildLanguages = require("../Data/guilds-language.json");
const emotes = require ("../config/emojis.json");

module.exports = (client, message, queue) => {
  const guildLanguage = guildLanguages[message.guild.id] || "spanish";
  const language = require(`../languages/${guildLanguage}`);

  message.channel.send(language("MUSIC_BOT_DISCONNECT").replace(/{{error}}/g, emotes.error));
};