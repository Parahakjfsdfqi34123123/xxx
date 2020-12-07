const Discord = require("discord.js");
const db = require("quick.db")
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = {
  config: {
    nombre: "profile",
    alias: [],
    descripcion: "",
    uso: ""
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let user = message.mentions.users.first() || message.author;
    let level = db.get(`level_${message.guild.id}_${user.id}`);
    let xp = db.get(`xp_${message.guild.id}_${user.id}`);
    let nexp = 5 * (level ** 3) + 50 * level + 100;
    let money = db.get(`money_${message.guild.id}_${user.id}`);
    let bank = db.get(`bank_${message.guild.id}_${user.id}`);
    let marriageID = db.get(`marry_${user.id}`);
    let marriage = client.users.resolve(marriageID);
    let premiumDB = db.get(`Users_Premium`)
    let premium = "";
    if(premiumDB && premiumDB.includes(user.id)) {
      premium = language("PROFILE_USER_PREMIUM")
    } else {
      premium = language("PROFILE_USER_NO_PERMIUM")
    };
    
    if(level == null) level = 0;
    if(xp == null) xp = 0;
    if(money == null) money = 0;
    if(bank == null) bank = 0;
    
    let embed = new Discord.MessageEmbed()
    .setAuthor(language("PROFILE_EMBED_AUTHOR").replace(/{{user}}/g, user.tag), user.displayAvatarURL())
    .setDescription(language("PROFILE_EMBED_DESCRIPTION").replace(/{{user}}/g, user.username).replace(/{{level}}/g, level).replace(/{{xp}}/g, xp).replace(/{{nexp}}/g, nexp).replace(/{{money}}/g, money).replace(/{{bank}}/g, bank).replace(/{{premium}}/g, premium).replace(/{{marriage}}/g, marriage ? marriage.tag : language("PROFILE_NO_MARRIAGE")))
    .setColor('RANDOM')
  
    message.channel.send(embed)
  }
}