const Discord = require("discord.js")
const db = require("megadb")
let prefix_db = new db.crearDB('prefixes');
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = {
  config: {
    nombre: "help",
    alias: ["ayuda"],
    descripcion: "",
    uso: ""
  },
  run: async (client, message, args) => {
    const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);
    
    let prefix = prefix_db.tiene(`${message.guild.id}`) ? await prefix_db.obtener(`${message.guild.id}`) : '.';
  
    let categoria = args[0];

    let embedAction = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(language("HELP_ALL_CATEGORIES_EMBED_DESCRIPTION").replace(/{{prefix}}/g, prefix))
    .addField(language("HELP_CATEGORIE_ACTION_EMBED_FIELD"), '`angry` ~ `baka`  ~ `bite`  ~ `cheeks` ~ `claps` ~ `cook` ~ `cuddle` ~ `feed` ~ `gaming` ~ `glare` ~ `handholding` ~ `heal` ~ `highfive` ~ `hug` ~ `kickbutt` ~ `kill` ~ `kiss` ~ `laugh` ~ `lick` ~ `pat` ~ `poke` ~ `scared` ~ `shoot` ~ `slap` ~ `spank` ~ `splash` ~ `spray` ~ `stare` ~ `tickle` ~ `tsundere`')
    .setColor('BLUE')
    .setFooter(`${client.user.username} v1.2.1`);

    let embedAdministration = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(language("HELP_ALL_CATEGORIES_EMBED_DESCRIPTION").replace(/{{prefix}}/g, prefix))
    .addField(language("HELP_CATEGORIE_ADMINISTRATION_EMEBD_FIELD"), '`autorole` ~ `createrole` ~ `deleterole` ~ `levelup-config` ~ `muterole` ~ `setlang` ~ `setprefix`')
    .setColor('BLUE')
    .setFooter(`${client.user.username} v1.2.1`);

    let embedAnime = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(language("HELP_ALL_CATEGORIES_EMBED_DESCRIPTION").replace(/{{prefix}}/g, prefix))
    .addField(language("HELP_CATEGORIE_ANIME_EMEBD_FIELD"), '`awoo` ~ `crimson` ~ `fbi` ~ `jpose` ~ `kemo` ~ `nani` ~ `neko` ~ `nekogif` ~ `poi` ~ `rem` ~ `rero` ~ `trap` ~ `zawarudo`')
    .setColor('BLUE')
    .setFooter(`${client.user.username} v1.2.1`);

    let embedEconomy = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(language("HELP_ALL_CATEGORIES_EMBED_DESCRIPTION").replace(/{{prefix}}/g, prefix))
    .addField(language("HELP_CATEGORIE_ECONOMY_EBED_FIELD"), '`addmoney` ~ `balance` ~ `beg` ~ `crime` ~ `daily` ~ `deposit` ~ `fish` ~ `leaderboard` ~ `removemoney` ~ `roulette` ~ `slots` ~ `weekly` ~ `withdraw` ~ `work`')
    .setColor('BLUE')
    .setFooter(`${client.user.username} v1.2.1`);

    let embedFun = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(language("HELP_ALL_CATEGORIES_EMBED_DESCRIPTION").replace(/{{prefix}}/g, prefix))
    .addField(language("HELP_CATEGORIE_FUN_EMEBD_FIELD"), '`8ball` ~ `pupper` ~ `roll` ~ `say`')
    .setColor('BLUE')
    .setFooter(`${client.user.username} v1.2.1`);

    let embedGiveaways = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(language("HELP_ALL_CATEGORIES_EMBED_DESCRIPTION").replace(/{{prefix}}/g, prefix))
    .addField(language("HELP_CATEGORIE_GIVEAWAYS_EMEBD_FIELD"), '`create`~ `end` ~ `reroll` ~ `start`')
    .setColor('BLUE')
    .setFooter(`${client.user.username} v1.2.1`);

    let embedLevel = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(language("HELP_ALL_CATEGORIES_EMBED_DESCRIPTION").replace(/{{prefix}}/g, prefix))
    .addField(language("HELP_CATEGORIE_LEVELS_EMEBD_FIELD"), '`rank` ~ `ranklist`')
    .setColor('BLUE')
    .setFooter(`${client.user.username} v1.2.1`);

    let embedLogger = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(language("HELP_ALL_CATEGORIES_EMBED_DESCRIPTION").replace(/{{prefix}}/g, prefix))
    .addField(language("HELP_CATEGORIE_LOGGER_EMEBD_FIELD"), '`setlogs`')
    .setColor('BLUE')
    .setFooter(`${client.user.username} v1.2.1`);

    let embedMarriage = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(language("HELP_ALL_CATEGORIES_EMBED_DESCRIPTION").replace(/{{prefix}}/g, prefix))
    .addField(language("HELP_CATEGORIE_MARRIAGE_EMEBD_FIELD"), '`divorce` ~ `marry`')
    .setColor('BLUE')
    .setFooter(`${client.user.username} v1.2.1`);

    let embedModeration = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(language("HELP_ALL_CATEGORIES_EMBED_DESCRIPTION").replace(/{{prefix}}/g, prefix))
    .addField(language("HELP_CATEGORIE_MODERATION_EMEBD_FIELD"), '`addrole` ~ `ban` ~ `clear` ~ `kick` ~ `lock` ~ `mute` ~ `removerole` ~ `tempmute` ~ `unban` ~ `unlock` ~ `unmute`')
    .setColor('BLUE')
    .setFooter(`${client.user.username} v1.2.1`);

    let embedMusic = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(language("HELP_ALL_CATEGORIES_EMBED_DESCRIPTION").replace(/{{prefix}}/g, prefix))
    .addField(language("HELP_CATEGORIE_MUSIC_EMEBD_FIELD"), '`bassboost` ~ `clear-queue` ~ `loop` ~ `now-playing` ~ `pause` ~ `play` ~ `queue` ~ `shuffle` ~ `skip` ~ `stop` ~ `volume`')
    .setColor('BLUE')
    .setFooter(`${client.user.username} v1.2.1`);

    let embedReaction = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(language("HELP_ALL_CATEGORIES_EMBED_DESCRIPTION").replace(/{{prefix}}/g, prefix))
    .addField(language("HELP_CATEGORIE_REACTION_EMEBD_FIELD"), '`banghead` ~ `boom` ~ `cry` ~ `dab` ~ `dance` ~ `deredere` ~ `disgust` ~ `drunk` ~ `facepalm` ~ `fail` ~ `happy` ~ `like` ~ `nope` ~ `peek` ~ `psycho` ~ `sad` ~ `scream` ~ `shrug` ~ `sing` ~ `sip` ~ `sleep` ~ `smug` ~ `think` ~ `thinking` ~ `vomit`')
    .setColor('BLUE')
    .setFooter(`${client.user.username} v1.2.1`);

    let embedSuggestions = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(language("HELP_ALL_CATEGORIES_EMBED_DESCRIPTION").replace(/{{prefix}}/g, prefix))
    .addField(language("HELP_CATEGORIE_SUGGESTIONS_EMEBD_FIELD"), '`approve` ~ `deny` ~ `possible` ~ `suggest` ~ `suggestions-config`')
    .setColor('BLUE')
    .setFooter(`${client.user.username} v1.2.1`);

    let embedUtil = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(language("HELP_ALL_CATEGORIES_EMBED_DESCRIPTION").replace(/{{prefix}}/g, prefix))
    .addField(language("HELP_CATEGORIE_UTIL_EMEBD_FIELD"), '`botinfo` ~ `avatar` ~ `botsuggest` ~ `help` ~ `invite` ~ `ping` ~ `prefix` ~ `profile` ~ `roleinfo` ~ `roles` ~ `userinfo` ~ `bitcoin` ~ `channelinfo` ~ `serverinfo`')
    .setColor('BLUE')
    .setFooter(`${client.user.username} v1.2.1`);

    //Commands
    /* Categoría Action*/
    if(categoria == 'angry') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_ANGRY_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}angry [member]\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}angry \n${prefix}angry @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    
    if(categoria == 'baka') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_BAKA_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}baka\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}baka \n${prefix}baka @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'bite') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_BITE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}bite\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}bite \n${prefix}bite @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'cheeks') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_CHEEKS_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}cheeks\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}cheeks \n${prefix}cheeks @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'claps') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_CLAPS_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}claps\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}claps \n${prefix}claps @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'cook') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_COOK_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}cook\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}cook \n${prefix}cook @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'cuddle') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_CUDDLE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}cuddle <member>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}cuddle @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'feed') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_FEED_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}feed <member>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}feed @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'gaming') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_GAMING_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}gaming [member]\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}gaming \n${prefix}gaming @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'glare') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_GLARE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}glare [member]\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}glare \n${prefix}glare @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'handholding') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_HANDHOLDING_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}handholding [member]\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}gaming \n${prefix}gaming @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'heal') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_HEAL_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}heal [member]\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}heal \n${prefix}heal @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'highfive') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_HIGHFIVE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}highgive [member]\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}highfive \n${prefix}highfive @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'hug') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_HUG_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}hug <member>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}hug @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'kickbutt') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_KICKBUTT_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}kickbutt <member>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}kickbutt @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'kill') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_KILL_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}kill <member>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}kill @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'kiss') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_KISS_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}kiss <member>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}kiss @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'laugh') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_LAUGH_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}laugh [member]\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}laugh \n${prefix}laugh @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'lick') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_LICK_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}lick <member>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}lick \n${prefix}lick @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'pat') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_PAT_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}pat <member>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}pat @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'poke') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_POKE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}poke <member>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}poke @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'scared') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_SCARED_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}scared [member]\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}scared \n${prefix}scared @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'shoot') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_SHOOT_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}shoot [member]\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}shoot \n${prefix}shoot @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'slap') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_SLAP_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}slap <member>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}slap @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'spank') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_SPANK_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}spank [member]\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}spank \n${prefix}spank @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'splash') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_SPLASH_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}splash [member]\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}splash \n${prefix}splash @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'spray') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_SPRAY_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}spray <member>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}spray @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'stare') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_STARE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}stare [member]\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}stare \n${prefix}stare @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'tickle') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_TICKLE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}tickle [member]\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}tickle \n${prefix}tickle @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'tsundere') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ACTION_COMMAND_SPRAY_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}spray <member>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}spray @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }

    /* Categoría Administration*/
    if(categoria == 'autorole') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ADMINISTRATION_COMMAND_AUTOROLE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}autorole on <role> \n${prefix}autorole off\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}autorole on @Developers \n${prefix}autorole off\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'createrole') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ADMINISTRATION_COMMAND_CREATEROLE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_ADMINISTRATION_COMMAND_CREATEROLE_EMBED_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}createrole Developers \n${prefix}createrole Developers #FF2D00 Something random\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'deleterole') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ADMINISTRATION_COMMAND_DELETEROLE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}deleterole <role>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}deleterole @Developers \n${prefix}deleterole Developers\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'goodbyemsg') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ADMINISTRATION_COMMAND_GOODBYECHANNEL_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}goodbyechannel <channel>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}goodbyechannel #leave \n${prefix}goodbyechannel leave\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'goodbyemsg') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ADMINISTRATION_COMMAND_DELETEROLE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}deleterole <role>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}deleterole @Developers \n${prefix}deleterole Developers\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'levelup' || categoria == 'levelup-config') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), `levelup`)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ADMINISTRATION_COMMAND_LEVELUP_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_ADMINISTRATION_COMMAND_LEVELUP_EMBED_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}levelup-config message Welcome\n${prefix}levelup-config message preview\n${prefix}levelup-config channel #levelUp\n${prefix}levelup-config enable\n${prefix}levelup-config disable\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `3 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'muterole') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ADMINISTRATION_COMMAND_MUTEROLE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}muterole <role>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}muterole @member \n${prefix}muterole member\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'serverconfig') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ADMINISTRATION_COMMAND_SERVERCONFIG_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}serverconfig\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}serverconfig\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'setlang') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ADMINISTRATION_COMMAND_SETLANG_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}setlang <language>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}setlang english \n${prefix}setlang french \n${prefix}setlang spanish \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'setprefix') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ADMINISTRATION_COMMAND_SETPREFIX_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}muterole <role>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}muterole @member \n${prefix}muterole member\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'welcomechannel') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ADMINISTRATION_COMMAND_WELCOMECHANNEL_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}muterole <role>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}muterole @member \n${prefix}muterole member\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'welcomemsg') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ADMINISTRATION_COMMAND_WELCOMEMSG_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}muterole <role>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}muterole @member \n${prefix}muterole member\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    /* Categoría anime*/
    if(categoria == 'awoo') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), 'Awoo.')
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}awoo\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'crimson') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ANIME_COMMAND_CRIMSON_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}crimson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'fbi') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ANIME_COMMAND_FBI_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}fbi\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'jpose') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ADMINISTRATION_COMMAND_MUTEROLE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}jpose\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'kemo') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ANIME_COMMAND_KEMO_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}kemo\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'nani') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ANIME_COMMAND_NANI_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}nani\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'neko') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ANIME_COMMAND_NEKO_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}neko\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'nekogif') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ADMINISTRATION_COMMAND_MUTEROLE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}muterole <role>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}muterole @member \n${prefix}muterole member\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'poi') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ANIME_COMMAND_POI_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}poi\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'rem') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ANIME_COMMAND_REM_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}rem\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'rero') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), 'Rero rero.')
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}rero\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'trap') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ANIME_COMMAND_TRAP_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}trap\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'zawarudo') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ANIME_COMMAND_ZAWARUDO_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}zawarudo\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    /* Categoría economy*/
    if(categoria == 'addmoney') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ECONOMY_COMMAND_ADDMONEY_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_ECONOMY_COMMAND_ADDMONEY_EMBED_FIELD_VALUE_USAGE").replace(/{{prefx}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}addmoney @Aiberson 100\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'balance' || categoria == 'bal') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), `bal`)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ECONOMY_COMMAND_BALANCE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}balance [member]\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}balance \n${prefix}balance @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));

      message.channel.send(embed)
    }
    if(categoria == 'beg') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ECONOMY_COMMAND_BEG_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}beg\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));

      message.channel.send(embed)
    }
    if(categoria == 'crime') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ECONOMY_COMMAND_CRIME_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}crime\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));

      message.channel.send(embed)
    }
    if(categoria == 'daily') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ECONOMY_COMMAND_DAILY_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}daily\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));

      message.channel.send(embed)
    }
    if(categoria == 'deposit') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ECONOMY_COMMAND_DEPOSIT_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_ECONOMY_COMMAND_DEPOSIT_EMBED_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}deposit 100\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `3 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));

      message.channel.send(embed)
    }
    if(categoria == 'fish') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ECONOMY_COMMAND_FISH_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}fish\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `3 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));

      message.channel.send(embed)
    }
    if(categoria == 'leaderboard') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), `lb, top`)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ECONOMY_COMMAND_LEADERBOARD_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}leaderboard\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `3 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));

      message.channel.send(embed)
    }
    if(categoria == 'removemoney') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ECONOMY_COMMAND_REMOVEMONEY_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_ECONOMY_COMMAND_REMOVEMONEY_EMBED_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}removemoney @Aiberson 100\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));

      message.channel.send(embed)
    }
    if(categoria == 'roulette') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ECONOMY_COMMAND_ROULETTE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_ECONOMY_COMMAND_ROULETTE_EMBED_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}roulette red 250\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));

      message.channel.send(embed)
    }
    if(categoria == 'slots') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ECONOMY_COMMAND_SLOTS_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_ECONOMY_COMMAND_SLOTS_EMBED_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}slots 10\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));

      message.channel.send(embed)
    }
    if(categoria == 'weekly') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ECONOMY_COMMAND_WEEKLY_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}weekly\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));

      message.channel.send(embed)
    }
    if(categoria == 'withdraw') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ECONOMY_COMMAND_WITHDRAW_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_ECONOMY_COMMAND_WITHDRAW_EMBED_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}withdraw 120\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `4 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));

      message.channel.send(embed)
    }
    if(categoria == 'work') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_ECONOMY_COMMAND_WORK_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}work\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `4 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));

      message.channel.send(embed)
    }
    /* Categoría fun*/
    if(categoria == '8ball') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_FUN_COMMAND_EIGHBALL_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_FUN_COMMAND_EIGHBALL_EMBED_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}8ball Am I a good developer?\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'pupper') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_FUN_COMMAND_PUPPER_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}pupper\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'roll') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_FUN_COMMAND_ROLL_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}roll\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'say') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_FUN_COMMAND_SAY_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_FUN_COMMAND_SAY_EMBED_FIELD_VALUE_USAGE"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}say Saek = The best Bot.\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    /* Categoría giveaways*/
    if(categoria == 'create') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_GIVEAWAYS_COMMAND_CREATE_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}create\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'start') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_GIVEAWAYS_COMMAND_CREATE_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_GIVEAWAYS_COMMAND_START_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}start 10m 5 Saek vPremium\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'end') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_GIVEAWAYS_COMMAND_END_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}end <ID>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'reroll') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_GIVEAWAYS_COMMAND_REROLL_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}reroll <ID>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    /* Categoría levels */
    if(categoria == 'background' || categoria == 'back') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), '`back')
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_LEVELS_COMMAND_BACKGROUND_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_LEVELS_COMMAND_BACKGROUND_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}background \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));

      message.channel.send(embed)
    }
    if(categoria == 'rank') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), '`level`')
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_LEVELS_COMMAND_RANK_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}rank <member>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}rank \n${prefix}rank @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'ranklist') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_LEVELS_COMMAND_RANK_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}ranklist\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    /* Categoría logger */
    if(categoria == 'setlogs') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_LOGGER_COMMAND_SETLOGS_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_LOGGER_COMMAND_SETLOGS_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    /* Categoría marriage */
    if(categoria == 'marry') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MARRIAGE_COMMAND_MARRY_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}marry <member>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}marry @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `10 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'divorce') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MARRIAGE_COMMAND_DIVORCE_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}divorce\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `10 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    /* Categoría music */
    if(categoria == 'bassboost' || categoria == 'bb') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), `bb`)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MUSIC_COMMAND_BASSBOOST_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}bassboost \n${prefix}bb\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'clear-queue' || categoria == 'cq') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), `cq`)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MUSIC_COMMAND_CLEARQUEUE_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}clear-queue \n${prefix}cq\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'loop') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), `repeat`)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MUSIC_COMMAND_LOOP_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}loop \n${prefix}repeat\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'now-playing' || categoria == 'np') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), `np`)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MUSIC_COMMAND_NOWPLAYING_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}now-playing \n${prefix}np\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'pause') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MUSIC_COMMAND_PAUSE_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}pause \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'play') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MUSIC_COMMAND_PLAY_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}play <link or music>\n\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}play https://www.youtube.com/watch?v=LNUjVxQmLWQ \n${prefix}play Beau Young Prince - Let Go\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'queue') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MUSIC_COMMAND_QUEUE_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}queue \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'resume') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MUSIC_COMMAND_RESUME_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}resume \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'shuffle') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MUSIC_COMMAND_SHUFFLE_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}shuffle \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'skip') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MUSIC_COMMAND_SKIP_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}skip \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'stop') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MUSIC_COMMAND_STOP_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}stop \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'volume') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MUSIC_COMMAND_VOLUME_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_MUSIC_COMMAND_VOLUME_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}volume 150 \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    /* Categoría moderation */
    if(categoria == 'addrole' || categoria == 'assign') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), `assign`)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MODERATION_COMMAND_ADDROLE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}addrole <member> <role>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}addrole @Aiberson @Developers \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'ban') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MODERATION_COMMAND_BAN_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}ban <member>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}ban @Aiberson \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'clear') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MODERATION_COMMAND_CLEAR_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_MODERATION_COMMAND_CLEAR_EMBED_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}clear 50 \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'kick') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MODERATION_COMMAND_KICK_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}kick <member>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}kick @Aiberson \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `8 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'lock') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MODERATION_COMMAND_LOCK_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_MODERATION_COMMAND_LOCK_EMBED_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}lock \n${prefix}lock #general\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'mute') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MODERATION_COMMAND_MUTE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_MODERATION_COMMAND_MUTE_EMBED_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}mute @Aiberson I'm getting bored\n${prefix}mute 717803526679560233 I'm getting bored\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'removerole' || categoria == 'unassign') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), `unassign`)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MODERATION_COMMAND_REMOVEROLE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}removerole <member> <role>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}removerole @Aiberson @Developers \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'tempmute') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MODERATION_COMMAND_TEMPMUTE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_MODERATION_COMMAND_TEMPMUTE_EMBED_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}tempmute @Aiberson 1h I'm getting bored \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'unban') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MODERATION_COMMAND_UNBAN_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}unban <ID>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}unban 717803526679560233\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }   
    if(categoria == 'unlock') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MODERATION_COMMAND_UNLOCK_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_MODERATION_COMMAND_UNLOCK_EMBED_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}unlock \n${prefix}unlock #general\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    } 
    if(categoria == 'unmute') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_MODERATION_COMMAND_UNMUTE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_MODERATION_COMMAND_MUTE_EMBED_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}unmute @Aiberson I'm getting bored \n${prefix}unmute 717803526679560233 I'm getting bored\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }

    /* Categoría reaction */
    if(categoria == 'banghead') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_REACTION_COMMAND_BANGHEAD_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}banghead \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));a
    }
    if(categoria == 'boom') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_REACTION_COMMAND_BOOM_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}boom \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
    }
    if(categoria == 'cry') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_REACTION_COMMAND_CRY_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
    }
    if(categoria == 'dab') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_REACTION_COMMAND_DAB_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}dab \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
    }
    if(categoria == 'dance') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_REACTION_COMMAND_DANCE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}dance \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
    }
    if(categoria == 'deredere') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_REACTION_COMMAND_DEREDERE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}deredere \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
    }
    if(categoria == 'disgust') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_REACTION_COMMAND_DISGUST_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}disgust \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
    }
    if(categoria == 'drunk') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_REACTION_COMMAND_DRUNK_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}drunk \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
    }
    if(categoria == 'facepalm') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_REACTION_COMMAND_FACEPALM_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}dacepalm \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
    }
    if(categoria == 'fail') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_REACTION_COMMAND_FAIL_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}fail \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
    }
    if(categoria == 'happy') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_REACTION_COMMAND_HAPPY_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}happy \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
    }
    if(categoria == 'like') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_REACTION_COMMAND_LIKE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}like \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
    }
    if(categoria == 'nop') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_REACTION_COMMAND_NOP_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}nop \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
    }
    if(categoria == 'peek') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_REACTION_COMMAND_PEEK_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}peek \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
    }
    if(categoria == 'psycho') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_REACTION_COMMAND_PSYCHO_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}psycho \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
    }
    if(categoria == 'sad') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_REACTION_COMMAND_SAD_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}sad \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
    }
    if(categoria == 'scream') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_REACTION_COMMAND_SCREAM_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}scream \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
    }
    if(categoria == 'shrug') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_REACTION_COMMAND_SHRUG_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}shrug \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
    }
    if(categoria == 'sing') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_REACTION_COMMAND_SING_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}sing \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
    }
    if(categoria == 'sip') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_REACTION_COMMAND_SIP_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}sip \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
    }
    if(categoria == 'sleep') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_REACTION_COMMAND_SLEEP_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}sleep \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
    }
    if(categoria == 'smug') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_REACTION_COMMAND_SMUG_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}smug \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
    }
    if(categoria == 'thinking') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_REACTION_COMMAND_THINKING_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}thinking \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
    }
    if(categoria == 'vomit') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_REACTION_COMMAND_VOMIT_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}vomit \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `2 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
    }

    /* Categoría suggestions */
    if(categoria == 'approve') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), `aprobar`)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_SUGGESTIONS_COMMAND_APPROVE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_SUGGESTIONS_COMMAND_APPROVE_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'deny') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), `denegar`)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_SUGGESTIONS_COMMAND_DENY_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_SUGGESTIONS_COMMAND_DENY_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'possible') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), `posible`)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_SUGGESTIONS_COMMAND_POSSIBLE_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_SUGGESTIONS_COMMAND_POSSIBLE_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'suggest') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), `suggestion`)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_SUGGESTIONS_COMMAND_SUGGEST_EMBED_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_SUGGESTIONS_COMMAND_SUGGEST_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}suggest  They should change the server icon.\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'suggestions-config') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), `sf`)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_SUGGESTIONS_COMMAND_SUGGESTIONS_CONFIG_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_SUGGESTIONS_COMMAND_SUGGESTIONS_CONFIG_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}suggestions-config role @Support \``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `5 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    /* Categoría util */
    if(categoria == 'avatar') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_UTIL_COMMAND_AVATAR_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}avatar [user]\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}avatar \n${prefix}avatar @Aiberson \n${prefix}avatar 717803526679560233\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `3 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'bitcoin') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_UTIL_COMMAND_BITCOIN_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}bitcoin\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `3 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'botinfo') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), `info`)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_UTIL_COMMAND_BOTINFO_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}botinfo\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}botinfo \n${prefix}info\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `3 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'botsuggest') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_UTIL_COMMAND_BOTSUGGEST_FIELD_VALUE_USAGE"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_UTIL_COMMAND_BOTSUGGEST_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}botsuggest Add more commands\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `3 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'channelinfo') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), `cinfo`)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_UTIL_COMMAND_CHANNELINFO_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}channelinfo <channel>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `3 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'help') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_UTIL_COMMAND_HELP_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), language("HELP_CATEGORIE_UTIL_COMMAND_HELP_FIELD_VALUE_USAGE").replace(/{{prefix}}/g, prefix))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}help \n${prefix}help economy \n${prefix}help work\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `3 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'hex') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), `hexadecimal`)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_UTIL_COMMAND_HEX_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}hex <color>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}hex 0A49FD\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `3 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'invite') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_UTIL_COMMAND_INVITE_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}invite\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `3 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'ping') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_UTIL_COMMAND_PING_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}ping\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `3 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'prefix') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_UTIL_COMMAND_PREFIX_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}prefix\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `3 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'roleinfo') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), `rinfo`)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_UTIL_COMMAND_ROLEINFO_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}roleinfo <role>\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}roleinfo @Developers \n${prefix}roleinfo Developers\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `3 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'roles') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_UTIL_COMMAND_ROLES_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}roles\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `3 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'serverinfo') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_UTIL_COMMAND_SERVERINFO_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}serverinfo\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `3 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }
    if(categoria == 'userinfo') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(language("HELP_ALL_COMMANDS_EMBED_AUTHOR").replace(/{{command}}/g, categoria), client.user.displayAvatarURL())
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_NAME"), categoria)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_ALIASES"), language("HELP_COMMANDS_DOES_NOT_HAVE_ALIAS"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_DESCRIPTION"), language("HELP_CATEGORIE_UTIL_COMMAND_USERINFO_FIELD_VALUE_DESCRIPTION"))
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_USAGE"), `\`${prefix}userinfo [user]\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_EXAMPLES"), `\`${prefix}userinfo \n${prefix}userinfo @Aiberson\``)
      .addField(language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN"), `3 ${language("HELP_ALL_COMMANDS_EMBED_FIELD_COOLDOWN_VALUE_COMPLEMENT")}`)
      .setColor('BLUE')
      .setFooter(language("HELP_ALL_COMMANDS_EMBED_FOOTER"));
      
      message.channel.send(embed)
    }

    
    //Categories

    if(categoria == 'action') {
      return message.channel.send(embedAction);
    }
    if(categoria == 'administration') {
      return message.channel.send(embedAdministration);
    }
	if(categoria == 'anime') {
		return message.channel.send(embedAnime)
	}
	if(categoria == 'economy') {
		return message.channel.send(embedEconomy)
	}
	if(categoria == 'fun') {
		return message.channel.send(embedFun)
	}
	if(categoria == 'giveaways') {
		return message.channel.send(embedGiveaways)
	}
	if(categoria == 'levels') {
		return message.channel.send(embedLevel)
	}
	if(categoria == 'logger') {
		return message.channel.send(embedLogger)
	}
	if(categoria == 'marriage') {
		return message.channel.send(embedMarriage)
	}
	if(categoria == 'moderation') {
		return message.channel.send(embedModeration)
	}
	if(categoria == 'music') {
		return message.channel.send(embedMusic)
	}
	if(categoria == 'reaction') {
		return message.channel.send(embedReaction)
	}
	if(categoria == 'suggestions') {
		return message.channel.send(embedSuggestions)
	}
	if(categoria == 'util' || categoria == 'utility') {
		return message.channel.send(embedUtil)
	}
  
    if(!categoria) {
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setDescription(language("HELP_NO_SPECIFICATION_OF_A_CATEGORY_EMBED_DESCRIPTION").replace(/{{client}}/g, client.user.username).replace(/{{CommandsQuantity}}/g, client.commands.size))
      .addField(language("HELP_NO_SPECIFICATION_OF_A_CATEGORY_EMBED_FIELD_CATEGORIES"), 
      `\`${prefix}help action\`\n\`${prefix}help administration\`\n\`${prefix}help anime\`\n\`${prefix}help economy\`\n\`${prefix}help fun\`\n\`${prefix}help giveaways\`\n\`${prefix}help levels\`\n\`${prefix}help logger\`\n\`${prefix}help marriage\`\n\`${prefix}help moderation\`\n\`${prefix}help music\`\n\`${prefix}help reaction\`\n\`${prefix}help suggestions\`\n\`${prefix}help util\``)
      .setColor('BLUE')
      .setFooter(`${client.user.username} v1.2.1`)
      
      message.channel.send(embed)
    }
  }
}