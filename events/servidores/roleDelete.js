const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = async (client, role) => {
	const guildLanguage = guildLanguages[role.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

	if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	let rD = db.get(`rD_${role.guild.id}`)
	if(rD === null) {
		return;
	}
	role.guild.fetchAuditLogs().then(logs => {
	  let userID = logs.entries.first().executor.id;
  	
  	let userAvatar = logs.entries.first().executor.avatarURL();
	
  	let msgRC = new MessageEmbed()
  	.setAuthor(`${role.guild.members.cache.get(userID).user.tag}`, userAvatar)
  	.setDescription(language("RD_EMBED_DESCRIPTION"))
  	.addField(language("ROLE_NAME"), `${role.name}`)
  	.addField(`**ID's**:`, `\`\`\`prolog\n${language("ROLE_EVENTS_IDS_ROLE")} = ${role.id}\n${language("ROLE_EVENTS_IDS_AUTHOR")} = ${userID}\`\`\``)
  	.setFooter(role.guild.name, role.guild.iconURL())
  	.setTimestamp()
    .setColor('RED')
	
  	role.guild.channels.cache.get(rD).send(msgRC)
  });
}