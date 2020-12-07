const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = async (client, message) => {
  const guildLanguage = guildLanguages[message.guild.id] || "spanish";
  const language = require(`../../languages/${guildLanguage}`);

  let mRRA = db.get(`mRRA_${message.guild.id}`)
  if(mRRA === null) {
    return;
  }
	
    if(!message.guild) return;
    let embed = new MessageEmbed()
    .setDescription(language("MRRU_EMBED_DESCRIPTION"))
    .addField(language("MESSAGES_EMBED_FIELD_MESSAGE"), message.content)
    .addField(language("MESSAGES_EMBED_FIELD_CHANNEL"), message.channel.name)
    .addField(`**ID's**`, `\`\`\`prolog\n${language("MESSAGES_EMBED_FIELD_IDS_VALUE_CANAL")} = ${message.channel.id}\n${language("MESSAGES_EMBED_FIELD_IDS_VALUE_MESSAGE")} = ${message.id}\`\`\``)
    .setColor('#E74C3C')
    .setTimestamp()
	
    message.guild.channels.cache.get(mRRA).send(embed);
}