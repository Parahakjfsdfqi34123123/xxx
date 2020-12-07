const Discord = require("discord.js")
const db2 = require("megadb")
let prefix_db = new db2.crearDB('prefixes')
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
    config: {
        nombre: "deleterole",
        alias: [],
        cooldown: 5
    },
    run: async (client, message, args) => {
        const guildLanguage = guildLanguages[message.guild.id] || "spanish";
        const language = require(`../../languages/${guildLanguage}`);

        let permiso = "MANAGE_ROLES"
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(language("DELETEEROLE_NO_PERMISSIONS").replace(/{{permiso}}/g, permiso))

        let role = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.name == args.join(" "))
        if(!role) return message.channel.send(language("DELETEROLE_NO_ROLE").replace(/{{author}}/g, message.author))

        role.delete('El papel necesitaba irse.')
        .then(deleted => console.log(`Deleted role ${deleted.name}`))
        .catch(console.error);
    }
}