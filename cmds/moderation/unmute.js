const Discord = require("discord.js")
const db = require("quick.db");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = {
  config: {
    nombre: "unmute",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 5
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
  
    if(!message.member.hasPermission('MANAGE_ROLES')) {
      return message.channel.send(language("UNMUTE_MEMBER_NO_PERMISSIONS"))
    }
    if(!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(language("UNMUTE_CLIENT_NO_PERMISSIONS"))
    }

    let user = message.mentions.members.first() || message.guild.members.resolve(args[0]);
    let muteroleID = db.get(`muterole_${message.guild.id}`);
    let muterole = message.guild.roles.cache.get(muteroleID)
    let reason = args.slice(1).join(" ") || language("MUTE_ALL_COMMANDS_NO_REASON");
    let muteChannel = db.get(`mR_${message.guild.id}`);

    if(muterole === null) {
      return message.channel.send(language("UNMUTE_THERE_IS_NO_PAPER_TO_MUTE"))
    }
    if(!user) return message.channel.send(language("UNMUTE_NO_USER"));
    if(user.id == message.author.id) return message.channel.send(language("MUTE_USER_IS_AUTHOR"));
    if(user.id == client.user.id) return message.channel.send(language("MUTE_USER_IS_CLIENT"));
    if(muterole && !user.roles.cache.has(muteroleID)) return message.channel.send(language("UNMUTE_USER_NO_ALREADY_MUTED"));
    if(reason.length > 1024) return message.channel.send(language("UNMUTE_REASON_GREATER_THAN_ONE_THOUSAND_TWENTY_FOUR"));

    user.roles.remove(muteroleID);
    message.channel.send(language("UNMUTE_SUCESS").replace(/{{user}}/g, user.user.tag));

    //Log
    if(muteChannel) {
      let userBot = user.bot ? language("BANS_BOOLEAN_BOTS_BOT") : language("BANS_BOOLEAN_BOTS_USER");
      let Reason = reason;

      let embedUnmute = new Discord.MessageEmbed()
      .setAuthor(`${user.user.tag}`, user.user.avatarURL())
		  .setDescription(language("MR_EMBED_DESCRIPTION"))
		  .addField(language("MODERATION_EMBED_FIELD_INFO"), `${language("MODERATION_EMBED_FIELD_INFO_VALUE_NAME")} ${user.user.tag}\n${language("MODERATION_EMBED_FIELD_INFO_VALUE_MENTION")} ${user}\n${language("MOEDRATION_EMBED_FIELD_INFO_VALUE_BOT_BOOLEAN")} ${userBot}`)
      .addField(language("MODERATION_EMBED_FIELD_AUTHOR"), message.author.tag)
		  .addField(language("MODERATION_EMBED_FIELD_REASON"), `${Reason}`)
		  .addField(`**ID's**`, `\`\`\`prolog\n${language("MODERATION_EMBED_FIELD_IDS_VALUE_MEMBER")} = ${user.id}\n${language("MODERATION_EMBED_FIELD_IDS_VALUE_AUTHOR")} = ${message.author.id}\`\`\``)
		  .setColor('#E74C3C')
		  .setTimestamp()
		  .setFooter(message.author.tag, message.author.avatarURL());

      message.guild.channels.resolve(muteChannel).send(embedUnmute)
    }
  }
}