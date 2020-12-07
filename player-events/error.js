let guildLanguages = require("../Data/guilds-language.json");
const emotes = require ("../config/emojis.json");

module.exports = (client, message, error) => {
  const guildLanguage = guildLanguages[message.guild.id] || "spanish";
  const language = require(`../languages/${guildLanguage}`);

  message.channel.send(language("MUSIC_NO_MEMBERS_VOICE_CHANNEL").replace(/{{error}}/g, emotes.error));

  switch (error) {
    case 'NotPlaying':
      message.channel.send(language("MUSIC_GUILD_NO_SONGS_PLAYING")).replace(/{{error}}/g, emotes.error);
      break;
    case 'NotConnected':
      message.channel.send(language("MUSIC_NO_VOICE_CHANNEL")).replace(/{{error}}/g, emotes.error);
      break;
    case 'UnableToJoin':
      message.channel.send(language("MUSIC_ERROR_UNABLE_TO_JOIN")).replace(/{{error}}/g, emotes.error);
      break;
    default:
      message.channel.send(language("MUSIC_ERROR_DEFAULT")).replace(/{{error}}/g, emotes.error);
      console.log(error)
  };
};