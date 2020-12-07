const Discord = require("discord.js");
const dbs = require("megadb")
let prefix_db = new dbs.crearDB('prefixes');

module.exports = async (client, guild) => {
  let guildDevelopment = client.guilds.cache.get('772105463478616065');
  let channelLogs = guildDevelopment.channels.cache.get('778743804722151456');

  let embed = new Discord.MessageEmbed()
  .setAuthor('Removido de un servidor', client.user.avatarURL())
  .setDescription(`**Datos del servidor:**\nNombre: ${guild.name}\nID: ${guild.id}\nDueño: ${guild.owner.user.tag} \`(${guild.owner.user.id})\`\n\n**Estadística:**\nServidores: ${client.guilds.cache.size}`)
  .setColor('RED');

  channelLogs.send('<@772104444720054293>', embed);

  if(prefix_db.tiene(`${guild.id}`)) {
    prefix_db.eliminar(`${guild.id}`)
  }
}