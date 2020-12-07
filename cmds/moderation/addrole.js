let guildLanguages = require("../../Data/guilds-language.json");
const db = require("megadb");
let prefix_db = new db.crearDB('prefixes');

module.exports = {
  config: {
    nombre: "addrole",
    alias: ["assign"],
    descripcion: "",
    uso: "",
    cooldown: 5
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let prefix = prefix_db.tiene(`${message.guild.id}`) ? await prefix_db.obtener(`${message.guild.id}`) : '.';

    if(!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")){
      return message.channel.send(language("ASSIGN_NO_PERMISSIONS").replace(/{{permiso}}/g, permiso))
    }

    let miembro = message.mentions.members.first()
    //let nombrerol = args.slice(1).join(' ');

    let role = message.mentions.roles.first();
     
    if(!miembro) return message.channel.send(language("ASSIGN_NO_MENTION")).catch(console.error);
    if(!role) return message.channel.send(language("ASSIGN_NO_ROLE").replace(/{{prefix}}/g, prefix));
    //if(!role) return message.channel.send(language("ASSIGN_NO_ROLE_GUILD"));
    
    miembro.roles.add(role.id);
    message.channel.send(language("ASSIGN_SUCESS").replace(/{{rol}}/g, role.name).replace(/{{member}}/g, miembro.user.username));
  }
}