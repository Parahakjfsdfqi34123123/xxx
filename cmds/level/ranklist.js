const db = require("quick.db")
const Discord = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = {
  config: {
    nombre: "ranklist",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
        const language = require(`../../languages/${guildLanguage}`);

    let SystemLevels = db.get(`LevelSystem_${message.guild.id}`);

    if(SystemLevels == false) {
      return message.channel.send(language("LEVEL_CATEGORY_DISABLE"))
    }

    let data = db.all().filter((data) => data.ID.startsWith(`xp_${message.guild.id}`)).sort(function(a, b){return a.data-b.data}).reverse();
    if (data.length < 1) return message.channel.send(language("RANKLIST_NO_MEMBERS_IN_LEADERBOARD"));
    if(data.length > 10) {
        data.length = 10;
    }
    let lb = [];
    for (let i in data)  {
      let id = data[i].ID.split("_")[2];
      let user = await client.users.cache.get(`${id}`);
      user = user ? user.tag : "Unknown User#0000";
      let rank = data.indexOf(data[i]) + 1;
      let level = await db.get(`level_${message.guild.id}_${id}`);
      if (level == null) level = 1;
      let xp = data[i].data
      let xpreq = 5 * (level ** 3) + 50 * level + 100;
      lb.push({
        user: { id, tag: user },
        rank, level, xp, xpreq
      });
    };

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${message.guild.name} - Top 10`, message.guild.iconURL())
    .setColor("RANDOM")
    lb.forEach(member => {
        embed.addField(
          `${member.rank}. ${member.user.tag}`, `**${language("RANK_EMBED_FIELD_LEVEL")}** - ${member.level}\n**XP** - ${(member.xp).replace(/['"]+/g, '')} / ${member.xpreq}`
        );
    });
    return message.channel.send(embed);
  }
}