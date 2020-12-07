const { MessageEmbed } = require("discord.js");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = {
  config: {
    nombre: "invite",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 3
  },
  run: (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
  
  
    client.generateInvite("ADMINISTRATOR")
  	  .then(link =>{
        let embed = new MessageEmbed()
        .setDescription(language("INVITE_EMBED_DESCRIPTION"))
        .setColor('BLUE')
        .setThumbnail('https://i.ibb.co/C87jMjv/invite.gif')

      message.channel.send(embed)      
	  });
  }
}