const Discord = require("discord.js")
const ms = require("parse-ms")
const moment = require("moment")
const db = require("megadb")
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = {
  config: {
    nombre: "serverinfo",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 3
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let verificationLevel = {
      NONE: language("SERVERINFO_VERIFICATION_LEVEL_NONE"),
      LOW: language("SERVERINFO_VERIFICATION_LEVEL_LOW"),
      MEDIUM: language("SERVERINFO_VERIFICATION_LEVEL_MEDIUM"),
      HIGH: language("SERVERINFO_VERIFICATION_LEVEL_HIGH"),
      VERY_HIGH: language("SERVERINFO_VERIFICATION_LEVEL_VERY_HIGH")
    }
    let region = {
      europe: "Europa :flag_eu:",
      brazil: "Brasil :flag_br: ",
      hongkong: "Hong Kong :flag_hk:",
      japan: "Japón :flag_jp:",
      russia: "Rusia :flag_ru:",
      singapore: "Singapur :flag_sg:",
      southafrica: "Sudáfrica :flag_za:",
      sydney: "Sydney :flag_au:",
      "us-central": "Central US :flag_us:",
      "us-east": "Este US :flag_us:",
      "us-south": "Sur US :flag_us:",
      "us-west": "Oeste US :flag_us:",
      "vip-us-east": "VIP US Este :flag_us:",
      "eu-central": "Europa Central :flag_eu:",
      "eu-west": "Europa Oeste :flag_eu:",
      london: "London :flag_gb:",
      amsterdam: "Amsterdam :flag_nl:",
      india: "India :flag_in:"
    };
    let humans = message.guild.members.cache.filter(u => !u.user.bot).size;
    let bots = message.guild.members.cache.filter(u => u.user.bot).size;
    let text = message.guild.channels.cache.filter(c => c.type == 'text').size;
    let voice = message.guild.channels.cache.filter(c => c.type == 'voice').size;
    
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .addField(language("SERVERINFO_EMBED_FIELD_OWNER"), message.guild.owner, true)
    .addField(language("SERVERINFO_EMBED_FIELD_SERVERID"), message.guild.id, true)
    .addField(language("SERVERINFO_EMBED_FIELD_REGION"), region[message.guild.region], true)
    
    .addField(language("SERVERINFO_EMBED_FIELD_MEMBERS"), `:busts_in_silhouette: ${language("SERVERINFO_EMBED_FIELDS_VALUE_ALL_TOTAL")}: ${message.guild.memberCount}\n:bust_in_silhouette: ${language("SERVERINFO_EMBED_FIELD_VALUE_MEMBERS_USERS")}: ${humans}\n🤖 Bots: ${bots}`, true)
    .addField(language("SERVERINFO_EMBED_FIELD_CHANNELS"), `🗨️ ${language("SERVERINFO_EMBED_FIELDS_VALUE_ALL_TOTAL")}: ${message.guild.channels.cache.size}\n:hash: ${language("SERVERINFO_EMBED_FIELD_VALUE_CHANNELS_TEXT")}: ${text}\n:loud_sound: ${language("SERVERINFO_EMBED_FIELD_VALUE_CHANNELS_VOZ")}: ${voice}`, true)
    .addField(language("SERVERINFO_EMBED_FIELD_ROLES"), `:bookmark: ${language("SERVERINFO_EMBED_FIELDS_VALUE_ALL_TOTAL")}: ${message.guild.roles.cache.size}\n:arrow_up: ${language("SERVERINFO_EMBED_FIELD_VALUE_ROLES_HIGHEST")}: ${message.guild.roles.highest.name}`, true)
    
    .addField(language("SERVERINFO_EMBED_FIELD_BOOSTS"), `<:boosts:780113648990814209> ${language("SERVERINFO_EMBED_FIELDS_VALUE_ALL_TOTAL")}: ${message.guild.premiumSubscriptionCount}\n✨ ${language("SERVERINFO_EMBED_FIELD_VALUE_BOOSTS_TIER")}: ${message.guild.premiumTier}`, true)
    .addField(language("SERVERINFO_EMBED_FIELD_EMOJIS"), `<:peppo:780116243054067722> ${language("SERVERINFO_EMBED_FIELDS_VALUE_ALL_TOTAL")}: ${message.guild.emojis.cache.size}`, true)
    .addField(language("SERVERINFO_EMBED_FIELD_VERIFICATION_LEVEL"), verificationLevel[message.guild.verificationLevel], true)
    
    .setColor('BLUE')
    
    message.channel.send(embed);
  }
}