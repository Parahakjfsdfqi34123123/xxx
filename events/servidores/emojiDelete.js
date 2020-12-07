const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = async (client, emoji) => {
    const guildLanguage = guildLanguages[emoji.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    if(!emoji.guild.me.hasPermission('VIEW_AUDIT_LOG')) {
        return;
    }

    let eD = db.get(`eD_${emoji.guild.id}`)
    if(eD === null) {
      return;
    }
    
    if(!emoji.guild) return;

    let typeEmoji = emoji.animated ? language("EMOJI_TYPE_ANIMATED") : language("EMOJI_TYPE_STATIC");
    
    emoji.guild.fetchAuditLogs().then(logs => {
		
		let userID = logs.entries.first().executor.id;
		
		let msgEC = new MessageEmbed()
		.setAuthor(`${emoji.guild.members.cache.get(userID).user.tag}`, emoji.guild.members.cache.get(userID).user.avatarURL())
		.setDescription(language("EMOJIS_DESCRIPTION"))
		.setThumbnail(emoji.url)
		.addField(language("ED_FIELD_REMOVE"), `${language("EMOJIS_FIELD_VALUE_NAME")}: ${emoji.name}\n${language("EMOJIS_FIELD_VALUE_ANIMATED_BOOLEAN")}: ${typeEmoji}`)
		.addField(`**ID's**`, `\`\`\`prolog\n${language("EMOJIS_EMBED_FIELD_IDS_VALUE_MEMBER")} = ${userID}\n${language("EMOJIS_EMBED_FIELD_IDS_VALUE_CHANNEL")} = ${emoji.id}\`\`\``)
		.setColor('#E74C3C')
		.setTimestamp()
		.setFooter(emoji.guild.name, emoji.guild.iconURL())
		
		emoji.guild.channels.cache.get(eD).send(msgEC)
	});
}