let guildLanguages = require("../Data/guilds-language.json");
const emotes = require ("../config/emojis.json");

module.exports = (client, message, track) => {
  const guildLanguage = guildLanguages[message.guild.id] || "spanish";
  const language = require(`../languages/${guildLanguage}`);

  message.channel.send(language("MUSIC_TRACK_START").replace(/{{track_title}}/g, track.title).replace(/{{music}}/g, emotes.music).replace(/{{channel}}/g, message.member.voice.channel.name));
};