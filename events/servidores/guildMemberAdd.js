const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = async (client, member) => {
  const guildLanguage = guildLanguages[member.guild.id] || "spanish";
  const language = require(`../../languages/${guildLanguage}`);

  //Autorole
  let role = db.get(`welrole_${member.guild.id}`);
  if(role) {
    member.roles.add(role);
  }

  //Welcome channel
  //let welcomeChannel = db.get(`welcomechannel_${message.guild.id}`)

  //Logs GuildMemberAdd
  let gMA = db.get(`gMA_${member.guild.id}`)

  if(gMA) {
    let embed = new MessageEmbed()
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setDescription(language("GMA_EMBED_DESCRIPTION"))
    .addField(language("JAL_EMBED_FIELD_NAME"), member.user.tag)
    .addField(language("JAL_EMBED_FIELD_JOINED"), member.joinedAt)
    .addField(language("JAL_EMBED_FIELD_ACCOUNT_TIME"), member.user.createdAt)
    .addField(language("JAL_EMBED_FIELD_TOTAL_MEMBERS"), member.guild.memberCount)
    .addField("**ID**", `\`\`\`prolog\n${language("JAL_EMBED_FIELD_IDS_VALUE_MEMBER")} = ${member.id}\`\`\``)
    .setColor('GREEN')
    
    member.guild.channels.cache.get(gMA).send(embed)
  }
}