let guildLanguages = require("../../Data/guilds-language.json");

module.exports = {
  config: {
    nombre: "lock",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 5
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

     if(!message.member.hasPermission("MANAGE_CHANNELS")){
      return message.channel.send(language("LOCK_MEMBER_NO_PERMISSIONS"))
    }
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
      return message.channel.send(language("LOCK_CLIENT_NO_PERMISSIONS"))
    }

    let channel = message.mentions.channels.first() || message.channel;
    let reasond = args.slice(1).join(' ');
    let reason = reasond ? reasond : "It was necessary to change the channel permissions.";
    let mSucess = "";

    if(channel == message.channel) {
      mSucess = language("LOCK_SUCESS_SAME_CHANNEL")
    }
    if(!channel == message.channel) {
      mSucess = language("LOCK_SUCESS_OTHER_CHANNEL").replace(/{{channel}}/g, channel)
    }

   

    await channel.overwritePermissions([
      {
        id: message.guild.id,
        deny: ["SEND_MESSAGES", "ADD_REACTIONS"]
      },
    ], reason);

    message.channel.send(mSucess);
  }
}