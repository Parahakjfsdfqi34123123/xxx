const ms = require("ms")
const giveaways = require("discord-giveaways")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "reroll",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 5
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
    
    console.log("reroll")
    
    try {
        if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send(language("REROLLGIVEAWAY_NO_PERMISSIONS"));
    }

    
    if(!args[0]){
        return message.channel.send(language("REROLLGIVEAWAY_NO_ID"));
    }

    
    let giveaway = 
    
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    
    if(!giveaway){
        return message.channel.send(language("REROLLGIVEAWAY_NO_GIVEAWAY") + '`'+ args.join(' ') + '`.');
    }
    
    let congratMessage = language("REROLL_MESSAGE_SUCESS");
    let congratError = language("REROLL_MESSAGE_ERROR")

    
    client.giveawaysManager.reroll(giveaway.messageID, {
        messages: {
            congrat: `${congratMessage}`,
            error: `${congratError}`
        }
    }).then(console.log("lesto"))
    .catch((e) => {
        if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is not ended.`)){
            message.channel.send(language("REROLLGIVEAWAY_NO_END"));
        } else {
            console.error(e);
            message.channel.send(language("REROLLGIVEAWAY_ERROR"));
        }
    });
    } catch(err) {
        console.log(err)
    }
  }
}