const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = {
    config: {
        nombre: "possible",
        alias: [],
		cooldown: 5
    },
    run: async (client, message, args) => {
        const guildLanguage = guildLanguages[message.guild.id] || "spanish";
        const language = require(`../../languages/${guildLanguage}`);

        let channelID = db.get(`newSuggestions_${message.guild.id}`);
        if(!channelID) return message.channel.send(language("SUGGESTIONS_CHANNEL_DOES_NO_EXIST"));

        let channel = message.guild.channels.cache.find(c => c.id == channelID)
        if(!channel) {
            return message.channel.send(language("SUGGESTIONS_CHANNEL_ELIMINATED"))
        }

        let roleSuggest = db.get(`roleSuggestions_${message.guild.id}`)
        if(!roleSuggest) {
            if(!message.member.hasPermission('ADMINISTRATOR')) {
                return message.channel.send(LANGUAGE("SUGGESTIONS_NO_ROLE_ESTABLISHED"))
            }
        }
        if(roleSuggest) {
            if(!message.member.roles.cache.has(roleSuggest)) return message.channel.send(language("SUGGESTIONS_MEMBER_NO_HAS_ROLE"))
        }

        let author = message.author.tag;

        let idSuggest = await db.get(args[0]).id;
        if (!args[0] || !db.has(args[0])) return message.channel.send(language("SUGGESTIONS_NO_DB_SUGGEST_ID_OR_NO_ARGS"));

        let possibleMsg = await channel.messages.fetch(await db.get(args[0]).message);
        if(!possibleMsg) return message.channel.send(language("SUGGESTIONS_CHANNEL_SUGGEST_IF_HAS_NO_BEEN_FOUNT"));
        let embed = new MessageEmbed()
        .setAuthor(language("SUGGESTIONS_EMBED_AUTHOR").replace(/{{author}}/g, author), message.author.avatarURL())
        .addField(language("POSSIBLE_EMBED_FIELD_SUGGESTION"), await db.get(args[0]).content)
        .setFooter(`${language("SUGGESTIONS_EMBED_FOOTER")} ${idSuggest}`)
        .setTimestamp();

        if (args[1]) embed.addField(language("SUGGESTIONS_EMBED_FIELD_STAFF_REASON"), args.slice(1).join(' '))

        let possibleChannelID = db.get(`invalidSuggestions_${message.guild.id}`)
        let possibleChannel = message.guild.channels.cache.find(c => c.id == possibleChannelID);

        message.react('✅');
          message.delete({
          timeout: 1000
        });

        if(possibleChannel) {
            let possibleDone = await possibleChannel.send(embed).then(() => true).catch(() => false);
        }

        let possibleDone = await possibleMsg.edit(embed).then(() => true).catch(() => false);
        if(!possibleDone) return message.channel.send(language("SUGGESTIONS_NO_MESSAGE_EDIT_PERMISSIONS"));
        let possibleUnreact = await possibleMsg.reactions.removeAll().then(() => true).catch(() => false);
        if(!possibleUnreact) return message.channel.send(language("SUGGESTIONS_NO_REACTIONS_REMOVE_PERMISSIONS"));
    }
}