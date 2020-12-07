const Discord = require("discord.js")
module.exports = {
  config: {
    nombre: "refresh",
    alias: [],
    descripcion: "",
    uso: ""
},
  run: async (client, message, args) => {
  
  let ownerID = process.env.ownerID;
  let devID = process.env.DevID;
  let altID = process.env.altID
  if(![ownerID, devID, altID].includes(message.author.id)) return message.channel.send('Solo el owner & developer lo pueden usar.');
  message.channel.send("ðŸ•™ | Reinicio en progreso...").then(async msg => {
  msg.edit("ðŸ•™ | Reiniciar en progreso...")
  client.destroy();
  await client.login(process.env.TOKEN);
  await msg.edit("ðŸ•™ | Reinicio en progreso...")
  msg.edit("â˜‘ï¸ | Reiniciado Correctamente!")
  })
}
}