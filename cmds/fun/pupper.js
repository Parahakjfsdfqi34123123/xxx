const Discord = require("discord.js")
const randomPuppy = require('random-puppy');

module.exports = {
  config: {
    nombre: "pupper",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: (client, message, args) => {
  randomPuppy().then(url =>{
  let embed = new Discord.MessageEmbed()
  .setDescription('Woof, woof !!')
  .setColor('RANDOM')
  .setImage(url)
  .setFooter('Feed me.')
			
	message.channel.send(embed);
				  
			
	}).catch(err => message.channel.send("Error."));
}
}