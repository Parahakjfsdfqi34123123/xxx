const { Collection } = require('discord.js');
const cooldowns = new Collection();
const db = require("quick.db")
let cooldownLevels = new Map();
const dbs = require("megadb")
let prefix_db = new dbs.crearDB('prefixes');
var guildLanguages = require("../../Data/guilds-language.json");

module.exports = async (client, message) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
    
    let prefix = prefix_db.tiene(`${message.guild.id}`) ? await prefix_db.obtener(`${message.guild.id}`) : '.';
  
    if(message.author.bot || message.channel.type === "dm") return;
    let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    
    if(message.content.match(RegMention)) {
        message.channel.send(language("MESSAGE_MENTION_CLIENT").replace(/{{prefix}}/g, prefix)).then(msg => msg.delete({
            timeout: 5000
        }))
    }
  
    if(!message.content.startsWith(prefix)) {
      let SystemLevels = db.get(`LevelSystem_${message.guild.id}`);
      if(SystemLevels == null) {
        db.set(`LevelSystem_${message.guild.id}`, false)
      }

      if(SystemLevels == true) {
        if(cooldownLevels.has(message.guild.id+message.author.id)) {
      let cooldown = cooldownLevels.get(message.guild.id+message.author.id)
      if(Date.now() < cooldown) {
        return
		}
	  }
	    xp(message)
      cooldownLevels.set(message.guild.id+message.author.id, Date.now() + 10000)
      }
      return;
    }

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    let commandfile = client.commands.get(cmd) || client.commands.get(client.alias.get(cmd))
    if(!commandfile) return;

    if(!cooldowns.has(commandfile)) {
      cooldowns.set(commandfile, new Collection());
    }

    let now = Date.now();
    let timestamps = cooldowns.get(commandfile);
    let cooldownAmount = (commandfile.config.cooldown || 2) * 1000;

    if(timestamps.has(message.author.id)) {
      let expirationTime = timestamps.get(message.author.id) + cooldownAmount;

      if(now < expirationTime) {
        let timeLeft = (expirationTime - now) / 1000;
        return message.reply(language("NO_TIME_COMMANDS_TO_USED").replace(/{{time}}/g, timeLeft.toFixed(1)).replace(/{{command}}/g, commandfile.config.nombre)).then(msg => msg.delete({timeout: 5000}));
      }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount)
    
    //Command Handler
    try {
      if(commandfile) {
        commandfile.run(client, message, args)
        db.add(`CommandUsage`, 1)
      }
    } catch (err) {
      console.log(err)
      client.channels.cache.get('785286660748869683').send('<@772104444720054293> Uncaught Promise error: \n' + err)
    }
}

async function xp(message) {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
    
  try {
    let xp = await db.get(`xp_${message.guild.id}_${message.author.id}`);
    if(xp == null) await db.set(`xp_${message.guild.id}_${message.author.id}`, 1)
  
    let newXP = await db.get(`xp_${message.guild.id}_${message.author.id}`);
    const randomXP = Math.floor(Math.random() * 20) + 1;
  
    let addedXP = parseInt(newXP) + randomXP
    await db.set(`xp_${message.guild.id}_${message.author.id}`, addedXP);
  
    let level = await db.get(`level_${message.guild.id}_${message.author.id}`);
    if(level == null) await db.set(`level_${message.guild.id}_${message.author.id}`, 0)
  
    let newLvl = await db.get(`level_${message.guild.id}_${message.author.id}`);
    let nexp = 5 * (level ** 3) + 50 * level + 100;
  
    let exp = (await db.get(`xp_${message.guild.id}_${message.author.id}`)) || db.set(`level_${message.guild.id}_${message.author.id}`, 0);
    if (exp > nexp) {
      let anothaLvl = await db.get(`level_${message.guild.id}_${message.author.id}`);
      let newestLvl = parseInt(anothaLvl) + 1
      await db.set(`level_${message.guild.id}_${message.author.id}`, newestLvl);
      await db.set(`xp_${message.guild.id}_${message.author.id}`, 0)
      let newLvl = await db.get(`level_${message.guild.id}_${message.author.id}`);
      message.channel.send(language("MESSAGE_LEVEL_UP").replace(/{{author}}/g, message.author.username).replace(/{{level}}/g, newLvl)).then(msg => msg.delete({
          timeout: 5000
      }))
    }
  } catch (err) {
    console.log(err)
    console.log('Se produjo un error de XP: pero esto se manejó con éxito.')
  }
}