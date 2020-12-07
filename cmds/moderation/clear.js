const Discord = require("discord.js");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = {
  config: {
    nombre: "clear",
    alias: ["purge", "borrar"],
    cooldown: 5
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(language("CLEAR_MEMBER_NO_PERMISSIONS")).then(m => m.delete(7000));
  
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send(language("CLEAR_CLIENT_NO_PERMISSIONS")).then(x => x.delete(7000));
  
    if (isNaN(args[0])) return message.channel.send(language("CLEAR_NO_NUMBER").replace(/{{author}}/g, message.author.username));
  
    if (args[0] > 100) return message.channel.send(language("CLEAR_NUMBER_GREATER_THAN_HUNDRED")).then(u => u.delete(7000));
  
    message.channel.bulkDelete(args[0])
      .then(messages => message.channel.send(language("CLEAR_SUCESS").replace(/{{number}}/g, `${messages.size}/${args[0]}`))
      .then(msg => msg.delete({
        timeout: 5000
    })))
    .catch(`:x: Error.`)
  }
}