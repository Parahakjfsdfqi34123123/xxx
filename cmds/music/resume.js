const { MessageEmbed } = require("discord.js");
const emotes = require("../../config/emojis.json");
const { canModifyQueue } = require("../../util/MilratoUtil");
const { attentionembed } = require("../../util/attentionembed");
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "resume",
    alias: [],
    descripcion: "",
    uso: "",
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

    let embedNoProvider = new MessageEmbed()
    .setColor('RED')
    .setDescription(language("PLAY_NO_RESULT").replace(/{{error}}/g, emotes.error));

    let embedNoMusic = new MessageEmbed()
    .setColor('RED')
    .setDescription(language("RESUME_NO_MUSICS"));
    
    const queue = client.queue.get(message.guild.id);

    if(!queue) return message.channel.send(embedNoSongsGuild)

    if(!canModifyQueue(message.member)) return;

     if (!queue.playing) {
      //set it to true
      queue.playing = true;
      //resume the Bot
      queue.connection.dispatcher.resume();
      //Create approve embed
      const playembed = new MessageEmbed().setColor("#c219d8")
      .setAuthor(language("RESUME_PLAYER"), message.guild.iconURL())
      //send the approve
      return queue.textChannel.send(playembed).catch(console.error);
    }
    
    return message.channel.send(language("RESUME_PLAYER_IS_NOT_PAUSED"))
  }
}