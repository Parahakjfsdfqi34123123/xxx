const db = require("quick.db");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = {
  config: {
    nombre: "divorce",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 10
  },
  run: async(client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let user = db.get(`marry_${message.author.id}`);
    if(!user) return message.channel.send(language("DIVORCE_NO_MARRIED"));

    message.channel.send(language("DIVORCE_QUESTION").replace(/{{user}}/g, client.users.cache.get(user).tag));

    const collector = message.channel.createMessageCollector(m => m.author.id === message.author.id && m.channel.id === message.channel.id, {time : 20000});

    collector.on("collect", collected => {
      if(collected.content.toLowerCase() === 'si' || collected.content.toLowerCase() === 'yes') {

        message.channel.send(language("DIVORCE_SUCESS").replace(/{{user}}/g, client.users.cache.get(user).tag).replace(/{{author}}/g, message.author.username));

        db.delete(`marry_${user}`);
        db.delete(`marry_${message.author.id}`)
      } else if (collected.content.toLowerCase() === 'no' || collected.content.toLowerCase() === "not") {
        message.channel.send(language("DIVORCE_SUCESS_REPLY_NO"));
      }
    });

    collector.on("end", collected => {
      if(collected.size === 0) {
        return message.channel.send(language("DIVORCE_NO_SUCESS").replace(/{{author}}/g, message.author.username));
      }
    });
  }
}