const db = require("quick.db");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = {
  config: {
    nombre: "setlogs",
    alias: [],
    cooldown: 5
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    if(!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send(language("LEVELUP_CONFIG_MEMBER_NO_PERMISSIONS"))
    }

    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
      return message.channel.send(language("LOGSSET_CLIENT_NO_PERMISSIONS"))
    }

    let option = args[0]
    let channel = message.mentions.channels.first() || message.guild.channels.cache.find(c => c.name == args.slice(1).join(' '));

    if(option == 'Todos' || option == 'todos' || option == 'todo' || option == 'Todo' || option == 'All' || option == 'all') {
      if(!channel) {
        return message.channel.send(language("LOGSSET_NO_SPECIFY_OPTION_ALL"));
      }
    }

    if(!option) {
      return message.channel.send(language("LOGSSET_OPTIONS"));
    }

    if(!channel) {
      return message.channel.send(language("LOGSSET_NO_SPECIFY_OPTION").replace(/{{option}}/g, option));
    }
    if(option == 'canales' || option == 'Canales') {
      db.set(`cC_${message.guild.id}`, channel.id);
      db.set(`cD_${message.guild.id}`, channel.id);
      db.set(`cPU_${message.guild.id}`, channel.id);
      db.set(`cU_${message.guild.id}`, channel.id);
      
      message.channel.send(language("LOGSSET_OPTION_CHANNELS").replace(/{{channel}}/g, channel));
    }
    if(option == 'entrada' || option == 'Entrada' || option == 'join' || option == 'Join') {
      db.set(`gMA_${message.guild.id}`, channel.id);
      
      message.channel.send(language("LOGSSET_OPTION_JOIN").replace(/{{channel}}/g, channel));
    }
    
    if(option == 'emojis' || option == 'Emojis') {
      db.set(`eC_${message.guild.id}`, channel.id);
      db.set(`eD_${message.guild.id}`, channel.id);
      db.set(`eU_${message.guild.id}`, channel.id);
      
      message.channel.send(language("LOGSSET_OPTION_EMOJIS").replace(/{{channel}}/g, channel));
    }
    if(option == 'mensajes' || option == 'Mensajes' || option == 'messages' || option == 'Messages') {
      db.set(`mD_${message.guild.id}`, channel.id);
      db.set(`mDB_${message.guild.id}`, channel.id);
      db.set(`mRRA_${message.guild.id}`, channel.id);
      db.set(`mU_${message.guild.id}`, channel.id);
      
      message.channel.send(language("LOGSSET_OPTION_MESSAGES").replace(/{{channel}}/g, channel));
    }
    if(option == 'moderacion' || option == 'moderación' || option == 'Moderación' || option == 'moderación' || option == 'Moderation' || option == 'moderation') {
      db.set(`gBA_${message.guild.id}`, channel.id);
      db.set(`gBR_${message.guild.id}`, channel.id);
      db.set(`k_${message.guild.id}`, channel.id);
      db.set(`mA_${message.guild.id}`, channel.id);
      db.set(`mR_${message.guild.id}`, channel.id);
      
      message.channel.send(language("LOGSSET_OPTION_MODERATION").replace(/{{channel}}/g, channel));
    }
    if(option == 'salida' || option == 'Salida' || option == 'leave' || option == 'Leave') {
      db.set(`gMR_${message.guild.id}`, channel.id);
      
      message.channel.send(language("LOGSSET_OPTION_LEAVE").replace(/{{channel}}/g, channel));
    }
    if(option == 'Guild' || option == 'guild' || option == 'servidor' || option == 'Servidor') {
      db.set(`gU_${message.guild.id}`, channel.id);
      
      message.channel.send(language("LOGSSET_OPTION_GUILD").replace(/{{channel}}/g, channel));
    }
    if(option == 'roles' || option == 'Roles') {
      db.set(`rC_${message.guild.id}`, channel.id);
      db.set(`rD_${message.guild.id}`, channel.id);
      db.set(`rU_${message.guild.id}`, channel.id);
      
      message.channel.send(language("LOGSSET_OPTION_ROLES").replace(/{{channel}}/g, channel));
    }
    if(option == 'members' || option == 'Members' || option == 'miembros' || option == 'Miembros') {
      db.set(`gMU_${message.guild.id}`, channel.id);
      
      message.channel.send(language("LOGSSET_OPTION_MEMBERS").replace(/{{channel}}/g, channel));
    }
    
    if(option == 'Todos' || option == 'todos' || option == 'todo' || option == 'Todo' || option == 'All' || option == 'all') {
      //Channels
      db.set(`cC_${message.guild.id}`, channel.id);
      db.set(`cD_${message.guild.id}`, channel.id);
      db.set(`cPU_${message.guild.id}`, channel.id);
      db.set(`cU_${message.guild.id}`, channel.id);
      //Join
      db.set(`gMA_${message.guild.id}`, channel.id);
      //Emojis
      db.set(`eC_${message.guild.id}`, channel.id);
      db.set(`eD_${message.guild.id}`, channel.id);
      db.set(`eU_${message.guild.id}`, channel.id);
      //Mensajes
      db.set(`mD_${message.guild.id}`, channel.id);
      db.set(`mDB_${message.guild.id}`, channel.id);
      db.set(`mRRA_${message.guild.id}`, channel.id);
      db.set(`mU_${message.guild.id}`, channel.id);
      //Moderación
      db.set(`gBA_${message.guild.id}`, channel.id);
      db.set(`gBR_${message.guild.id}`, channel.id);
      db.set(`k_${message.guild.id}`, channel.id);
      db.set(`mA_${message.guild.id}`, channel.id);
      db.set(`mR_${message.guild.id}`, channel.id);
      //Leave
      db.set(`gMR_${message.guild.id}`, channel.id);
      //Guild
      db.set(`gU_${message.guild.id}`, channel.id);
      //Roles
      db.set(`rC_${message.guild.id}`, channel.id);
      db.set(`rD_${message.guild.id}`, channel.id);
      db.set(`rU_${message.guild.id}`, channel.id);
      //Miembros
      db.set(`gMU_${message.guild.id}`, channel.id);
      
      message.channel.send(language("LOGSSET_OPTION_ALL").replace(/{{channel}}/g, channel));
    }
  }
}