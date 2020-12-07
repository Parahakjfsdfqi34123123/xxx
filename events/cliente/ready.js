const { Player } = require("discord-player")
const settings = require ("../../config/bot.json")

module.exports = async client => {

  console.log(`Ready as ${client.user.tag}`);
  function Presencechange() {
    let statuses = [`Updates`, `${client.guilds.cache.size} Servers`, `${client.users.cache.size} Users`]
    let random = statuses[Math.floor(statuses.length * Math.random())];
    client.user.setPresence({
         status: "online",
         activity: {
             name: `${random}`,
             type: "WATCHING"
         }
     })
  }setInterval(Presencechange, 10000);

  client.queue = new Map();
  
  //const player = new Player(client, settings.youtube_api);
  //client.player = player;
  
  //client.Util = require("../../modules/Util.js")
  
  const { GiveawaysManager } = require('discord-giveaways');
  client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        embedColor: "#00FFE4",
        embedColorEnd: "#112A78",
        reaction: "🎉"
    }
  });
// We now have a client.giveawaysManager property to manage our giveaways!

client.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} entered giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});

client.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} unreact to giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
})
}