const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = {
    config: {
        nombre: "deny",
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

        let denyMsg = await channel.messages.fetch(await db.get(args[0]).message);
        if(!denyMsg) return message.channel.send(language("SUGGESTIONS_CHANNEL_SUGGEST_IF_HAS_NO_BEEN_FOUNT"));
        let embed = new MessageEmbed()
        .setAuthor(language("SUGGESTIONS_EMBED_AUTHOR").replace(/{{author}}/g, author), message.author.avatarURL())
        .addField(language("DENY_EMBED_FIELD_SUGGESTION"), await db.get(args[0]).content)
        .setColor('RED')
        .setFooter(`${language("SUGGESTIONS_EMBED_FOOTER")} ${idSuggest}`)
        .setTimestamp();

        if (args[1]) embed.addField(language("SUGGESTIONS_EMBED_FIELD_STAFF_REASON"), args.slice(1).join(' '))

        let denyChannelID = db.get(`deniedSuggestions_${message.guild.id}`);
        let denyChannel = message.guild.channels.cache.find(c => c.id == denyChannelID);
      
        message.react('✅');
          message.delete({
          timeout: 1000
        });

        if(denyChannel) {
            let denyDone = await denyChannel.send(embed).then(() => true).catch(() => false);    
        }

        let denyDone = await denyMsg.edit(embed).then(() => true).catch(() => false);
        if(!denyDone) return message.channel.send(language("SUGGESTIONS_NO_MESSAGE_EDIT_PERMISSIONS"));
        let denyUnreact = await denyMsg.reactions.removeAll().then(() => true).catch(() => false);
        if(!denyUnreact) return message.channel.send(language("SUGGESTIONS_NO_REACTIONS_REMOVE_PERMISSIONS"));
    }
}