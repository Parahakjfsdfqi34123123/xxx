const db = require("quick.db")
const dbs = require("megadb")
let levels_db = new dbs.crearDB("niveles")
const { MessageEmbed } = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json")


module.exports = {
  config: {
    nombre: "balance",
    alias: ["bal"],
    descripcion: "",
    uso: "",
    cooldown: 5
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    /*if(!message.member.hasPermission('ADMINISTRATOR')) {
      return message.channel.send(``)
    }*/

    let user = message.mentions.users.first() || message.author;
    let bal = db.fetch(`money_${message.guild.id}_${user.id}`);

    if (bal === null) bal = 0;

    let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`);

    if (bank === null) bank = 0;

    let moneyEmbed = new MessageEmbed()
    .setAuthor(language("BALANCE_EMBED_AUTHOR").replace(/{{user}}/g, user.tag), user.avatarURL())
    .setColor("GREEN")
    .addField(language("BALANCE_EMBED_FIELD"),
    language("BALANCE_EMBED_FIELD_CONTENT").replace(/{{bal}}/g, bal).replace(/{{bank}}/g, bank))
    .setTimestamp()
    message.channel.send(moneyEmbed)
  }
}