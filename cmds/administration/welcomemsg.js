const Discord = require("discord.js")
const db = require("quick.db")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "welcomemsg",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 5
  },
  run: (client, message, args) => {
  let user = message.member;
  let server = message.guild.name;
  
  let text = args.join(' ')
  if(!text) return message.channel.send(`El mensaje de bienvenida configurado en este servidor es:\n\`\`\`css\n\`\`\``)
  
  db.set(`welmessage_${message.guild.id}`, text)
  
  message.channel.send(`<:yes:723198776474468433> Tu **mensaje de bienvenida personalizado** ahora está configurado.`)
}
}