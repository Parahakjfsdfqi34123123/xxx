const Discord = require("discord.js")
const db = require("quick.db");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = {
  config: {
    nombre: "kick",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 8
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
  
    if(!message.member.hasPermission("KICK_MEMBERS")){
      return message.channel.send(language("KICK_MEMBER_NO_PERMISSIONS"))
    }
  
    let user = message.mentions.members.first();
    let kickChannel = db.get(`m_${message.guild.id}`);

    if(!user) return message.channel.send(language("KICK_NO_MENTION"))
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(language("KICK_CLIENT_NO_PERMISSIONS"))
    }

    user.kick()

    message.channel.send(language("KICK_SUCESS").replace(/{{user}}/g, user.tag))

    //log
    if(kickChannel) {
      let userBot = user.bot ? language("BANS_BOOLEAN_BOTS_BOT") : language("BANS_BOOLEAN_BOTS_USER");
      let Reason = reason ? reason : language("MODERATION_NO_SPECIFY_REASON");

      let embedKick = new Discord.MessageEmbed()
      .setAuthor(`${user.tag}`, user.avatarURL())
		  .setDescription(language("K_EMBED_DESCRIPTION"))
		  .addField(language("MODERATION_EMBED_FIELD_INFO"), `${language("MODERATION_EMBED_FIELD_INFO_VALUE_NAME")} ${user.tag}\n${language("MODERATION_EMBED_FIELD_INFO_VALUE_MENTION")} ${user}\n${language("MOEDRATION_EMBED_FIELD_INFO_VALUE_BOT_BOOLEAN")} ${userBot}`)
      .addField(language("MODERATION_EMBED_FIELD_AUTHOR"), message.author.tag)
		  .addField(language("MODERATION_EMBED_FIELD_REASON"), `${Reason}`)
		  .addField(`**ID's**`, `\`\`\`prolog\n${language("MODERATION_EMBED_FIELD_IDS_VALUE_MEMBER")} = ${user.id}\n${language("MODERATION_EMBED_FIELD_IDS_VALUE_AUTHOR")} = ${message.author.id}\`\`\``)
		  .setColor('#E74C3C')
		  .setTimestamp()
		  .setFooter(message.author.tag, message.author.avatarURL());

      message.guild.channels.cache.get(kickChannel).send(embedKick)
    }
  }
}