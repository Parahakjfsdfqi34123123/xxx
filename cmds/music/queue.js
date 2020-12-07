const { MessageEmbed, splitMessage } = require("discord.js");
const emotes = require("../../config/emojis.json");
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "queue",
    alias: [],
    descripcion: "Reproduce una musica",
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

    let embedQueueNoMusics = new MessageEmbed()
    .setColor('RED')
    .setDescription(language("QUEUE_NO_MUSICS").replace(/{{error}}/g, emotes.error));
    
    if(!message.member.voice.channel) return message.channels.send(embedNoVoiceChannel);

    const queue = client.queue.get(message.guild.id);

    if(!queue) return message.channel.send(embedQueueNoMusics);

    let description = "";
    for(let i = 0; i < queue.songs.length; i++){
      description += `**${i}.** [${queue.songs[i].title.substring(0,40)}](${queue.songs[i].url}) | \`${queue.songs[i].duration}\`\n`
    }

    let queueEmbed = new MessageEmbed()
      .setAuthor(language("QUEUE_EMBED_AUTHOR"), message.guild.iconURL())
      .setDescription(description)
      .setColor("#c219d8");
    //split the description
    const splitDescription = splitMessage(description, {
      maxLength: 2048,
      char: "\n",
      prepend: "",
      append: ""
    });
    //For every description send a new embed
    splitDescription.forEach(async (m) => {
      queueEmbed.setDescription(m);

      message.channel.send(queueEmbed);
    });
  }
}