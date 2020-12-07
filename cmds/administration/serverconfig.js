const Discord = require("discord.js")
const db = require("quick.db")
const db2 = require("megadb")
let prefix_db = new db2.crearDB('prefixes')

module.exports = {
  config: {
    nombre: "serverconf",
    alias: [],
    descripcion: "",
    uso: ""
  },
  run: async (client, message, args) => {
  let bienvenidas = db.get(`welchannel_${message.guild.id}`);
  if(bienvenidas === null) {
    bienvenidas = 'No hay vato'
  }
  let despedidas = db.get(`deschannel_${message.guild.id}`);
  if(despedidas === null) {
    despedidas = 'No hay vato'
  }
  let sugerencias = db.get(`sugchannel_${message.guild.id}`);
  let autorole = db.get(`welrole_${message.guild.id}`)
  let muterole = db.get(`muterole_${message.guild.id}`)
  let prefix = prefix_db.tiene(`${message.guild.id}`) ? await prefix_db.obtener(`${message.guild.id}`) : process.env.PREFIX_DEFAULT;
	var server = message.guild;
	
	let embed = new Discord.MessageEmbed()
	.setTitle(`Configuración`)
	.setDescription(`Esta es la configuración actual del servidor.`)
	.addField(`<:channels:723933973029322865> **Canales**`, `**Bienvenidas**: ${bienvenidas}\n**Despedidas**: ${despedidas}\n**Sugerencias**: ${sugerencias}\n**Autolewd**: Developing`)
	.addField(`:speech_balloon: **Mensajes**`, `**Bienvenidas**: \n**Despedidas**: `)
	.addField(`:crown: **Roles**`, `**Autorole**: ${autorole}\n**Muterole**: ${muterole}\n**DJ**: `)
	.addField(`:tools: **Otros**`, `**Prefix**: \n`)
	.setColor('FF9185')
	.setThumbnail(server.iconURL)
	.setTimestamp()
	.setFooter(`Nagisa v1.0.0`, client.user.avatarURL)
  
  message.channel.send(embed)
}
}