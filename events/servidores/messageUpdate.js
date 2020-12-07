const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = async (client, oldMessage, newMessage) => {
    const guildLanguage = guildLanguages[oldMessage.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let mU = db.get(`mU_${oldMessage.guild.id}`)
	if(mU === null) {
		return;
	}
	
	let nameChannel = newMessage.channel.name;
	
    let member = newMessage.member.user.tag;

    if(newMessage.author.bot) return;
	
	let embed = new MessageEmbed()
    .setAuthor(member, oldMessage.member.user.avatarURL())
    .setDescription(language("MU_EMBED_DESCRIPTION").replace(/{{member}}/g, member))
    .addField(language("MESSAGES_EMBED_FIELD_CHANNEL"), nameChannel)
    .addField(language("MESSAGES_EMBED_FIELD_MESSAGE"), `${language("MU_EMBED_FIELD_MESSAGE_VALUE_OLD")} ${oldMessage.content}\n${language("MU_EMBED_FIELD_MESSAGE_VALUE_NOW")} ${newMessage.content}`)
    .addField(`**ID's**`, `\`\`\`prolog\n${language("MESSAGES_EMBED_FIELD_IDS_VALUE_CANAL")} = ${newMessage.channel.id}\n${language("MESSAGES_EMBED_FIELD_IDS_VALUE_MESSAGE")} = ${newMessage.id}\n${language("MESSAGES_EMBED_FIELD_IDS_VALUE_MEMBER")} = ${newMessage.member.id}\`\`\``)
    .setColor('PURPLE')
	.setTimestamp()
	.setFooter(member, newMessage.member.user.avatarURL())
		
	newMessage.guild.channels.cache.get(mU).send(embed);
}