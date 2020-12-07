const Discord = require("discord.js")
const ms = require('ms');
const prettyMilliseconds = require('pretty-ms');
const config = require("../../config/bot.json")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "create",
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

    message.channel.send(language("CREATEGIVEAWAY_INIT_MESSAGE"));
    await startMessageCollectors(client, message, args);
  }
}


function startMessageCollectors(client, message, args) {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
    
    let channelFilter = m => m.author.id === message.author.id;
    let channelCollector = new Discord.MessageCollector(message.channel, channelFilter, { max: 999 });

    channelCollector.on('collect', async msg => {
      let channel = await msg.mentions.channels.first();
      if (msg.content.toLowerCase() === 'cancel') {
        msg.channel.send(language("CREATEGIVEAWAY_CANCEL"))
        channelCollector.stop();
        return;
      }
      if (!channel) {
        await msg.channel.send(language("CREATEGIVEAWAY_NO_VALID_CHANNEL"));
        await channelCollector.stop();
        return;
      } else {
        msg.channel.send(language("CREATEGIVEAWAY_NEXT_STEP_AFTER_CHANNEL").replace(/{{channel}}/g, channel.toString()))
        channelCollector.stop();
      }
      let durationFilter = m => m.author.id === message.author.id;
      let durationCollector = new Discord.MessageCollector(message.channel, durationFilter, { max: 999 });
    durationCollector.on('collect', async msg => {
        let duration = msg.content;
        if (msg.content.toLowerCase() === 'cancel') {
            msg.channel.send(language("CREATEGIVEAWAY_CANCEL"))
          durationCollector.stop();
          return;
        }
        if (!duration || isNaN(ms(duration))) {
          await msg.channel.send(language("CREATEGIVEAWAY_NO_VALID_TIME"))
          durationCollector.stop();
          return;
        } else {
          msg.channel.send(language("CREATEGIVEAWAY_NEXT_STEP_AFTER_TIME").replace(/{{time}}/g, prettyMilliseconds(ms(duration), {verbose: true})));
          durationCollector.stop();
        }
        let winnersFilter = m => m.author.id === message.author.id;
        let winnersCollector = new Discord.MessageCollector(message.channel, winnersFilter, { max: 999 });
    winnersCollector.on('collect', async msg => {
        let winners = msg.content;
        let trueWinners = Math.round(winners);
        if (msg.content.toLowerCase() === 'cancel') {
          msg.channel.send(language("CREATEGIVEAWAY_CANCEL"))
          winnersCollector.stop();
          return;
        }
        if (isNaN(trueWinners) || (parseInt(trueWinners) <= 0 || trueWinners > 20)) {
          await msg.channel.send(language("CREATEGIVEAWAY_NO_VALID_WINNERS"));
          winnersCollector.stop();
          return;
        } else {
          msg.channel.send(language("CREATEGIVEAWAY_NEXT_STEP_AFTER_WINNERS").replace(/{{winners}}/g, trueWinners))
          winnersCollector.stop();
        }
        let prizeFilter = m => m.author.id === message.author.id;
        let prizeCollector = new Discord.MessageCollector(message.channel, prizeFilter, { max: 999 });
    prizeCollector.on('collect', async msg => {
        let prize = msg.content;
        if (msg.content.toLowerCase() === 'cancel') {
          msg.channel.send(language("CREATEGIVEAWAY_CANCEL"))
          prizeCollector.stop();
          return;
        }
        if (!prize) {
          await msg.channel.send(language("CREATEGIVEAWAY_NO_PRIZE"))
          prizeCollector.stop();
          return;
        } else {
          msg.channel.send(language("CREATEGIVEAWAY_SUCESS_MESSAGE").replace(/{{channel}}/g, channel.toString()));
          prizeCollector.stop();
          client.giveawaysManager.start(channel, {
            time: ms(duration),
            prize: prize,
            winnerCount: trueWinners,
            hostedBy: true ? message.author : null,
            messages: {
              giveaway: language("CREATEGIVEAWAY_SUCESS_STARTED"),
              giveawayEnded: language("CREATEGIVEAWAY_SUCESS_ENDED"),
              timeRemaining: language("CREATEGIVEAWAY_SUCESS_TIME")+ "**{duration}**!",
              inviteToParticipate: language("CREATEGIVEAWAY_SUCESS_REACT"),
              winMessage: language("CREATEGIVEAWAY_SUCESS_WIN_MESSAGE"),
              embedFooter: language("CREATEGIVEAWAY_SUCESS_FOOTER"),
              noWinner: language("CREATEGIVEAWAY_NO_PARTICIPATIONS"),
              hostedBy: language("CREATEGIVEAWAY_SUCESS_HOSTED"),
              winners: language("CREATEGIVEAWAY_SUCESS_WINNERS"),
              endedAt: language("CREATEGIVEAWAY_SUCESS_ENDEDAT"),
              units: {
                seconds: language("CREATEGIVEAWAY_SUCESS_TIME_SECONDS"),
                minutes: language("CREATEGIVEAWAY_SUCESS_TIME_MINUTES"),
                hours: language("CREATEGIVEAWAY_SUCESS_TIME_HOURS"),
                days: language("CREATEGIVEAWAY_SUCESS_TIME_DAYS"),
                pluralS: false
                  }
              }
            });
    }
  });
  });
  });
  });
}