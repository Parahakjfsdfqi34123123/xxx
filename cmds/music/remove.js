const { MessageEmbed } = require("discord.js");
const emotes = require("../../config/emojis.json");
const { canModifyQueue } = require("../../util/MilratoUtil");
let guildLanguages = require("../../Data/guilds-language.json");
const db2 = require("megadb");
let prefix_db = new db2.crearDB('prefixes');

module.exports = {
  config: {
    nombre: "remove",
    alias: [],
    cooldown: 5
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let prefix = prefix_db.tiene(`${message.guild.id}`) ? await prefix_db.obtener(`${message.guild.id}`) : '.';

    let embedNoVoiceChannel = new MessageEmbed()
    .setColor('RED')
    .setDescription(language("MUSIC_NO_VOICE_CHANNEL").replace(/{{error}}/g, emotes.error));

    let embedNoMyVoiceChannel = new MessageEmbed()
    .setColor('RED')
    .setDescription(language("MUSIC_NO_BOT_CHANNEL").replace(/{{error}}/g, emotes.error));

    let embedNoSongsGuild = new MessageEmbed()
    .setColor('RED')
    .setDescription(language("MUSIC_GUILD_NO_SONGS_PLAYING").replace(/{{error}}/g, emotes.error));

    let embedNoNumberOfMusic = new MessageEmbed()
    .setColor('RED')
    .setDescription(language("REMOVE_NO_NUMBER_OF_QUEUE").replace(/{{prefix}}/g, prefix));
    
    const queue = client.queue.get(message.guild.id);

    if(!queue) return message.channel.send(embedNoSongsGuild)

    if(!canModifyQueue(message.member)) return;

    if(args.length == 0) return message.channel.send(embedNoNumberOfMusic);

    if(isNaN(args[0])) return message.channel.send(embedNoNumberOfMusic);

    const song = queue.songs.splice(args[0], 1);

    let embedSucess = new MessageEmbed()
    .setColor('GREEN')
    .setDescription(language("REMOVE_SUCESS").replace(/{{author}}/g, message.author).replace(/{{song}}/g, song[0].title));

    queue.textChannel.send(embedSucess);
  }
}