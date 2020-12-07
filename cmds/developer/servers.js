const Discord = require("discord.js")

module.exports = {
  config: {
    nombre: "servers",
    alias: []
  },
  run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
  
  
	.setColor("RED")
	.setTitle("Saek")
	.addField(`Servidores:`, client.guilds.cache.map(guild => guild.name).join("\n**·:·------_------:·:------_------·:·**\n\n"))
  
  
    message.channel.send(embed)
  }
}