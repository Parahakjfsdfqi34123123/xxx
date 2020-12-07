const fs = require("fs");
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = {
    config: {
        nombre: "setlang",
        alias: ["sl", "langset"],
        cooldown: 5
    },
    run: async (client, message, args) => {
        const guildLanguage = guildLanguages[message.guild.id] || "spanish";
        const language = require(`../../languages/${guildLanguage}`);

        if(!message.member.hasPermission("MANAGE_GUILD")) {
          return message.channel.send(language("LANGUAGE_MEMBER_NO_PERMISSIONS"))
        }

        let languages = ["english", "spanish", "french"];
    let newLanguageName = message.content.split(" ")[1];
    
    if(newLanguageName == "anglais" || newLanguageName == "ingles" || newLanguageName == "en") {
      newLanguageName = "english";
    }
    
    if(newLanguageName == "español" || newLanguageName == "espagnol" || newLanguageName == "es") {
      newLanguageName = "spanish";
    }
 if(newLanguageName == "français" || newLanguageName == "frances" || newLanguageName == "fr") {
      newLanguageName = "french";
    }

       

        if(!newLanguageName){
            return message.channel.send(language("MISSING_LANGUAGE"));
        }
        if(!languages.includes(newLanguageName)) {
            return message.channel.send(language("LANGUAGE_NO_EXIST"));
        }

        guildLanguages[message.guild.id] = newLanguageName;
        fs.writeFileSync("./Data/guilds-language.json", JSON.stringify(guildLanguages), "utf-8");

        const newLanguage = require(`../../languages/${newLanguageName}`);

        message.channel.send(newLanguage("LANGUAGE_UPDATE"))
    }
}