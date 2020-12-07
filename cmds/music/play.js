const { play } = require("../../models/play");
const { Client, Collection, MessageEmbed } = require("discord.js");
const { attentionembed } = require("../../util/attentionembed");
const ytsr = require("youtube-sr");
const emotes = require('../../config/emojis.json')
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = {
  config: {
    nombre: "play",
    alias: [],
    cooldown: 1
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
    .setDescription(language("PLAY_NO_RESULT"));

    let embedNoMusicSearch = new MessageEmbed()
    .setColor('RED')
    .setDescription(language("PLAY_NO_MUSIC_SEARCH").replace(/{{error}}/g, emotes.error));
    
    const { channel } = message.member.voice;
    
    const serverQueue = message.client.queue.get(message.guild.id);
    
    if (!channel) return message.channel.send(embedNoVoiceChannel);
    
    if (serverQueue && channel !== message.guild.me.voice.channel)
      return message.channel.send(embedNoMyVoiceChannel);
    
    if (args.length == 0) return message.channel.send(embedNoMusicSearch);
    
    message.react("784844330854645770").catch(console.error);
    
    const permissions = channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))
      return attentionembed(message, language("PLAY_NO_PERMISSIONS_CONNECT"));
    if (!permissions.has("SPEAK"))
      return attentionembed(message, language("PLAY_NO_PERMISSIONS_SPEAK"));

    //define some url patterns
    const search = args.join(" ");
    const videoPattern = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
    const urlValid = videoPattern.test(args[0]);

    //define Queue Construct
    const queueConstruct = {
      textChannel: message.channel,
      channel,
      connection: null,
      songs: [],
      loop: false,
      volume: 69,
      filters: [],
      realseek: 0,
      playing: true
    };
    //get song infos to null
    let songInfo = null;
    let song = null;
    //try catch for errors
    try {
      //If something is playing
      if (serverQueue) {
        //if its an url
        if (urlValid) { //send searching link
          message.channel.send(new MessageEmbed().setColor("#c219d8")
            .setDescription(`**<:youtube:784880661340487710> ${language("PLAY_SEARCHING")}  [\`LINK\`](${args.join(" ")})**`)).then(msg => msg.delete({timeout: 2000}))
        //if not
        }
        else { //send searching TITLE
          message.channel.send(new MessageEmbed().setColor("#c219d8")
            .setDescription(`**<:youtube:784880661340487710> ${language("PLAY_SEARCHING")} \`${args.join(" ")}\`**`)).then(msg => msg.delete({timeout: 2000}))
        }
      } else {
        //If nothing is playing join the channel
        queueConstruct.connection = await channel.join();
        //send join message
        
        //if its an url
        if (urlValid) { //send searching link
          message.channel.send(new MessageEmbed().setColor("#c219d8")
            .setDescription(`**<:youtube:784880661340487710> ${language("PLAY_SEARCHING")} [\`LINK\`](${args.join(" ")})**`)).then(msg => msg.delete({timeout: 2000}))
          //if not
        }
        else { //send searching TITLE
          message.channel.send(new MessageEmbed().setColor("#c219d8")
            .setDescription(`**<:youtube:784880661340487710> ${language("PLAY_SEARCHING")} \`${args.join(" ")}\`**`)).then(msg => msg.delete({timeout: 2000}))
        }
        //Set selfdeaf and serverdeaf true
        queueConstruct.connection.voice.setSelfDeaf(true);
        queueConstruct.connection.voice.setDeaf(true);
      }
    }
    catch {
    }
    //if its a valdi youtube link
    if (urlValid) {
      try {
        songInfo = await ytsr.searchOne(search) ;
        song = {
          title: songInfo.title,
          url: songInfo.url,
          thumbnail: songInfo.thumbnail,
          duration: songInfo.durationFormatted,
       };
      } catch (error) {
        if (error.statusCode === 403) return attentionembed(message, "Max. uses of api Key, please refresh!");
        console.error(error);
        return attentionembed(message, error.message);
      }
    }
    //else try to find the song via ytsr
    else {
      try {
       //get the result
        songInfo = await ytsr.searchOne(search) ;
        song = {
          title: songInfo.title,
          url: songInfo.url,
          thumbnail: songInfo.thumbnail,
          duration: songInfo.durationFormatted,
       };
      } catch (error) {
        console.error(error);
        return attentionembed(message, error);
      }
    }
    //get the thumbnail
    let thumb = "https://cdn.discordapp.com/attachments/748095614017077318/769672148524335114/unknown.png"
    if (song.thumbnail === undefined) thumb = "https://cdn.discordapp.com/attachments/748095614017077318/769672148524335114/unknown.png";
    else thumb = song.thumbnail.url;
    //if there is a server queue send that message!
    if (serverQueue) {
      //Calculate the estimated Time
      let estimatedtime = Number(0);
      for (let i = 0; i < serverQueue.songs.length; i++) {
        let minutes = serverQueue.songs[i].duration.split(":")[0];
        let seconds = serverQueue.songs[i].duration.split(":")[1];
        estimatedtime += (Number(minutes)*60+Number(seconds));
      }
      if (estimatedtime > 60) {
        estimatedtime = Math.round(estimatedtime / 60 * 100) / 100;
        estimatedtime = estimatedtime + " Minutes"
      }
      else if (estimatedtime > 60) {
        estimatedtime = Math.round(estimatedtime / 60 * 100) / 100;
        estimatedtime = estimatedtime + " Hours"
      }
      else {
        estimatedtime = estimatedtime + " Seconds"
      }
      //Push the ServerQueue
      serverQueue.songs.push(song);
      //the new song embed
      const newsong = new MessageEmbed()
        .setColor("#c219d8")
        .setThumbnail(thumb)
        .setDescription(language("PLAY_SUCESS_ALREADY_PLAYING_SONG").replace(/{{song_name}}/g, song.title).replace(/{{song_url}}/g, song.url))
        .addField(language("PLAY_SUCESS_ALREADY_PLAYING_SONG_EMBED_FIELD_TIME"), `\`${estimatedtime}\``, true)
        .addField(language("PLAY_SUCESS_ALREADY_PLAYING_SONG_EMBED_FIELD_POSITION"), `**\`${serverQueue.songs.length - 1}\`**`, true)
        .setFooter(`${language("PLAY_SUCESS_SONG_EMBED_FOOTER")} ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
      //send the Embed into the Queue Channel
        return serverQueue.textChannel
        .send(newsong)
        .catch(console.error);

    }
    //push the song list by 1 to add it to the queu
    queueConstruct.songs.push(song);
    //set the queue
    message.client.queue.set(message.guild.id, queueConstruct);
    //playing with catching errors
    try {

      //try to play the song
      play(queueConstruct.songs[0], message, client);
    } catch (error) {
      //if an error comes log
      console.error(error);
      //delete the Queue
      message.client.queue.delete(message.guild.id);
      //leave the channel
      await channel.leave();
      //sent an error message
      return attentionembed(message, `Could not join the channel`);
      console.log(error)
    }
  }
}