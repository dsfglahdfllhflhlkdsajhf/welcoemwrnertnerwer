const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const fkkRecently = new Set();
var Canvas = require('canvas')
const dateFormat = require('dateformat');


const moment = require('moment');
       

var jimp = require('jimp')


const invites = {};

client.on('ready', () => {
   console.log(`----------------`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`Alpha Codes.`, {type: "PLAYING"});
});



const adminprefix = "w";
const devs = ['426295568688611328', '431150885549113344'];
 

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'ply')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else 
  if (message.content === (adminprefix + "Percie")) {
  message.guild.leave();        
} else  
if (message.content.startsWith(adminprefix + 'wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else 
if (message.content.startsWith(adminprefix + 'ls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else     
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : Done :>`)
return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
}
  if(message.content === adminprefix + "restart") {
    if (!devs.includes(message.author.id)) return;
        message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
      console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
      console.log(`⚠️ Bot restarting... ⚠️`);
      console.log("===============================================\n\n");
      client.destroy();
      child_process.fork(__dirname + "/bot.js");
      console.log(`Bot Successfully Restarted`);
  }

});



client.on('guildMemberAdd', (member,inviter )=> {
     const welcomer =  member.guild.channels.find('name', 'chat');
    if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});          
         
    
var Canvas = require('canvas')
var jimp = require('jimp')

const w = ['w1.png'];

         let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
             const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);
             client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
                    });
                       member.guild.fetchInvites().then(guildInvites => {
                      const ei = invites[member.guild.id]; //دغوات
                      const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses); //
                      const inviter = client.users.get(invite.inviter.id);//



               
               let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
             
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                        
                       
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`by : ${inviter.username} `, 315, 170);
                        
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 200, 150);
                        
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`welcome to ${member.guild.name}`, 300, 130);
                        //zebi
                const Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 128, 126);  
                          
                           
                
                             
welcomer.sendFile(canvas.toBuffer())
  console.log('1')
  console.log('2')
 console.log('3')
     welcomer.send(`**joined by :** <@${inviter.id}> `);
    





      
      
                    }  )  
      
                    

})
      });                    
 })

}

});
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);
  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
  
  });
});


client.login(process.env.BOT_TOKEN);
