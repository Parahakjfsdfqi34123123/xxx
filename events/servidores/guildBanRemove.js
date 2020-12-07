const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = async (client, guild, user) => {
    const guildLanguage = guildLanguages[guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
	
	let gBA = db.get(`gBA_${guild.id}`)
	if(gBA === null) {
		return;
	}
	
	guild.fetchAuditLogs().then(logs => {
		
		let userID = logs.entries.first().executor.id;
		
		let userAvatar = logs.entries.first().executor.avatarURL();
    
        let reason = logs.entries.first().reason;

        let userBot = user.bot ? language("BANS_BOOLEAN_BOTS_BOT") : language("BANS_BOOLEAN_BOTS_USER");
        let Reason = reason ? reason : language("MODERATION_NO_SPECIFY_REASON");
		
		let msgBan = new MessageEmbed()
		.setAuthor(`${user.tag}`, user.avatarURL())
		.setDescription(language("GBR_EMBED_DESCRIPTION"))
		.addField(language("MODERATION_EMBED_FIELD_INFO"), `${language("MODERATION_EMBED_FIELD_INFO_VALUE_NAME")} ${user.tag}\n${MODERATION_EMBED_FIELD_INFO_VALUE_MENTION} ${user}\n${MOEDRATION_EMBED_FIELD_INFO_VALUE_BOT_BOOLEAN} ${userBot}`)
        .addField(language("MODERATION_EMBED_FIELD_AUTHOR"), guild.members.cache.get(userID).user.tag)
		.addField(language("MODERATION_EMBED_FIELD_REASON"), `${Reason}`)
		.addField(`**ID's**`, `\`\`\`prolog\n${MODERATION_EMBED_FIELD_IDS_VALUE_MEMBER} = ${user.id}\n${MODERATION_EMBED_FIELD_IDS_VALUE_AUTHOR} ${userID}\`\`\``)
		.setColor('#E74C3C')
		.setTimestamp()
		.setFooter(guild.members.cache.get(userID).user.tag, userAvatar)
		
		guild.channels.cache.get(gBA).send(msgBan);
	});
}