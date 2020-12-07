const { MessageEmbed } = require("discord.js");
const emotes = require("../../config/emojis.json");
const { canModifyQueue } = require("../../util/MilratoUtil");
const { attentionembed } = require("../../util/attentionembed");
let guildLanguages = require("../../Data/guilds-language.json")
const db = require("quick.db")

module.exports = {
  config: {
    nombre: "volume",
    alias: ["set-volume", "setvolume", "volumen", "v"],
    descripcion: "",
    uso: "",
    cooldown: 5
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let Guilds_Premium = db.get('Guilds_Premium')

    if(Guilds_Premium && Guilds_Premium.includes(message.guild.id)) {

      let embedNoMusicsInServer = new MessageEmbed()
      .setColor('RED')
      .setDescription(language("LOOP_MO_MUSICS_IN_GUILD").replace(/{{error}}/g, emotes.error));

      let embedNoValidNumberVolume = new MessageEmbed()
      .setColor('RED')
      .setDescription(language("VOLUME_NO_NUMBER_VALID").replace(/{{error}}/g, emotes.error));

      let embedVolumeMuchOrBit = new MessageEmbed()
      .setColor('RED')
      .setDescription(language("VOLUME_MUCH_OR_BIT"));

      let embedVolumeChange = new MessageEmbed()
      .setColor('BLUE')
      .setDescription(language("VOLUME_CHANGE_SUCESS").replace(/{{volume}}/g, args[0]));
      
      const queue = message.client.queue.get(message.guild.id);
    
      if (!queue) return message.channel.send(embedNoMusicsInServer)
    
      if (!canModifyQueue(message.member)) return;

      let embedVolume = new MessageEmbed()
      .setColor('GREEN')
      .setDescription(language("VOLUME") + `**${queue.volume}%**`)

      if (!args[0]) return message.channel.send(embedVolume).catch(console.error);
    
      if (isNaN(args[0])) return message.channel.send(embedNoValidNumberVolume);
    
      if (parseInt(args[0]) < 0 || parseInt(args[0]) > 200) return message.channel.send(embedVolumeMuchOrBit);
    
      queue.volume = args[0];
      
      queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    
      return queue.textChannel.send(embedVolumeChange).catch(console.error);
    }

    if(!Guilds_Premium.includes(message.guild.id)) {
      let embed = new MessageEmbed()
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setDescription(language("NO_GUILD_EMBED_DESCRIPTION"))
      .addField(language("NO_GUILD_OR_USER_PREMIUM_EMBED_FIELD"), language("NO_GUILD_OR_USER_PREMIUM_FIELD_CONTENT"))
      .setColor('GREEN')
      .setThumbnail('https://i.ibb.co/2gZxvj3/rem.gif')
      .setTimestamp()
      .setFooter(`${client.user.username} v1.2.1`)

      message.channel.send(embed)
    }
  }
}