const db = require("quick.db");

module.exports = {
    config: {
        nombre: "setp",
        alias: []
    },
    run: async (client, message, args) => {
        if(message.author.id !== '772104444720054293') return;

        db.set(`Guilds_Premium`, ['772105463478616065'])
        db.set(`Users_Premium`, ['772104444720054293'])

        message.channel.send(`Aiberson check your direct messages (DM)`)

        let gIds = db.get(`Guilds_Premium`);
        let guilds = gIds.map(id => `${client.guilds.resolve(id).name} ~ ${client.guilds.resolve(id).id}`).join('\n');

        let uIds = db.get(`Users_Premium`);
        let users = uIds.map(id => `${client.users.resolve(id).tag} ~ ${client.users.resolve(id).id}`);

        message.author.send(`Guilds:\n${guilds}\n\nUsers:\n${users}`)
    }
}