const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const dbs = require("megadb")
let prefix_db = new dbs.crearDB('prefixes');
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
    config: {
        nombre: "suggestions-config",
        alias: [],
        cooldown: 5
    },
    run: async (client, message, args) => {
        try {
          let Guilds_Premium = db.get(`Guilds_Premium`)
        const guildLanguage = guildLanguages[message.guild.id] || "spanish";
        const language = require(`../../languages/${guildLanguage}`);

        let module = args[0]

        let prefix = prefix_db.tiene(`${message.guild.id}`) ? await prefix_db.obtener(`${message.guild.id}`) : '.';

        if(!module) {
            let embed = new MessageEmbed()
            .setAuthor(language("EMBED_NO_MODULE_AUTHOR_INFORMATION"), client.user.avatarURL())
            .addField(`${prefix}suggestions-config new <#canal>`, language("EMBED_NO_MODULE_FIELD_NEW_CHANNEL"))
            .addField(`${prefix}suggestions-config approve <#canal>`, language("EMBED_NO_MODULE_FIELD_APPROVE_CHANNEL"))
            .addField(`${prefix}suggestions-config denied <#canal>`, language("EMBED_NO_MODULE_FIELD_DENIED_CHANNEL"))
            .addField(`${prefix}suggestions-config possible <#canal>`, language("EMBED_NO_MODULE_FIELD_POSSIBLE_CHANNEL"))
            .addField(`${prefix}suggestions-config submit <#canal>`, language("EMBED_NO_MODULE_FIELD_SUBMIT_CHANNEL"))
            .addField(`${prefix}suggestions-config role <rol>`, language("EMBED_NO_MODULE_FIELD_ROLE"))
            .setColor('RANDOM')

            message.channel.send(embed)
        }

        //FUNTIONS NORMAL

        if(module === 'new') {
            let channel = message.mentions.channels.first() || message.guild.channels.cache.find(c => c.name == args.slice(1).join(' '))
            if(!channel) {
                return message.channel.send(language("SUGGESTIONS_NO_CHANNEL"))
            }
            db.set(`newSuggestions_${message.guild.id}`, channel.id)
            message.channel.send(language("MODULE_NEW_SUCESS").replace(/{{channel}}/g, channel))
        }

        if(module == 'approve') {
            let channel = message.mentions.channels.first() || message.guild.channels.cache.find(c => c.name == args.slice(1).join(' '))
            if(!channel) {
                return message.channel.send(language("MODULE_APPROVE_NO_CHANNEL"))
            }
            db.set(`approveSuggestions_${message.guild.id}`, channel.id)
            message.channel.send(language("MODULE_APPROVE_SUCESS").replace(/{{channel}}/g, channel))
        }

        if(module == 'denied') {
            let channel = message.mentions.channels.first() || message.guild.channels.cache.find(c => c.name == args.slice(1).join(' '))
            if(!channel) {
                return message.channel.send(language("MODULE_DENIED_NO_CHANNEL"))
            }
            db.set(`deniedSuggestions_${message.guild.id}`, channel.id)
            message.channel.send(language("MODULE_DENIED_SUCESS").replace(/{{channel}}/g, channel))
        }

        if(module == 'possible') {
            let channel = message.mentions.channels.first() || message.guild.channels.cache.find(c => c.name == args.slice(1).join(' '))
            if(!channel) {
                return message.channel.send(language("MODULE_POSSIBLE_NO_CHANNEL"))
            }
            db.set(`invalidSuggestions_${message.guild.id}`, channel.id)
            message.channel.send(language("MODULE_INVALID_SUCESS").replace(/{{channel}}/g, channel))
        }

        //FUNCTIONS PREMIUM

        if(module == 'submit') {
            let embed = new MessageEmbed()
            .setAuthor(`Honii Premium`, client.user.displayAvatarURL())
            .setDescription(language("MODULE_SUBMIT_NO_GUILD_PREMIUM"))
            .addField(language("NO_GUILD_OR_USER_PREMIUM_EMBED_FIELD"), language("NO_GUILD_OR_USER_PREMIUM_FIELD_CONTENT"))
            .setColor('BLUE')
            .setImage('https://i.ibb.co/JBxQgb2/descarga.jpg')
            .setTimestamp()
            .setFooter(`${client.user.username} v1.2.1`);

            if(Guilds_Premium && !Guilds_Premium.includes(message.guild.id)) {
                message.channel.send(embed)
            }

            let channel = message.mentions.channels.first() || message.guild.channels.cache.find(c => c.name == args[1])
            if(!channel) {
                return message.channel.send(language("MODULE_SUBMIT_NO_CHANNEL"))
            }
            db.set(`submitSuggestions_${message.guild.id}`, channel.id)
            message.channel.send(language("MODULE_SUBMIT_SUCESS").replace(/{{channel}}/g, channel.name))
        }
        } catch(err) {
          console.log(err)
        }
    }
}