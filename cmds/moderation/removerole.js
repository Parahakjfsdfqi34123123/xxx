let guildLanguages = require("../../Data/guilds-language.json");

module.exports = {
  config: {
    nombre: "removerole",
    alias: [],
    descripcion: "",
    uso: "",
    cooldown: 5
  },
  run: (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let miembro = message.mentions.members.first() || message.guild.members.cache.find(u => u.user.username)
    //let nombrerol = args.slice(1).join(' ');

    let role = message.mentions.roles.first();
  
    if(!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")){
      return message.channel.send(language("REMOVEROLE_NO_PERMISSIONS").replace(/{{permiso}}/g, permiso))
    }
     
    if(message.mentions.users.size < 1) return message.channel.send(language("REMOVEROLE_NO_MENTION"));
    //if(!nombrerol) return message.channel.send(language(""));REMOVEROLE_NO_ROLE_GUILD
    if(!role) return message.channel.send(language("REMOVEROLE_NO_ROLE"));
    
    miembro.roles.remove(role.id)
    message.channel.send(language("REMOVEROLE_SUCESS").replace(/{{rol}}/g, role.name).replace(/{{member}}/g, miembro.user.tag));
  }
}