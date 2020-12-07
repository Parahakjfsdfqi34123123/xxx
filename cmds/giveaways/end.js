const ms = require("ms")
const giveaways = require("discord-giveaways")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "end",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 5
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
    
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(language("ENDGIVEAWAY_NO_PERMISSIONS"));
    }

    
    if(!args[0]){
        return message.channel.send(language("ENDGIVEAWAY_NO_ID"));
    }

    
    let giveaway = 
    
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    
    if(!giveaway){
        return message.channel.send(language("ENDGIVEAWAY_NO_GIVEAWAY") + '`'+ args.join(' ') + '`.');
    }

    
    client.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    
    .then(() => {
        
        console.log("xd")
    })
    .catch((e) => {
        if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is already ended.`)){
            message.channel.send(language("ENDGIVEAWAY_ALREADY_END"));
        } else {
            console.error(e);
            message.channel.send(language("ENDGIVEAWAY_ERROR"));
        }
    });
  }
}