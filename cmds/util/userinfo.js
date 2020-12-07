const Discord = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json");
const moment = require("moment")

module.exports = {
  config: {
    nombre: "userinfo",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 3
  },
  run: (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    const flags = {
      DISCORD_EMPLOYEE: 'Discord Employee',
      DISCORD_PARTNER: 'Discord Partner',
      BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
      BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
      HYPESQUAD_EVENTS: 'HypeSquad Events',
      HOUSE_BRAVERY: 'House of Bravery',
      HOUSE_BRILLIANCE: 'House of Brilliance',
      HOUSE_BALANCE: 'House of Balance',
      EARLY_SUPPORTER: 'Early Supporter',
      TEAM_USER: 'Team User',
      SYSTEM: 'System',
      VERIFIED_BOT: 'Verified Bot',
      VERIFIED_DEVELOPER: 'Verified Bot Developer'
    };
        
        const status = {
            online: "<:online:753015143142522931> Online",
            idle: "<:idle:753015143134396416> Idle",
            dnd: "<:dnd:753015142781943874> Dnd",
            offline: "<:offline:753015143360757810> Offline"
          };
        
        const member = message.mentions.members.last() || message.guild.members.cache.get(args[0]) || message.member;
        const roles = member.roles.cache
          .sort((a, b) => b.position - a.position)
          .map(role => role.toString())
          .slice(0, -1);
        const userFlags = member.user.flags.toArray();
        const MemberNoGame = language("USERINFO_EMBED_FIELD_NO_GAME")
        const roleNone = language("USERINFO_EMBED_FIELD_NO_ROLES")
        const embed = new Discord.MessageEmbed()
          .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
          .setColor(member.displayHexColor || 'BLUE')
          .addField(language("USERINFO_EMBED_FIELD_DATES"), [
            `**${language("USERINFO_EMBED_FIELD_USERNAME")}:** ${member.user.username}`,
            `**${language("USERINFO_EMBED_FIELD_DISCRIMINATOR")}:** ${member.user.discriminator}`,
            `**ID:** ${member.id}`,
            `**${language("USERINFO_EMBED_FIELD_FLAGS")}:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
            `**Avatar:** [Link to avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
            `**${language("USERINFO_EMBED_FIELD_TIME_CREATED")}:** ${moment.utc(member.user.createdTimestamp).format('MM/DD/YYYY h:mm A')}`,
            `**${language("USERINFO_EMBED_FIELD_STATUS")}:** ${status[member.user.presence.status]}`,
            `**${language("USERINFO_EMBED_FIELD_GAME")}:** ${member.user.presence.game || MemberNoGame}`,
            `\u200b`
          ])
          .addField(language("USERINFO_EMBED_FIELD_DETAILS"), [
            `**${language("USERINFO_EMBED_FIELD_HIGHEST_ROLE")}:** ${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name}`,
            `**${language("USERINFO_EMBED_FIELD_SERVER_JOIN_DATE")}:** ${moment.utc(member.joinedAt).format('MM/DD/YYYY h:mm A')}`,
            //`**Hoist Role:** ${member.roles.hoist ? member.roles.hoist.name : 'None'}`,
            `**${language("USERINFO_EMBED_FIELD_ROLES")} [${roles.length}]:** ${roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : roleNone}`,
            `\u200b`
          ])
          .setColor('RANDOM');
        return message.channel.send(embed);
  }
}