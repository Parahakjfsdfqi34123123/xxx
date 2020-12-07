const { MessageEmbed, Util } = require("discord.js");
const emotes = require("../../config/emojis.json");
const createBar = require("string-progressbar");
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "now-playing",
    alias: ["np"],
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

    if(!queue) return message.channel.send(embedNoSongsGuild);

    const song = queue.songs[0];
    
    let minutes = song.duration.split(":")[0];
    let seconds = song.duration.split(":")[1];
    let ms = (Number(minutes)*60+Number(seconds));
    
    let thumb;
    if (song.thumbnail === undefined) thumb = "https://cdn.discordapp.com/attachments/748095614017077318/769672148524335114/unknown.png";
    else thumb = song.thumbnail.url;

    const seek = (queue.connection.dispatcher.streamTime - queue.connection.dispatcher.pausedTime) / 1000;
    //define left duration
    const left = ms - seek;
    //define embed
    let nowPlaying = new MessageEmbed()
      .setAuthor(language("NP_EMBED_AUTHOR"), message.guild.iconURL())
      .setDescription(`[**${song.title}**](${song.url})`)
      .setThumbnail(song.thumbnail.url)
      .setColor("#c219d8")
      .setFooter(language("NP_EMBED_FOOTER") + " " + new Date(left * 1000).toISOString().substr(11, 8));
      
      if(ms >= 10000) {
        nowPlaying.addField("\u200b", "🔴 LIVE", false);
        
        return message.channel.send(nowPlaying);
      }
      
      if (ms > 0 && ms<10000) {
        nowPlaying.addField("\u200b", "**[" + createBar((ms == 0 ? seek : ms), seek, 25, "▬", "🔘")[0] + "]**\n**" + new Date(seek * 1000).toISOString().substr(11, 8) + " / " + (ms == 0 ? "🔴 LIVE" : new Date(ms * 1000).toISOString().substr(11, 8))+ "**" , false );
        
        return message.channel.send(nowPlaying);
      }
  }
}