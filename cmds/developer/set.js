const db = require("quick.db");
const Discord = require("discord.js");

module.exports = {
    config: {
        nombre: "algo",
        alias: []
    },
    run: async (client, message, args) => {
      let embed = new Discord.MessageEmbed()
        .setColor("#00ffff")
      .setThumbnail("https://media.tenor.com/images/23bffdc50b8581a63560da3ba927bc3b/tenor.gif")
      .addField("<a:tik:772208805953142794> **Rewards** <a:tik:772208805953142794>", " <a:fire_blue:785245681082040331> **2 invites** = ***Hulu*** \n\<a:fire_blue:785245681082040331> **3 invites** = ***Disney plus +*** \n\ <a:fire_blue:785245681082040331> **5 invites** = ***NordVpn*** \n\  <a:fire_blue:785245681082040331> **7 invites** = ***Encryptme***  \n\  <a:fire_blue:785245681082040331> **10 invites** = ***ESET(antivirus)*** \n\  <a:fire_blue:785245681082040331> **15 invites** = ***Spotify premium*** \n\  <a:fire_blue:785245681082040331> **20 invites** = ***Crunchyroll premium***")
      .setImage("https://i.ibb.co/xgmshXL/image.png")

      message.channel.send(embed)
    }
}