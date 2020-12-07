let guildLanguages = require("../../Data/guilds-language.json")

module.exports = {
  config: {
    nombre: "unlock",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 5
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
      return message.channel.send(language("UNLOCK_CLIENT_NO_PERMISSIONS"))
    }

    if(!message.member.hasPermission("MANAGE_CHANNELS")){
      return message.channel.send(language("UNLOCK_MEMBER_NO_PERMISSIONS"))
    }

    let channel = message.mentions.channels.first() || message.channel;
    let reasond = args.slice(1).join(' ');
    let reason = reasond ? reasond : "It was necessary to change the channel permissions.";
    let mSucess = "";

    if(channel == message.channel) {
      mSucess = language("UNLOCK_SUCESS_SAME_CHANNEL")
    }
    if(!channel == message.channel) {
      mSucess = language("UNLOCK_SUCESS_OTHER_CHANNEL").replace(/{{channel}}/g, channel)
    }

    await channel.overwritePermissions([
      {
        id: message.guild.id,
        allow: ["SEND_MESSAGES", "ADD_REACTIONS"]
      },
    ], reason);

    message.channel.send(mSucess);
  }
}