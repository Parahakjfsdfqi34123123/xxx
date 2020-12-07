const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = async (client, oldGuild, newGuild) => {
    const guildLanguage = guildLanguages[oldGuild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    if(!oldGuild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

    let gU = db.get(`gU_${oldGuild.id}`)
    if(gU === null) {
      return;
    }
    
    oldGuild.fetchAuditLogs().then(logs => {
		
		let userID = logs.entries.first().executor.id;
		
		let userAvatar = logs.entries.first().executor.avatarURL();
		
		if(oldGuild.name !== newGuild.name) {
			
			let msgServer = new MessageEmbed()
			.setAuthor(oldGuild.members.cache.get(userID).user.tag, userAvatar)
			.setColor('#E74C3C')
			.setDescription(language("GU_EMBED_DESCRIPTION"))
			.addField(language("GU_EMBED_FIELD_NAME"), `${language("GU_EMBED_FIELD_NAME_VALUE_OLD")} **${newGuild.name}**\n${language("GU_EMBED_FIELD_NAME_VALUE_NOW")} **${oldGuild.name}**`)
            .addField(`**ID**`, `\`\`\`prolog\n${language("GU_EMBED_FIELD_ID_VALUE")} = ${userID}\`\`\``)
			.setTimestamp()
			.setFooter(oldGuild.members.cache.get(userID).user.tag, client.user.avatarURL())
      
            oldGuild.channels.cache.get(gU).send(msgServer);
		}
	});
}