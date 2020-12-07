const db = require("quick.db");
const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
      nombre: "get-premium",
      alias: ["gp"]
    },
    run: async (client, message, args) => {
        //if(!message.member.roles.cache.has('749718164719272036')) return message.channel.send(`You cannot use this command because you do not belong to the support group.`);

        if(message.author.id !== "772104444720054293") return;

        let type = args[0];
        if(!type) return message.channel.send(`You must provide a type. Available types:\n- Users\n- Guilds`)
        
        if(type == 'guilds' || type == 'Guilds') {
            let ids = db.get(`Guilds_Premium`)
            let guilds = ids.map(id => `${client.guilds.resolve(id).name} ~ ${client.guilds.resolve(id).id}`).join('\n')

            let embed = new MessageEmbed()
            .setAuthor(`Guilds Premium`, client.user.avatarURL())
            .addField(`Active Premium Guilds`, guilds)
            .setColor('BLUE')
            .setTimestamp();

            message.channel.send(embed);
        }

        if(type == 'users' || type == 'Users') {
            let ids = db.get(`Users_Premium`)
            let users = ids.map(id => `${client.users.resolve(id).tag} ~ ${client.users.resolve(id).id}`)

            let embed = new MessageEmbed()
            .setAuthor(`Users Premium`, client.user.avatarURL())
            .addField(`Active Premium Users`, users)
            .setColor('BLUE')
            .setTimestamp();

            message.channel.send(embed);
        }
    }
}