const Discord = require("discord.js");

module.exports = async (client, guild) => {
  let guildDevelopment = client.guilds.cache.get('772105463478616065');
  let channelLogs = guildDevelopment.channels.cache.get('778743804722151456');

  let embed = new Discord.MessageEmbed()
  .setAuthor('Agregado a un servidor', client.user.avatarURL())
  .setDescription(`**Datos del servidor:**\nNombre: ${guild.name}\nID: ${guild.id}\nDueño: ${guild.owner.user.tag} \`(${guild.owner.user.id})\`\nMiembros: ${guild.memberCount}\n\n**Estadística:**\nServidores: ${client.guilds.cache.size}\nUsuarios: ${client.users.cache.size}`)
  .setColor('GREEN');

  channelLogs.send('<@772104444720054293>', embed);
}