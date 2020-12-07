const ytsr = require("youtube-sr")
const { MessageEmbed } = require("discord.js");
const { play } = require("../../models/play")
const { attentionembed } = require("../../util/attentionembed");
const emotes = require('../../config/emojis.json');
let guildLanguages = require("../../Data/guilds-language.json");
const db2 = require("megadb");
let prefix_db = new db2.crearDB('prefixes');

module.exports = {
  config: {
    nombre: "filter",
    alias: ["fi"],
    cooldown: 3
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

    let prefix = prefix_db.tiene(`${message.guild.id}`) ? await prefix_db.obtener(`${message.guild.id}`) : '.';

    if (!message.guild) return;
    
    const { channel } = message.member.voice;
    
    const queue = client.queue.get(message.guild.id);

    if (message.channel.activeCollector) return attentionembed(message, language("FILTER_ALREADY_SEARCH"));

    if (!message.member.voice.channel) return message.channel.send(embedNoVoiceChannel);
    
    if (queue && channel !== message.guild.me.voice.channel) return message.channel.send(embedNoMyVoiceChannel);

    const filters = [
      'bass=g=20,dynaudnorm=f=200',//bassboost
      'apulsator=hz=0.08', //8D
      'aresample=48000,asetrate=48000*0.8',//vaporwave
      'aresample=48000,asetrate=48000*1.25',//nightcore
      'aphaser=in_gain=0.4',//phaser
      'tremolo',//tremolo
      'vibrato=f=6.5',//vibrato
      'surround',//surrounding
      'apulsator=hz=1',//pulsator
      'asubboost',//subboost
      "remove",
    ];

    let varforfilter;
    let choice;

    switch (args[0]) {
      case "bassboost":
        varforfilter = 0;

        break;
      case "8D":
        varforfilter = 1;
        break;
      case "vaporwave":
        varforfilter = 2;
        break;
      case "nightcore":
        varforfilter = 3;
        break;
      case "phaser":
        varforfilter = 4;
        break;
      case "tremolo":
        varforfilter = 5;
        break;
      case "vibrato":
        varforfilter = 6;
        break;
      case "surrounding":
        varforfilter = 7;
        break;
      case "pulsator":
        varforfilter = 8;
        break;
      case "subboost":
        varforfilter = 9;
        break;
      case "clear":
      varforfilter = 10;
      break;
      default:
        varforfilter = 404;

        let embed = new MessageEmbed()
        .setAuthor(language("FILTER_NO_FILTER_PROVIDED_EMBED_AUTHOR"), message.guild.iconURL())
        .setDescription(`
        - bassboost
        - 8D
        - vaporwave
        - nightcore
        - phaser
        - tremolo
        - vibrato
        - surrounding
        - pulsator
        - subboost
        - clear  ~  ${language("FILTER_NO_FILTER_PROVIDED_EMBED_AUTHOR_DESCRIPTION_CLEAR_FILTER")}`)
        .setFooter(language("FILTER_NO_FILTER_PROVIDED_EMBED_FOOTER").replace(/{{prefix}}/g, prefix))
        .setColor('PURPLE');

        message.channel.send(embed)
        break;
    }

    choice = filters[varforfilter];
    if (varforfilter === 404) return;
    try {
      const song = queue.songs[0];

      message.channel.send(new MessageEmbed()
      .setColor("#c219d8")
      .setAuthor(`${language("FILTER_APPLYING")} ` + args[0], message.guild.iconURL())).then(msg =>{
        msg.delete({timeout: 2000});
      });
      play(song, message, client, choice);
      
    } catch (error) {
      
      console.error(error);
      
      message.channel.activeCollector = false;
    }
  }
}