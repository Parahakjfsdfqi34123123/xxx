const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = async (client, message) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let mD = db.get(`mD_${message.guild.id}`)
	if(mD === null) {
		return;
    }
    
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
	
	if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
	
	let embed = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription(language("MD_EMBED_DESCRIPTION").replace(/{{member}}/g, message.author.tag))
    .addField(language("MESSAGES_EMBED_FIELD_CHANNEL"), message.channel.name)
    .addField(language("MESSAGES_EMBED_FIELD_MESSAGE"), message.content)
    .addField(`**ID's**`, `\`\`\`prolog\n${language("MESSAGES_EMBED_FIELD_IDS_VALUE_CANAL")} = ${message.channel.id}\n${language("MESSAGES_EMBED_FIELD_IDS_VALUE_MESSAGE")} = ${message.id}\n${language("MESSAGES_EMBED_FIELD_IDS_VALUE_MEMBER")} = ${message.author.id}\`\`\``)
    .setColor('PURPLE')
	.setTimestamp()
	.setFooter(message.author.tag, message.author.avatarURL())
		
	message.guild.channels.cache.get(mD).send(embed);
}