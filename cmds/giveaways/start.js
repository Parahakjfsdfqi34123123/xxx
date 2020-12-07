const ms = require("ms")
const config = require("../../config/bot.json")
var guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "start",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 5
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

   if(!message.member.hasPermission('MANAGE_MESSAGES')) {
        return message.channel.send(language("STARTGIVEAWAY_NO_PERMISSIONS"));
    }

    
    let giveawayDuration = args[0];
  
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(language("STARTGIVEAWAY_NO_TIME"));
    }

    
    let giveawayNumberWinners = args[1];
    
    if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
        return message.channel.send(language("STARTGIVEAWAY_NO_WINNERS"));
    }

    
    let giveawayPrize = args.slice(2).join(' ');
    
    if(!giveawayPrize){
        return message.channel.send(language("STARTGIVEAWAY_NO_PRIZE"));
    }

    
    client.giveawaysManager.start(message.channel, {
        
        time: ms(giveawayDuration),
        
        prize: giveawayPrize,
        
        winnerCount: giveawayNumberWinners,
        
        hostedBy: config.hostedBy ? message.author : null,
        
        messages: {
            giveaway: language("STARTGIVEAWAY_SUCESS_STARTED"),
            giveawayEnded: language("STARTGIVEAWAY_SUCESS_ENDED"),
            timeRemaining: language("STARTGIVEAWAY_SUCESS_TIME")+ "**{duration}**!",
            inviteToParticipate: language("STARTGIVEAWAY_SUCESS_REACT"),
            winMessage: language("STARTGIVEAWAY_SUCESS_WIN_MESSAGE"),
            embedFooter: language("STARTGIVEAWAY_SUCESS_FOOTER"),
            noWinner: language("STARTGIVEAWAY_NO_PARTICIPATIONS"),
            hostedBy: language("STARTGIVEAWAY_SUCESS_HOSTED"),
            winners: language("STARTGIVEAWAY_SUCESS_WINNERS"),
            endedAt: language("STARTGIVEAWAY_SUCESS_ENDEDAT"),
            units: {
                seconds: language("STARTGIVEAWAY_SUCESS_TIME_SECONDS"),
                minutes: language("STARTGIVEAWAY_SUCESS_TIME_MINUTES"),
                hours: language("STARTGIVEAWAY_SUCESS_TIME_HOURS"),
                days: language("STARTGIVEAWAY_SUCESS_TIME_DAYS"),
                pluralS: false
            }
        }
    });
  }
}