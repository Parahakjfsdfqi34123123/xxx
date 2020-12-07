const db = require("quick.db");
const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        nombre: "set-premium",
        alias: ["sp"]
    },
    run: async (client, message, args) => {
        //if(!message.member.roles.cache.has('749718164719272036')) return message.channel.send(`You cannot use this command because you do not belong to the support group.`);

        try {
          if(message.author.id !== "772104444720054293") return;

        let type = args[0];
        if(!args[0]) return message.channel.send(`You must provide a type. Available types:\n- Users\n- Guilds`)
        
        let id = args[1]
        if(!id) return message.channel.send(`You have not provided a valid ID.`)

        if(type == 'guild') {
            if(!client.guilds.cache.has(id)) return message.channel.send(`The bot must be on the server that you want it to be premium.`)
            db.push(`Guilds_Premium`, id)
            message.channel.send(`Now the server: ${client.guilds.cache.get(id).name} it's premium.`)
        }
        if(type == 'user') {  
            db.push(`Users_Premium`, id)
            message.channel.send(`Now the user: ${client.users.cache.get(id).tag} it's premium.`)
        }
        } catch(err) {
          console.log(err)
        }
    }
}