const { MessageEmbed } = require("discord.js")
const fs = require("fs")
const emotes = require("../../config/emojis.json");
const { canModifyQueue } = require("../../util/MilratoUtil");
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "pause",
    alias: [],
    cooldown: 5
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let embedNoVoiceChannel = new MessageEmbed()
    .setColor('RED')
    .setDescription(language("MUSIC_NO_VOICE_CHANNEL").replace(/{{error}}/g, emotes.error));

    let embedNoMyVoiceChannel = new MessageEmbed()
    .setColor('RED')
    .setDescription(language("MUSIC_NO_BOT_CHANNEL").replace(/{{error}}/g, emotes.error));

    let embedNoSongsGuild = new MessageEmbed()
    .setColor('RED')
    .setDescription(language("MUSIC_GUILD_NO_SONGS_PLAYING").replace(/{{error}}/g, emotes.error));
    
    const queue = client.queue.get(message.guild.id);

    if(!queue) return message.channel.send(embedNoSongsGuild)

    if(!canModifyQueue(message.member)) return;

    if (queue.playing) {
      //set playing to false
      queue.playing = false;
      //pause the music
      queue.connection.dispatcher.pause(true);
      //define the pause embed
      const pausemebed = new MessageEmbed().setColor("#c219d8")
      .setAuthor(language("PAUSE_PLAYER"), message.guild.iconURL())
      
      return queue.textChannel.send(pausemebed).catch(console.error);
    }
  }
}