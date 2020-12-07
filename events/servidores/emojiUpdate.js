const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = async (client, oldEmoji, newEmoji) => {
    const guildLanguage = guildLanguages[oldEmoji.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    if(!oldEmoji.guild.me.hasPermission('VIEW_AUDIT_LOG')) {
        return;
    }

    let eU = db.get(`eU_${oldEmoji.guild.id}`)
    if(eU === null) {
      return;
    }
    
    if(!oldEmoji.guild) return;

    let typeEmoji = oldEmoji.animated ? language("EMOJI_TYPE_ANIMATED") : language("EMOJI_TYPE_STATIC");
    
    oldEmoji.guild.fetchAuditLogs().then(logs => {
		
		let userID = logs.entries.first().executor.id;
		
		let msgEC = new MessageEmbed()
		.setAuthor(`${oldEmoji.guild.members.cache.get(userID).user.tag}`, oldEmoji.guild.members.cache.get(userID).user.avatarURL())
		.setDescription(language("EMOJIS_DESCRIPTION"))
		.setThumbnail(oldEmoji.url)
		.addField(language("EU_FIELD_UPDATE"), `${language("EMOJIS_FIELD_VALUE_NAME")}:\n${language("EU_EMBED_FIELD_UPDATE_VALUE_OLD")} ${oldEmoji.name}\n${language("EU_EMBED_FIELD_UPDATE_VALUE_NOW")} ${newEmoji.name}\n${language("EMOJIS_FIELD_VALUE_ANIMATED_BOOLEAN")}: ${typeEmoji}`)
		.addField(`**ID's**`, `\`\`\`prolog\n${language("EMOJIS_EMBED_FIELD_IDS_VALUE_MEMBER")} = ${userID}\n${language("EMOJIS_EMBED_FIELD_IDS_VALUE_CHANNEL")} = ${oldEmoji.id}\`\`\``)
		.setColor('#E74C3C')
		.setTimestamp()
		.setFooter(oldEmoji.guild.name, oldEmoji.guild.iconURL())
		
		oldEmoji.guild.channels.cache.get(eU).send(msgEC)
	});
}