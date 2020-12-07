const { MessageEmbed } = require("discord.js");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = {
  config: {
    nombre: "channelinfo",
    alias: ["cinfo"],
    descripcion: "",
    uso: ""
  },
  run: (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let channel = message.mentions.channels.first() || message.channel;
    
    let embed = new MessageEmbed()
    .setAuthor(language("CHANNELINFO_EMBED_FIELD_AUTHOR").replace(/{{channel}}/g, channel.name), message.guild.iconURL())
    .addField(language("CHANNELINFO_EMBED_FIELD_NAME"), channel.name, true)
    .addField('ID', channel.id, true)
    .addField('NSFW', channel.nsfw ? language("ROLEINFO_BOOLEANS_YES") : language("ROLEINFO_BOOLEANS_NOT"), true)
    
    .addField(language("CHANNELINFO_EMBED_FIELD_TYPE"), channel.type, true)
    
    .addField(language("CHANNELINFO_EMBED_FIELD_TOPIC"), channel.topic || language("CHANNELINFO_EMBED_FIELD_VALUE_TOPIC_BOOLEAN_EQUAL_TO_NO"), true)
    .addField(language("CHANNELINFO_EMBED_FIELD_POSITION"), channel.position, true)
    .addField(language("CHANNELINFO_EMBED_FIELD_CATEGORY"), channel.parent ? channel.parent.name : language("CHANNELINFO_EMBED_FIELD_VALUE_CATEGORY_BOOLEAN_EQUAL_TO_NO"), true)
    
    .setColor('RANDOM')
    
    message.channel.send(embed)
  }
}