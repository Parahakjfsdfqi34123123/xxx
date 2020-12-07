const Discord = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
    config: {
        nombre: "setNickname",
        alias: ["setNick"],
        cooldown: 5
    },
    run: async(client, message, args) => {
        const guildLanguage = guildLanguages[message.guild.id] || "spanish";
        const language = require(`../../languages/${guildLanguage}`);

        if(!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
            return message.channel.send(language("SETNICKNAME_NO_PERMISSIONS"))
        }

        let user = message.mentions.users.first();
        if(!user) return message.channel.send(language("SETNICKNAME_NO_USER"))

        let nick = args.slice(1).join(" ");
        if(!nick) return message.channel.send(language("SETNICKNAME_NO_NICK"))

        let member = message.guild.members.cache.get(user.id);

        await member.setNickname(nick).catch(err => {
            console.log(err)
            message.channel.send('Ha ocurrido un error, intente más tarde.')
        })
        return message.channel.send(language("SETNICKNAME_SUCESS").replace(/{{user}}/g, user.tag).replace(/{{nick}}/g, nick))
    }
}