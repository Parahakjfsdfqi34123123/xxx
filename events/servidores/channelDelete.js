const { MessageEmbed } = require("discord.js");
const moment = require("moment");
const db = require("quick.db");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = async (client, channel ) => {
    const guildLanguage = guildLanguages[channel.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    if(!channel.guild.me.hasPermission('VIEW_AUDIT_LOG')) {
        return;
    }

    let cD = db.get(`cD_${channel.guild.id}`)
    if(cD === null) {
      return;
    }
    
    if(!channel.guild) return;
    
    channel.guild.fetchAuditLogs().then(logs => {
        
        let userID = logs.entries.first().executor.id;
        
        let userAvatar = logs.entries.first().executor.avatarURL();

        let position = channel.position;
        if(position < 0) {
            position = 0;
        }
        
        let msgCC = new MessageEmbed()
        .setAuthor(channel.guild.members.cache.find(u => u.id == userID).user.tag, userAvatar)
        .addField(language("CHANNELS_NAME"), `${channel.name}`)
        .addField(language("CHANNELS_DATE_CREATE"), `${moment.utc(channel.createdAt).format('MM/DD/YYYY')}`)
        .addField(language("CHANNELS_POSITION"), `${position}`)
        .addField(`**ID's**`, `\`\`\`prolog\n${language("CHANNELS_EMBED_FIELD_IDS_VALUE_MEMBER")} = ${userID}\n${language("CHANNELS_EMBED_FIELD_IDS_VALUE_CHANNEL")} = ${channel.id}\`\`\``)
        .setColor('GREEN')
        .setFooter(channel.guild.name, channel.guild.iconURL())
        .setTimestamp()

        if(channel.type == 'category') {
            msgCC.setDescription(language("CD_EMBED_DESCRIPTION_CHANNELS_TYPE_CATEGORY"))
        }
        if(channel.type == 'text') {
            msgCC.setDescription(language("CD_EMBED_DESCRIPTION_CHANNELS_TYPE_TEXT"))
        }
        if(channel.type == 'voice') {
            msgCC.setDescription(language("CD_EMBED_DESCRIPTION_CHANNELS_TYPE_VOICE"))
        }
        
        channel.guild.channels.cache.get(cD).send(msgCC)
    });
}