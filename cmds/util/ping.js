const Discord = require("discord.js")

module.exports = {
  config: {
    nombre: "ping",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: async (client, message, args) => {
    let ping = Math.floor(client.ws.ping);

		if (ping > 300) {
			const pingA = new Discord.MessageEmbed()
			.setTitle(':ping_pong: Pong!')
			.setDescription(`:red_circle: | ${ping} ms`)
			.setColor("RED")
			message.channel.send(pingA);
			
		} else if (ping > 200) {
			const pingMO = new Discord.MessageEmbed()
			.setTitle(':ping_pong: Pong!')
			.setDescription(":yellow_circle: | " + ping + " ms")
			.setColor("YELLOW")
			message.channel.send(pingMO);

		} else if (ping > 10) {
			const pingM = new Discord.MessageEmbed()
			.setTitle(':ping_pong: Pong!')
			.setDescription(":green_circle: | " + ping + " ms")
			.setColor("GREEN")
			message.channel.send(pingM);

		} else	{
			const pingN = new Discord.MessageEmbed()
			.setTitle(':ping_pong: Pong!')
			.setDescription(":white_circle: | " + ping + " ms")
			.setColor("#fefefe")
			.setTimestamp()
			message.channel.send(pingN);

		}
  }
}