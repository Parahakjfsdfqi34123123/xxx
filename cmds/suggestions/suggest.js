const { MessageEmbed } = require("discord.js");
let guildLanguages = require("../../Data/guilds-language.json");
const db = require("quick.db");

module.exports = {
  config: {
    nombre: "suggest",
    alias: [],
	cooldown: 5
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let channelID = db.get(`newSuggestions_${message.guild.id}`);
    if(!channelID) return message.channel.send(language("SUGGESTIONS_CHANNEL_DOES_NO_EXIST"));
    
    let channelSubmit = db.get(`submitSuggestions_${message.guild.id}`)
    
    if(channelSubmit) {
      if(message.channel.id !== channelSubmit) {
        return message.channel.send(language("SUGGEST_NO_CHANNEL_SUBMIT_IF_IT_EXIST").replace(/{{channelSubmit}}/g, `<#${channelSubmit}>`))
      }
    }
    
    let channel = message.guild.channels.cache.find(c => c.id == channelID)
    if(!channel) {
      return message.channel.send(language("SUGGESTIONS_CHANNEL_ELIMINATED"))
    }

    let author = message.author.tag;
    let suggest = args.join(' ');
    let id = makeid(6)

    if (!suggest) return message.channel.send(language("SUGGEST_NO_SUGGESTION"))

    let embed = new MessageEmbed()
    .setAuthor(language("SUGGESTIONS_EMBED_AUTHOR").replace(/{{author}}/g, author), message.author.avatarURL())
    .addField(language("SUGGEST_EMBED_FIELD_SUGGESTION"), suggest)
    .setColor('BLUE')
    .setFooter(`${language("SUGGESTIONS_EMBED_FOOTER")} ${id}`)
    .setTimestamp();

    message.react('✅');
    message.delete({
      timeout: 1000
    });
    

    let msg = await channel.send(embed);

    await msg.react('✅');
    await msg.react('❌');
    db.set(id, {
      message: msg.id,
      content: suggest,
      user: msg.author.id,
      id: id
    });
  }
}

function makeid(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}