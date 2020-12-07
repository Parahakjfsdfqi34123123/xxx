const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = async (client, oldMember, newMember) => {
    const guildLanguage = guildLanguages[oldMember.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    if(!oldMember.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

    let gMU = db.get(`gMU_${oldMember.guild.id}`)
    if(gMU == null) {
        return;
    }

    oldMember.guild.fetchAuditLogs().then(logs => {
        let userID = logs.entries.first().executor.id;
        let userAvatar = logs.entries.first().executor.avatarURL();
        
        if(oldMember.nickname !== newMember.nickname) {
            let msgChannel = new MessageEmbed()
            .setAuthor(oldMember.guild.members.cache.get(userID).user.tag, userAvatar)
            .setDescription(language("GMU_EMBED_DESCRIPTION"))
            .addField(language("GMU_EMBED_FIELD_MEMBER"), oldMember.user.tag)
            .addField(language("GMU_EMBED_FIELD_NICKNAME"), language("GMU_EMBED_FIELD_NICKNAME_VALUE_OLD") + `**${oldMember.nickname ? oldMember.nickname : language("GMU_EMBED_FIELD_NICKNAME_VALUE_NONE")}**\n` + language("GMU_EMBED_FIELD_NICKNAME_VALUE_NOW") +`**${newMember.nickname ? newMember.nickname : language("GMU_EMBED_FIELD_NICKNAME_VALUE_NOW")}**`)
			.addField(`**ID's**`, `\`\`\`prolog\n${language("GMU_EMBED_FIELD_IDS_VALUE_MEMBER")} = ${oldMember.user.id}\n${language("GMU_EMBED_FIELD_IDS_VALUE_AUTHOR")} = ${userID}\`\`\``)
			.setColor('RED')
			.setTimestamp()
			
			oldMember.guild.channels.cache.get(gMU).send(msgChannel)
        }
		
		//if(oldMember.roles !== newMember.roles) {}
    })
}