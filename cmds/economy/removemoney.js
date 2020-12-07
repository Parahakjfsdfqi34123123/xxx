const db = require("quick.db")
const { MessageEmbed } = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "removemoney",
    alias: ["rm"],
    descripcion: "",
    uso: "",
    cooldown: 5
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    if(!message.member.hasPermission('ADMINISTRATOR')) {
      return message.channel.send(language("ADDMONEY_MEMBER_NO_PERMISSIONS"))
    }

    let user = message.mentions.members.first();

    let embed = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription(language("DEPOSIT_NO_ARGS_EMBED_DESCRIPTION"))
    .addField(language("REMOVEMONEY_NO_ARGS_FIELD"),
    language("REMOVEMONEY_NO_ARGS_FIELD_CONTENT"))
    .setColor('RED')
    .setTimestamp();

    if (isNaN(args[1])) return message.channel.send(language("REMOVEMONEY_QUANTITY_NO_NUMBER"));
    if(!args[1]) return message.channel.send(embed)
    db.subtract(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor("GREEN")
    .setDescription(language("REMOVEMONEY_SUCESS").replace(/{{money}}/g, args[1]).replace(/{{user}}/g, user))
    .setTimestamp()

    message.channel.send(moneyEmbed)
  }
}