const db = require("quick.db")
const Discord = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "leaderboard",
    alias: ["lb"],
    descripcion: "",
    uso: "",
    cooldown: 3
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
    
    let money = db.all().filter((data) => data.ID.startsWith(`money_${message.guild.id}`)).sort(function(a, b){return a.data-b.data});
    let content = "";
      
    if(money.length > 10) {
      money.length = 10
    }

    for (let i = 0; i < money.length; i++) {
      let user = client.users.cache.get(money[i].ID.split('_')[2]).tag

      content += `${i+1}. ${user} ~ ${money[i].data} :money_with_wings:\n`
    }

    const embed = new Discord.MessageEmbed()
    .setAuthor(language("LEADERBOARD_EMBED_AUTHOR"), message.guild.iconURL())
    .setDescription(content)
    .setColor("GREEN")
    .setThumbnail('https://i.ibb.co/2gZxvj3/rem.gif')
    .setFooter(`${client.user.username} v1.2.1`)

    message.channel.send(embed)
  }
}