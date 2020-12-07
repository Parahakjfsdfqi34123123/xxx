const Discord = require("discord.js")
const db = require("quick.db");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = {
  config: {
    nombre: "botinfo",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 5
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let aiberson = client.users.cache.get('772104444720054293');
    let saile = client.users.cache.get('763149089621016646');
    let javier = client.users.cache.get('713093170614894632');
    let CommandsUsed = db.get(`CommandUsage`);
    
    let embed = new Discord.MessageEmbed()
    .setAuthor(language("ABOUT_EMBED_AUTHOR").replace(/{{client}}/g, client.user.username), client.user.avatarURL())
    .addField(language("ABOUT_EMBED_FIELD"), `${language("ABOUT_EMBED_FIELD_VALUE_SERVERS")} ${client.guilds.cache.size.toLocaleString()}\n${language("ABOUT_EMBED_FIELD_VALUE_CHANNELS")} ${client.channels.cache.size.toLocaleString()}\n${language("ABOUT_EMBED_FIELD_VALUE_USERS")} ${client.users.cache.size.toLocaleString()}\n${language("ABOUT_EMBED_FIELD_VALUE_COMMANDS")} ${client.commands.size}\n${language("ABOUT_EMBED_FIELD_VALUE_COMMANDS_USED")} ${CommandsUsed}`, true)
    .addField(language("ABOUT_EMBED_FIELD_TEAM"), `${language("ABOUT_EMBED_FIELD_TEAM_DEVELOPER")} ${aiberson ? aiberson.tag : "Unknown#0000"}\n${language("ABOUT_EMBED_FIELD_TEAM_DESIGNER")} ${saile ? saile.tag : "Unknown#0000"}`, true)
    .addField(language("ABOUT_EMBED_FIELD_LINKS"), `[${language("ABOUT_EMBED_FIELD_LINKS_VALUE_WEBSITE")}](https://honii.ml/)\n[Patreon](https://www.patreon.com/honii_bot)\n[${language("ABOUT_EMBED_FIELD_LINKS_VALUE_OFFICIAL_SERVER")}](https://discord.gg/4AWFykXNnV)\n[${language("ABOUT_EMBED_FIELD_LINKS_VALUE_INVITE")}](https://discord.com/oauth2/authorize?client_id=778280886143287308&permissions=1400630518&scope=bot)`)
    
    .setColor('BLUE')
    .setFooter('Versión 1.2.1')
    
    message.channel.send(embed)
  }
}


//[${language("ABOUT_EMBED_FIELD_LINKS_VALUE_WEBSITE")}](http://saek-uwu.cf/)

//${language("ABOUT_EMBED_FIELD_TEAM_CO_DEVELOPER")} ${javier ? javier.tag : "Unknown#0000"}\n