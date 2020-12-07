const Discord = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = {
  config: {
    nombre: "avatar",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 5
  },
  run: (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  
    let embed = new Discord.MessageEmbed()
    .setAuthor(language("AVATAR_EMBED_AUTHOR").replace(/{{user}}/g, user.tag))
    .setImage(user.displayAvatarURL({size: 2048, dynamic: true}))
    .setColor("BLUE")
    .setFooter(language("AVATAR_EMBED_FOOTER").replace(/{{author}}/g, message.author.username), client.user.avatarURL())
    message.channel.send(embed);
  }
}