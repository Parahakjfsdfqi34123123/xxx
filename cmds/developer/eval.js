const Discord = require("discord.js")

module.exports = {
  config: {
    nombre: "eval",
    alias: ["e"],
    descripcion: "",
    uso: "",
    cooldown: 0
  },
  run: async (client, message, args) => {
  let devID = '772104444720054293';
  if(![devID].includes(message.author.id)) return;
  
  let limit = 1950;
  try {
    var code = args.join(' ');
    let evalued = eval(code);
    if (typeof evalued !== "string")
      evalued = require("util").inspect(evalued, { depth: 0 })
    let txt = "" + evalued;
    if (txt.length > limit) {
      const embed = new Discord.MessageEmbed()
      .setAuthor("Evaluation done", client.user.avatarURL())
      .addField("Input", `\`\`\`js\n${code}\n\`\`\``)
      .addField("Output", `\`\`\`js\n ${txt.slice(0, limit)}\n\`\`\``)
      .setColor('#122881')
    } else
        var embed = new Discord.MessageEmbed()
        .setAuthor("Evaluation done", client.user.displayAvatarURL())
        .addField("Input", `\`\`\`js\n${code}\n\`\`\``)
        .addField("Output", `\`\`\`js\n ${txt}\n\`\`\``)
        .setColor("#122881")
        message.channel.send(embed);
    } catch (err) {
      const embed = new Discord.MessageEmbed()
      .setAuthor("Evaluation failed", client.user.displayAvatarURL())
      .addField("Input", `\`\`\`js\n${code}\n\`\`\``)
      .addField("Output", `\`\`\`js\n${err}\n\`\`\``)
      .setColor("#C23636")
      message.channel.send(embed);
    }
  }
}