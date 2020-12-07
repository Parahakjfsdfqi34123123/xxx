const { MessageEmbed } = require("discord.js");
const moment = require("moment");
const db = require("quick.db");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = async (client, oldChannel, newChannel) => {
    const guildLanguage = guildLanguages[oldChannel.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    if(!oldChannel.guild.me.hasPermission('VIEW_AUDIT_LOG')) {
        return;
    }

    let cU = db.get(`cU_${oldChannel.guild.id}`)
    if(cU === null) {
      return;
    }
    
    if(!oldChannel.guild) return;
    
    oldChannel.guild.fetchAuditLogs().then(logs => {
	  
        let userID = logs.entries.first().executor.id;

        let position = newChannel.position;
        if(position < 0) {
            position = 0;
        }
        
        if(oldChannel.name !== newChannel.name) {
            let msgName = new MessageEmbed()
            .setAuthor(`${oldChannel.guild.members.cache.get(userID).user.tag}`, oldChannel.guild.members.cache.get(userID).user.avatarURL())
            .addField(language("CHANNELS_NAME"), `**Ahora**: ${newChannel.name}\n\n**Antes**: ${oldChannel.name}`)
            .addField(language("CHANNELS_DATE_CREATE"), `${moment.utc(newChannel.createdAt).format('MM/DD/YYYY')}`)
            .addField(language("CHANNELS_POSITION"), `${position}`)
            .addField("**ID's**", `\`\`\`prolog\n${language("CHANNELS_EMBED_FIELD_IDS_VALUE_MEMBER")} = ${userID}\n${language("CHANNELS_EMBED_FIELD_IDS_VALUE_CHANNEL")} = ${oldChannel.id}\`\`\``)
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL())
            .setColor('GREEN')
            .setTimestamp()

            if(oldChannel.type == 'category') {
                msgName.setDescription(language("CU_EMBED_DESCRIPTION_CHANNELS_TYPE_CATEGORY"))
            }
            if(oldChannel.type == 'text') {
                msgName.setDescription(language("CU_EMBED_DESCRIPTION_CHANNELS_TYPE_TEXT"))
            }
            if(oldChannel.type == 'voice') {
                msgName.setDescription(language("CU_EMBED_DESCRIPTION_CHANNELS_TYPE_VOICE"))
            }
        
        oldChannel.guild.channels.cache.get(cU).send(msgName);
        }
    });
}