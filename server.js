//Ping of repl
const keep_alive = require('./keep_alive.js');

//Code of discord bot

const { Client, Collection } = require("discord.js"); 
const Discord = require("discord.js"); 
const client = new Client();
const fs = require("fs");

const { Player } = require("discord-player")

const player = new Player(client)
client.player = player;
 
["alias", "commands"].forEach(x => client[x] = new Collection());
["comandos", "eventos"].forEach(x => require(`./handler/${x}`)(client));

/*fs.readdir("./player-events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./player-events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Loading player event ${eventName}`);
        client.player.on(eventName, event.bind(null, client));
    });
});
*/

process.on('unhandledRejection', err => {
    console.log('Uncaught Promise error: \n' + err.stack);
    client.channels.cache.get('785286660748869683').send('<@772104444720054293> Uncaught Promise error: \n' + err.stack)
});

require('ytpl').do_warn_deprecate = false;

client.login(process.env.TOKEN);