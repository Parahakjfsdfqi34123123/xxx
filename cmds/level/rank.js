const db = require("quick.db")
const Discord = require("discord.js")
let guildLanguages = require("../../Data/guilds-language.json");

module.exports = {
  config: {
    nombre: "rank",
    alias: ["level"],
    descripcion: "",
    uso: "",
    cooldown: 2
  },
  run: async(client, message, args) => {
      const guildLanguage = guildLanguages[message.guild.id] || "spanish";
    const language = require(`../../languages/${guildLanguage}`);

    let SystemLevels = db.get(`LevelSystem_${message.guild.id}`);

    if(SystemLevels == false) {
      return message.channel.send(language("LEVEL_CATEGORY_DISABLE"))
    }
    
    
    let usuario = message.mentions.users.first() || message.author;
    if(usuario == usuario.bot) {
        return message.channel.send(language("RANK_MEMBER_IS_A_BOT"))
    }
    // Data
    let level = await db.get(`level_${message.guild.id}_${usuario.id}`);
    if(!level) {
      level = 0;
    }
    let exp = await db.fetch(`xp_${message.guild.id}_${usuario.id}`);
    if(!exp) {
      exp = 0;
    }
    let neededXP = 5 * (level ** 3) + 50 * level + 100;
    
    // Rank Number
    let every = await db.all()
    every = every.filter(i => i.ID.startsWith(`xp_${message.guild.id}_`)).sort((a, b) => b.data - a.data);
    let ranking = every.map(x => x.ID).indexOf(`xp_${message.guild.id}_${usuario.id}`) + 1;
    
    const rankEmbed = new Discord.MessageEmbed()
    .setAuthor(language("RANK_EMBED_AUTHOR").replace(/{{user}}/g, usuario.tag), usuario.displayAvatarURL())
    .addField(language("RANK_EMBED_FIELD_RANKING"), ranking, true)
    .addField(language("RANK_EMBED_FIELD_LEVEL"), level, true)
    .addField(`XP`, `${(exp).toString()}/${neededXP}`, true)
    .setColor('RANDOM')
    .setThumbnail(message.guild.iconURL())
    message.channel.send(rankEmbed);
    
    /*const Canvas = require('canvas');
    const x1= 42, y1=62, radius1 = 80, height1= 934, width1 = 282
    const canvas = Canvas.createCanvas(height1, width1)
    const ctx = canvas.getContext('2d')
    let estado = {online :'#44b37f',idle: '#faa51b',offline: '#747f8d',dnd: '#f04848'}
    let background = db.get(`background_${usuario.id}`)
    if(background) {
      let back = await Canvas.loadImage(background)
      ctx.drawImage(back, 0, 0, canvas.width, canvas.height)
      ctx.globalAlpha = "0.7";
      ctx.fillStyle = "#7A7878"
      
    } else {
      ctx.fillStyle = "#23272a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#090a0b';
    }
    ctx.fillRect(20, 30, 890, 215)
    ctx.stroke()
    
    //Nombre
    ctx.font = '40px Verdana'
    ctx.fillStyle = '#ffffff'
    ctx.fillText(usuario.username, 274, 165, 500)
    
    //Discriminador
    let largo = ctx.measureText(usuario.username).width
    ctx.font = '24px Verdana'
    ctx.fillStyle = '#7f8384'
    ctx.fillText("#" + usuario.discriminator, 274 + largo + 14, 165, 200)
    
    //Exp necesaria
    ctx.font = '22px Verdana'
    ctx.fillStyle = '#7f8384'
    ctx.textAlign = "right"
    ctx.fillText(`/ ${neededXP} XP`, 884, 165, 500)
    
    largo= ctx.measureText(`/ ${neededXP} XP`).width
    ctx.fillStyle = '#ffffff'
    ctx.fillText(exp, 884-largo-8, 165, 200)
    
    //Level
    ctx.font = '60px Verdana'
    ctx.strokeStyle = '#000000'
    ctx.fillStyle = 'AQUA'
    ctx.lineWidth=1
    largo = ctx.measureText(level).width
    ctx.strokeText(level, 884, 100, 400)
    ctx.fillText(level, 884, 100, 400)
    
    ctx.font = '22px Verdana'
	  ctx.strokeText('LEVEL', 884-largo-5, 100, 400)
	  ctx.fillText('LEVEL', 884-largo-5, 100, 400)
	  largo += ctx.measureText('LEVEL').width
    
    //rank
    ctx.font = '60px Verdana'
    ctx.strokeStyle = '#000000'
    ctx.fillStyle = '#ffffff'
    ctx.lineWidth=1
    ctx.strokeText("#"+ranking, 884-largo-15, 100, 400)
    ctx.fillText("#"+ranking, 884-largo-15, 100, 400)
    largo += ctx.measureText("#"+ranking).width
    
    ctx.font = '22px Verdana'
    ctx.strokeText('RANK', 884-largo-15, 100, 400)
    ctx.fillText('RANK', 884-largo-15, 100, 400)
    
    roundRect(ctx, 257, 183, 634, 38, 23,true,'#484b4e', false,'#bababa')
    roundRect(ctx, 257, 183, Math.floor((exp)*590/neededXP)+40, 38, 23,true, 'AQUA', false)
    roundRect(ctx, 257, 183, 634, 38, 23,false,'#bababa', true,'#000000')
    
    ctx.beginPath()
    ctx.arc(x1+radius1,y1+radius1, radius1+3, 0, Math.PI * 2, true)
    ctx.fillStyle= '#000000'
    ctx.fill()
    ctx.lineWidth=1
    ctx.stroke()
    ctx.closePath()
    
    ctx.save()
    ctx.beginPath()
    ctx.arc(x1+radius1, y1+radius1, radius1, 0, Math.PI*2, true)
    ctx.closePath()
    ctx.clip()
    
    const foto = usuario.displayAvatarURL({ format: 'png', dynamic: false, size: 1024})
    const avatar = await Canvas.loadImage(foto)
    ctx.drawImage(avatar, x1, y1, radius1*2, radius1*2)
    ctx.restore()
    
    //Estado
     ctx.beginPath()
    ctx.arc(185, 195, 22, 0, Math.PI*2, true)
    ctx.closePath()
    ctx.fillStyle= estado[usuario.presence.status]
    ctx.fill()
    ctx.lineWidth=4
    ctx.stroke()
    
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'rank.png')
    return message.channel.send(attachment)*/
  }
}

function roundRect(ctx, x, y, width, height, radius, fill, colorfill, stroke, colorstroke) {
  if (typeof stroke == 'undefined') stroke = true
  if (typeof radius === 'undefined') radius = 5
  if (typeof radius === 'number') {
    radius = {tl: radius, tr: radius, br: radius, bl: radius}
  } else {
    var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0}
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side]
    }
  }
  ctx.beginPath()
  ctx.moveTo(x + radius.tl, y)
  ctx.lineTo(x + width - radius.tr, y)
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr)
  ctx.lineTo(x + width, y + height - radius.br)
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height)
  ctx.lineTo(x + radius.bl, y + height)
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl)
  ctx.lineTo(x, y + radius.tl)
  ctx.quadraticCurveTo(x, y, x + radius.tl, y)
  ctx.closePath()
  if (fill) {
    ctx.fillStyle = colorfill
    ctx.fill()
  }
  if (stroke) {
    ctx.strokeStyle  = colorstroke
    ctx.lineWidth = 2
    ctx.stroke()
  }
}