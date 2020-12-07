const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = async (client, oldRole, newRole) => {
	const guildLanguage = guildLanguages[oldRole.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

	if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	let rU = db.get(`rU_${oldRole.guild.id}`)
	if(rU === null) {
		return;
	}
	oldRole.guild.fetchAuditLogs().then(logs => {
	    let userID = logs.entries.first().executor.id;
  	
  	    let userAvatar = logs.entries.first().executor.avatarURL();
	
  	    let msgRC = new MessageEmbed()
  	    .setAuthor(`${oldRole.guild.members.cache.get(userID).user.tag}`, userAvatar)
  	    .setDescription(language("RU_EMBED_DESCRIPTION"))
  	    .addField(language("ROLE_NAME"), `${oldRole.name}`)
  	    .addField(`**ID's**:`, `\`\`\`prolog\n${language("ROLE_EVENTS_IDS_ROLE")} = ${oldRole.id}\n${language("ROLE_EVENTS_IDS_AUTHOR")} = ${userID}\`\`\``)
  	    .setFooter(oldRole.guild.name, oldRole.guild.iconURL())
  	    .setTimestamp()
        .setColor('RED')
	
  	    oldRole.guild.channels.cache.get(rU).send(msgRC)
  });
}