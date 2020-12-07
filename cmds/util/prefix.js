const db = require("megadb")
let prefix_db = new db.crearDB('prefixes')
const { MessageEmbed } = require("discord.js");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = {
  config: {
    nombre: "prefix",
    alias: [],
    descripcion: "",
    uso: ""
  },
  run: async(client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let prefix = prefix_db.tiene(`${message.guild.id}`) ? await prefix_db.obtener(`${message.guild.id}`) : '.';

    let embed = new MessageEmbed()
    .setDescription(language("PREFIX_IN_SERVER").replace(/{{prefix}}/g, prefix))
    .setColor('BLUE');

    message.channel.send(embed)
  }
}