const db = require("quick.db")
const { MessageEmbed } = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "addmoney",
    alias: ["am"],
    descripcion: "",
    uso: "",
    cooldown: 5
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    if(!message.member.hasPermission('MANAGE_GUILD')) {
      return message.channel.send(language("ADDMONEY_MEMBER_NO_PERMISSIONS"))
    }

    let user = message.mentions.members.first();
    if(!user) return message.channel.send(language("ADDMONEY_NO_USER"))

    let embed = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription(language("DEPOSIT_NO_ARGS_EMBED_DESCRIPTION"))
    .addField(language("ADDMONEY_NO_ARGS_FIELD"),
    language("ADDMONEY_NO_ARGS_FIELD_CONTENT"))
    .setColor('RED')
    .setTimestamp();

    if(!args[1]) return message.channel.send(embed)
    if (isNaN(args[1])) return message.channel.send(language("ADDMONEY_QUANTITY_NO_NUMBER"));
    db.add(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor("GREEN")
    .setDescription(language("ADDMONEY_SUCESS").replace(/{{money}}/g, args[1]).replace(/{{user}}/g, user))
    .setTimestamp()

    message.channel.send(moneyEmbed)
  }  
}