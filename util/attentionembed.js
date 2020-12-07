const { Client, Collection, MessageEmbed } = require("discord.js");
const {
  approveemoji,
  denyemoji,
  AVATARURL,
  BOTNAME,
  BOTCOLOR,
} = require(`../config/emotes_play.json`);
module.exports = {
 async  attentionembed(message, titel) {

    try{
      await message.reactions.removeAll();
       await message.react(denyemoji);
      }catch{
        }

    let resultsEmbed = new MessageEmbed()
      .setDescription("<:ncheck_2:780107615505088514> ~ " + titel)
      .setColor("#ff0e7a")
      
      message.channel.send(resultsEmbed);
    return;

  }
};
