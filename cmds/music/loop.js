const { MessageEmbed } = require("discord.js");
const emotes = require("../../config/emojis.json");
const { canModifyQueue } = require("../../util/MilratoUtil");
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "loop",
    alias: ["repeat", "repetir"],
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

    let embedNoMusicsInServer = new MessageEmbed()
    .setColor('RED')
    .setDescription(language("LOOP_MO_MUSICS_IN_GUILD").replace(/{{error}}/g, emotes.error));
    
    const queue = client.queue.get(message.guild.id);

    if(!queue) return message.channel.send(embedNoMusicsInServer)

    if(!await canModifyQueue(message.member)) return;

    queue.loop = !queue.loop;

    let embed = new MessageEmbed()
    .setColor(queue.loop ? "#c219d8" : "#ff0e7a")
    .setAuthor(`${language("LOOP_SUCESS_ENABLE")} ${queue.loop ? language("LOOP_SUCESS_MESSAGE_TYPE_ENABLE") : language("LOOP_SUCESS_MESSAGE_TYPE_DISABLE")}`, message.guild.iconURL())
    
    message.channel.send(embed)
  }
}