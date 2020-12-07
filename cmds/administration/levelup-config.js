const Discord = require("discord.js");
const db = require("quick.db");
let guildLanguages = require("../../Data/guilds-language.json");
const dbs = require("megadb")
let prefix_db = new dbs.crearDB('prefixes');

module.exports = {
  config: {
    nombre: "levelup",
    alias: ["levelup-config"],
    cooldown: 3
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    if(!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send(language("LEVELUP_CONFIG_MEMBER_NO_PERMISSIONS"))
    }

    let prefix = prefix_db.tiene(`${message.guild.id}`) ? await prefix_db.obtener(`${message.guild.id}`) : '.';

    let option = args[0];
    if(!option) return message.channel.send(language("LEVELUP_CONFIG_NO_OPTION"));

    if(option == 'mensaje' || option == 'message') {
      let messageLevelUp = args.slice(1).join(' ');
      if(!messageLevelUp) {
        let embed = new Discord.MessageEmbed()
        .setAuthor(language("LEVELUP_CONFIG_OPTION_MESSAGE_NO_PROVIDED_EMBED_AUTHOR"), message.guild.iconURL())
        .setDescription(language("LEVELUP_CONFIG_OPTION_MESSAGE_NO_PROVIDED_EMBED_DESCRIPTION"))
        .addField(language("LEVELUP_CONFIG_OPTION_MESSAGE_NO_PROVIDED_EMBED_FIELD"), language("LEVELUP_CONFIG_OPTION_MESSAGE_NO_PROVIDED_EMBED_FIELD_VALUE"))
        .setColor('BLUE');

        message.channel.send(embed);
      } else if(messageLevelUp == 'preview' || messageLevelUp == 'aperçu'){
        let levelUpMessage = db.get(`levelUpMessage_${message.guild.id}`)
        
        if(levelUpMessage) {
          levelUpMessage = levelUpMessage
            .replace("{{new_level}}", `2`)
            .replace("{{old_level}}", `1`)
            .replace("{{user_mention}}", `${message.author}`)
            .replace("{{user_username}}", `${message.author.username}`);
          
          message.channel.send(language("LEVELUP_CONFIG_OPTION_MESSAGE_PREVIEW").replace(/{{levelUpMessage}}/g, levelUpMessage))
        }
      } else {
        db.set(`levelUpMessage_${message.guild.id}`, messageLevelUp)

        message.channel.send(language("LEVELUP_CONFIG_OPTION_MESSAGE_SET_SUCESS").replace(/{{prefix}}/g, prefix));
      }
    }

    if(option == 'channel' || option == 'canal') {
      let channel = message.mentions.channels.first();
      let channelPreview = db.get(`levelUpChannel_${message.guild.id}`);
      
      if(channelPreview && !channel && args[1] == 'disable') {
        db.delete(`levelUpChannel_${message.guild.id}`);
        message.channel.send(language("LEVELUP_CONFIG_OPTION_CHANNEL_DISABLE"));
      }
      
      if(!channelPreview && !channel) {
        return message.channel.send(language("LEVELUP_CONFIG_OPTION_CHANNEL_NO_PROVIDED"));
      }
      
      if(!channelPreview && channel) {
        db.set(`levelUpChannel_${message.guild.id}`, channel.id);
        message.channel.send(language("LEVELUP_CONFIG_OPTION_CHANNEL_SET_SUCESS").replace(/{{channel}}/g, channel).replace(/{{prefix}}/g, prefix));  
      }
    }

    if(option == 'enable' || option == 'habilitar') {
      db.set(`LevelSystem_${message.guild.id}`, true)
      message.channel.send(language("LEVELUP_CONFIG_OPTION_ENABLE"))
    }

    if(option == 'disable' || option == 'deshabilitar') {
      db.set(`LevelSystem_${message.guild.id}`, false)
      message.channel.send(language("LEVELUP_CONFIG_OPTION_DISABLE"))
    }
  }
}