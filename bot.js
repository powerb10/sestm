const Discord = require("discord.js");
const RichEmbed = require("discord.js");
const { Client, Util } = require('discord.js');
const client = new Discord.Client();
const prefix = "#";
const config = require("./config.json")

const devs = ["399353508429824000"]

const adminprefix = "#";
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
//╭━━━╮╱╭╮
//┃╭━╮┃╱┃┃
//┃┃╱┃┣━╯┣╮╭┳┳━╮
//┃╰━╯┃╭╮┃╰╯┣┫╭╮╮
//┃╭━╮┃╰╯┃┃┃┃┃┃┃┃
//╰╯╱╰┻━━┻┻┻┻┻╯╰╯


client.on('message' , message => {
    var prefix = "#";
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**Unban** !')
        .addField('**User Unban :** ', `${user}` , true)
        .addField('**By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
       .setFooter('Requested by '+message.author.username, message.author.avatarURL)
        message.channel.sendEmbed(embed)
    }
  });
  

  
  

client.on('message', message => {
  var prefix = "#";
  const guild = message.guild;

  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} Banned From The Server By : <@${message.author.id}> ! :airplane: **  `)
  
guild.owner.send(`سيرفر : ${guild.name}
**تم تبنيد** :${user.tag}  
**بواسطة** : <@${message.author.id}>`)

}
});

client.on('message', message => {
  var prefix = "#";
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "kick") {
   if(!message.channel.guild) return message.reply('** This command only for servers :x:**');
   const guild = message.guild;
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  var user = message.mentions.users.first();
  var reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**__Mention__ A Member To Kick !**");
  if (!message.guild.member(user).kickable) return message.reply("**Can't Kick A Higher Role Than Me !**");
  message.channel.send(`**:white_check_mark: ${user.tag} Kicked Form The Server By : <@${message.author.id}> ! :airplane:** `)
  guild.owner.send(`سيرفر : ${guild.name}
**تم طرد** :${user.tag}  
**بواسطة** : <@${message.author.id}>`).then(()=>{
message.guild.member(user).kick();
  })
}
});
  
  
     client.on("message", async message => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) {
    if(/(?:https?:\/)?discord(?:app.com\/invite|.gg)/gi.test(message.content)) {
        message.delete();
        let inviteEmbed = new Discord.RichEmbed()
  
        .setDescription("__**Auto Suppression**__")
        .addField("> Envoyé par :", `<@${message.author.id}> avec l'ID ${message.author.id}`)
        .addField("> Suppression dans :", message.channel)
        .addField(`> Raison :`, `Envoie une invitation discord : ${message.content}`)
        .setColor(violet);
  
        let incidentchannel = message.guild.channels.find(`name`, "log");
        if(!incidentchannel) return message.channel.send(":no_entry: Je n'est pas trouvé le channel 'logs' !");
        return incidentchannel.send(inviteEmbed);
    }
  }
  });
  

  
 
  client.on('message', message =>{
    var prefix = "#";
      if(message.author.bot) return;
      if(!message.content == (prefix+'clear'))
  if(!true) return;
      if(message.content.split(' ')[0] == (prefix+'clear')){
      var lmt = message.content.split(' ')[1]
      ,  hang = 0
      ,  max  = 0;
      
      if(!lmt) lmt = 200;
      if(typeof lmt !== 'number') return;
      if(lmt > 100){
          for(;lmt > 100;){
          lmt--;
          hang++;
          }
          }
       message.channel.fetchMessages({limite:lmt}).then(msgs=>{
       msgs.channel.bulkDelete(msgs);
       });
       if(hang > 100){
           hang = 100;
       }
          message.channel.fetchMessages({limite:hang}).then(msgs=>{
          message.channel.bulkDelete(msgs);
       });
       
      max= hang+lmt;
      message.reply(` **Done, i have delete ${max} messages!**.`).catch(()=>{
          message.reply(` **Sorry, i can only bulk delete messages that are under 14 days old**.`)
      });
      }
  }); 
  
  
client.on('message', async message =>{
    var prefix = "#";
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('MANAGE_ROLES'));
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return;
  var command = message.content.split(" ")[0];
    let mention = message.mentions.members.first();
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
      if(command == "mute") {
      let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
      if(mention.id === message.author.id) return message.reply('**لا يمكنك اعطاء ميوت  لنفسك**').then(m => m.delete(5000));
   
      if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك اعطاء لميوت شخص رتبته اعلى منك**').then(m => m.delete(5000));
      if(tomute.hasPermission("MANAGE_MESSAGES"))return;
      let muterole = message.guild.roles.find(`name`, "Muted");
      //start of create role
      if(!muterole){
        try{
          muterole = await message.guild.createRole({
            name: "Muted",
            color: "#000000",
            permissions:[]
          })
          message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false
            });
          });
        }catch(e){
          console.log(e.stack);
        }
      }
      //end of create role
      let mutetime = args[1];
      if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
    
      await(tomute.addRole(muterole.id));
      message.reply(`<@${tomute.id}> تم اعطائه ميوت ومدة الميوت : ${ms(ms(mutetime))}`);
    
      setTimeout(function(){
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
      }, ms(mutetime));
    
    
    //end of module
    }
  
  });
  client.on('message', async message =>{
    var prefix = "#";
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('MANAGE_ROLES'));
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if(command === `unmute`) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(msg => msg.delete(6000))
  
  
    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
  
    let role = message.guild.roles.find (r => r.name === "Muted");
    
    if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
  
    await toMute.removeRole(role)
    message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
  
    return;
  
    }
  
  });
client.on('message', message => {
    var prefix = '#';
if (message.content.startsWith(prefix + "nickname" && prefix + "nick")) {
  let args = message.content.split(' ').slice(1).join(' ');
  let args2 = message.content.split(' ').slice(2).join(' ');
if (message.member.hasPermission("CHANGE_NICKNAME")) {
  let mention = message.mentions.members.first();

  let clientbot = message.guild.me
  if (clientbot.hasPermission("MANAGE_NICKNAMES")) {
    if (message.mentions.users.size === 0) {
      if (args.length === 0) {
        if (message.member.nickname != null) {
          message.member.setNickname(args2)
          const embed = new Discord.RichEmbed()
          .setColor("#fff")
          .setTitle(" أمثله على الأوامر : ")
          .setDescription(`
          **+nick** : لحذف اسمك في السيرفر
          **+nickname @Moha Someone** : لتغيير اسم شخص ما في السيرفر`)
          .setFooter('Requested by '+message.author.username, message.author.avatarURL)

        message.channel.send({ embed: embed }); 
      } else {
        const embed1 = new Discord.RichEmbed()
        .setTitle("No Succes!")
        .setColor("#fff")
        .setDescription("**:x: | لا يمكنني حذف اسمك لانه لا يوجد آسم من الأصل**")

        message.channel.send({ embed: embed1 });
      }
    } else {
      if (args.length < 32) {
        if (message.author.id === message.guild.owner.id) {
          const embed2 = new Discord.RichEmbed()
          .setColor("#fff")
          .addField("**:x: | ❌ Permission Error ❌**", `**Because you are the owner of the guild, I can't change your nickname!**`)
          message.channel.send({ embed: embed2 });
        } else {
          message.member.setNickname(args)
          const embed3 = new Discord.RichEmbed()
            .setColor("#fff")
            .setTitle("Succes!")
            .setDescription(`**:white_check_mark:| Nickname changed to:** **${args}**`)
            message.channel.send({ embed: embed3 });
        }
      } else {
        const embed4 = new Discord.RichEmbed()
          .setColor("#fff")
          .setDescription("**:x: | يجب آن يكون عدد الأحرف لا يتعدى 32 حرفاّ**")
          message.channel.send({ embed: embed4 });
      }
    }
} else {
  if (message.member.hasPermission("MANAGE_NICKNAMES")) {
    if (clientbot.hasPermission("MANAGE_NICKNAMES")) {
      if (args2.length === 0) {
        let mentionednick1 = message.mentions.members.first()
        let mgn1 = message.guild.members.get(mentionednick1.id)
          if (mgn1.nickname != null) {
            mgn1.setNickname(args2)
              const embed5 = new Discord.RichEmbed()
                .setColor("#fff")
                .setTitle("Succes!")
                .setDescription(`**:white_check_mark:| Nickname of ${mgn1.user.username} Removed!\nDefault Username:** **${mgn1.user.username}**`)

          message.channel.send({ embed: embed5 });
        } else {
          mgn1.setNickname(args2)
          const embed6 = new Discord.RichEmbed()
          .setTitle("No Succes!")
          .setDescription(`**:x: | Can't remove the username of\n${mgn1.user.username} because he/she doesn't have a nickname!**`)
          .setColor("#fff")

        message.channel.send({ embed: embed6 });
      }
    } else {
      let embed7 = message.mentions.members.first()
      let mgn2 = message.guild.members.get(mentionednick2.id)
      mgn2.setNickname(args2)
      const args2nickname = new Discord.RichEmbed()
        .setColor("#fff")
        .setTitle("Succes!")
        .setDescription(`**:white_check_mark:| Nickname of ${mgn2.user.username} changed to:** **${args2}**`)

        message.channel.send({ embed: embed7 });
      }
    } else {
      const embed8 = new Discord.RichEmbed()
        .setColor("#fff")
        .addField("**:x: |  ❌ Permission Error ❌**", `**I don't have perms to change nicknames of other users!\nNeeded Permission:** **MANAGE_NICKNAMES**`)

        message.channel.send({ embed: embed8 });
    }
} else {
  const embed9 = new Discord.RichEmbed()
    .setColor("#fff")
    .addField("**:x: | ❌ Permission Error ❌**", `**You don't have perms to change nicknames of other users!\nNeeded Permission:** **MANAGE_NICKNAMES**`)

    message.channel.send({ embed: embed9 });
  }
}
} else {
  const embed10 = new Discord.RichEmbed()
    .setColor("#fff")
    .addField("**:x: | ❌ Permission Error ❌**", `**I don't have perms to change nicknames!\nNeeded Permission:** **MANAGE_NICKNAMES**`)
    message.channel.send({ embed: embed10 });
}
} else {
message.react("❌")
}
}
});
  
  
      client.on('message', message => {
        var prefix = "#";
        if(message.content.startsWith(prefix + 'mutevoice')) {
          if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**:x: ").then(m => m.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
           
        if(message.mentions.users.size === 0) {
          return message.reply("Please mention a user to mute.");
        }
        let muteMember = message.guild.member(message.mentions.users.first());
        if(!muteMember) {
          return message.reply("Try again.");
        }
        muteMember.setMute(true);
        if(muteMember) {
          message.channel.sendMessage("User muted successfully.");
        }
      }
    });
    client.on('message', message => {
      var prefix = "+";
      if(message.content.startsWith(prefix + 'unmutevoice')) {
        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**:x: ").then(m => m.delete(5000));
        if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
         
      if(message.mentions.users.size === 0) {
        return message.reply("Please mention a user to mute.");
      }
      let muteMember = message.guild.member(message.mentions.users.first());
      if(!muteMember) {
        return message.reply("Try again.");
      }
      muteMember.setMute(false);
      if(muteMember) {
        message.channel.sendMessage("User muted successfully.");
      }
    }
  });
   
  
client.on('message', message => {
  if(!message.channel.guild) return;
  var prefix = "#";
if(message.content.startsWith(prefix + 'move')) {
  var cmdrole = message.guild.roles.find("name", config.cmdrole)
     if (message.member.hasPermission("MOVE_MEMBERS")) {
if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**I Don't Have `MOVE_MEMBERS` Permission**").then(msg => msg.delete(6000))
            if (message.mentions.users.size === 0) { const embed = new Discord.RichEmbed()
                   .setColor("#fff")
                   .setTitle(" أمثله على الأوامر : ")
                   .setDescription(`
         **+move @Moha**: لسحب شخص ما الى الروم الصوتي الخاص بك
         **+move all**: لسحب جميع الاعضاء الى روم الصوتي الخاص بك`)
                   .setFooter('Requested by '+message.author.username, message.author.avatarURL)
               
                 message.channel.send({ embed: embed });
            }
            if (message.member.voiceChannel != null) {
                   if (message.mentions.members.first().voiceChannel != null) {
                          var authorchannel = message.member.voiceChannelID;
                          var usermentioned = message.mentions.members.first().id;
                         var embed = new Discord.RichEmbed()
                            .setTitle("Succes!")
                            .setColor("#fff")
                            .setDescription(`**:white_check_mark:| لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك**`)
                            .setFooter('Requested by '+message.author.username, message.author.avatarURL)

                          var embed = new Discord.RichEmbed()
                            .setTitle(`You are Moved in ${message.guild.name}`)
                            .setColor("#000000")
                            .setDescription(`<@${message.author.id}> moved you to his channel!\nServer => ${message.guild.name}`)
                            .setFooter('Requested by '+message.author.username, message.author.avatarURL)
                                                        message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
                          message.guild.members.get(usermentioned).send(embed)
                   } else {
                          message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
                   }
            } else {
                   message.channel.send("``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``")
            }
     } else {
            message.react("❌")
     }
  }
  });

  
client.on('message', message => {
  var prefix = "#";
  if(message.content.startsWith(prefix + 'move all')) {
   if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
     if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
  if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
   var author = message.member.voiceChannelID;
   var m = message.guild.members.filter(m=>m.voiceChannel)
   message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
   m.setVoiceChannel(author)
   })
   .setColor("#fff")
   .setTitle("Succes!")
   .setDescription(`**:white_check_mark:| تم سحب جميع الأعضاء الى الروم الصوتي الخاص بك`)
             .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  
   }
     });
  client.on("message", message => {
      var prefix = "#";
      const command = message.content.split(" ")[0];
   
      if(command == prefix+"voicekick"){
   
          if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
              return message.reply('you do not have permission to perform this action!');
          }
   
          var member = message.guild.members.get(message.mentions.users.array()[0].id);
          if(!message.mentions.users){
              message.reply("please mention the member")
              return;
          }
   
      if(!member.voiceChannel){
      message.reply("i can't include voice channel for member!")
      return;
      }
                message.guild.createChannel('voicekick', 'voice').then(c => {
                  member.setVoiceChannel(c).then(() => {
                      c.delete(305).catch(console.log)
   message.reply(' has been successfullly kicked from voice.');
       
        });
       });
      }
  });
  

client.on('message', message => {
  var prefix = '#';

  if (message.content.startsWith(prefix + "removerole")) {
    let clientbot = message.guild.me;
if (clientbot.hasPermission("MANAGE_ROLES")) {
  if (!message.member.hasPermission("MANAGE_ROLES")) {
    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك اعطاء لميوت شخص رتبته اعلى منك**')
    if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**لا يمكنني اعطاء ميوت لشخص رتبته اعلى مني**')
    message.react("❌")
  } else {
    let args = message.content.split(' ').slice(1).join(' ');
  let args2 = message.content.split(' ').slice(2).join(' ');
  if (message.mentions.users.size === 0) {
    const embed = new Discord.RichEmbed()
    .setColor("#fff")
    .setTitle(" أمثله على الأوامر : ")
    .setDescription(`
    **#role @Moha Mod** : لأعطاء رتبة لشخص 
    **#remove @Moha Mod** : لأزاله رتبة من شخص
    **#role all Guest** : لاعطاء رتبة للجميع
    **#role bots System** : لاعطاء رتبة لجميع البوتات
    **#role humans User** : لاعطاء رتبة للأشخاص فقط`)
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)

  message.channel.send({ embed: embed });
  } else {
    var mentioned = message.mentions.members.first().id;
    var mgm = message.guild.members.get(mentioned)
    var role = message.guild.roles.find("name", args2)
    let hasrole = mgm.roles.has("name", args)
    if (args2) {
      if (role) {
        if (mgm.roles.has(role.id)) {
        mgm.removeRole(role)
        const roleremoved = new Discord.RichEmbed()
          .addField(`**Role Removed!!**`, `**:white_check_mark:| The role **${args2}** has been removed from <@${mgm.id}>**`)
          .setColor("#fff")
          message.channel.send(roleremoved)
        } else {
          message.channel.send("**:x: |"+mgm.user.tag+"** doesn't have the role **" + role.name + "**!")
        }
      } else {
        message.channel.send("**:x: |The role Named **``"+args2+"``** doesn't exist!**")
      }

    } else {
      const embed1 = new Discord.RichEmbed()
      .setColor("#fff")
      .setTitle(" أمثله على الأوامر : ")
      .setDescription(`
      **#role @Moha Mod** : لأعطاء رتبة لشخص 
      **#remove @Moha Mod** : لأزاله رتبة من شخص
      **#role all Guest** : لاعطاء رتبة للجميع
      **#role bots System** : لاعطاء رتبة لجميع البوتات
      **#role humans User** : لاعطاء رتبة للأشخاص فقط`)
      .setFooter('Requested by '+message.author.username, message.author.avatarURL)

    message.channel.send({ embed: embed1 });    }
  }
}
} else {
const botnoperm = new Discord.RichEmbed()
        .setColor("#fff")
        .addField("❌ Permission Error ❌", `I don't have perms to add roles to users!\nNeeded Permission: **MANAGE_ROLES**`)

        message.channel.send(botnoperm)
}
}
});
  
      client.on('message', message => {
        var prefix = "#";
        if(message.content.startsWith(prefix + 'deafen')) {
      if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
        return message.reply('**يجب عليك المنشن اولاّ**:x:').catch(console.error);
      }
      if (!message.guild.member(client.user).hasPermission('DEAFEN_MEMBERS')) {
        return message.reply('للأسف البوت لا يمتلك صلاحيات لتنفيذ هذه الأمر**:x:').catch(console.error);
      }
     
      const deafenMember = (member) => {
        if (!member || !member.voiceChannel) return;
        if (member.serverDeaf) return message.channel.send(`${member} **لديه ديفن بالفعل**:x:`);
        member.setDeaf(true).catch(console.error);
        if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ديفن **:x: ").then(m => m.delete(5000));
      };
     
      message.mentions.users.forEach(user => deafenMember(message.guild.member(user)));
      message.mentions.roles.forEach(role => role.members.forEach(member => deafenMember(member)));
        }
        
    });  
     
    client.on('message', async message =>{
      var prefix = "#";
      if(message.content.startsWith(prefix + 'undeafen')) {
     
    if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
      return message.reply('**يجب عليك المنشن اولاّ**:x:').catch(console.error);
    }
    if (!message.guild.member(client.user).hasPermission('DEAFEN_MEMBERS')) {
      return message.reply('**للأسف البوت لا يمتلك صلاحيات لتنفيذ هذه الأمر**:x: ').catch(console.error);
      if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ديفن **:x: ").then(m => m.delete(5000));
    }
     
    const undeafenMember = (member) => {
      if (!member || !member.voiceChannel) return;
      if (!member.serverDeaf) return message.channel.send(`${member} `);
      member.setDeaf(false).catch(console.error);
    };
     
    message.mentions.users.forEach(user => undeafenMember(message.guild.member(user)));
    message.mentions.roles.forEach(role => role.members.forEach(member => undeafenMember(member)));
    }
    });
  
  
  
  
   
  client.on("message", message => {
      var prefix= "#";

      if(message.content.startsWith(prefix + 'ct')) {
       let args = message.content.split(" ").slice(1);
         var nam = args.join(' ');
       
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
        if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))
        if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`);
        message.guild.createChannel(nam, 'text') // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
        message.channel.send(`:white_check_mark:  تم عمل الروم الكتابي : \`${nam}\``);
      }
      });
   
  client.on("message", message => {
  var prefix= "#";

      if(message.content.startsWith(prefix + 'cv2')) {
       let args = message.content.split(" ").slice(1);
         var nam = args.join(' ');
       
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return;   
        if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))
        if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`);
        message.guild.createChannel(nam, 'voice')
        message.channel.send(`:white_check_mark:  تم عمل الروم الصوتي : \`${nam}\``);
      }
      });
  
  client.on("message", message => {
  var prefix= "#";

      if(message.content.startsWith(prefix + 'cc')) {
       let args = message.content.split(" ").slice(1);
         var nam = args.join(' ');
       
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
        if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))
        if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`);
        message.guild.createChannel(nam, 'category') //  
        message.channel.send(`:white_check_mark:  تم عمل مجموعة : \`${nam}\``);
      }
      });
  


  client.on('message', async message => {
    if(message.content.startsWith(prefix + "tv")) {
      if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
      await message.channel.send("ارسل اسم الروم").then(e => {
      let filter = m => m.author.id === message.author.id
      let name = '';
      let time = '';
      let type = '';
      let limit = '';
  
     
      message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
      .then(collected => {
        name = collected.first().content
        collected.first().delete()
  
  
  
  e.edit("ارسل مدة الروم بالدقائق لااقل من 2 ولا اعلى من 180")
  message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(co => {
  if(isNaN(co.first().content)) return message.reply("الوقت بالدقائق ! ارقام فقطٍ");
  if(co.first().content > 180 || co.first().content < 2) return message.channel.send("لا اقل من دقيقتان ولا اكثر من 180 دقيقه")
    time = co.first().content
  co.first().delete()
    e.edit("ارسل نوع الروم text, voice")
  message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(col => {
    type = col.first().content
  col.first().delete()
  e.edit("ارسل عدد الاعضاء الذين يستطيعون الدخول")
  message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(coll => {
    if(isNaN(coll.first().content)) return message.reply("عدد الاعضاء يكون بالارقام فقط");
      limit = coll.first().content
  coll.first().delete()
  
    e.edit("جاري اعداد الغرفه الرجاء الانتضار...")
    message.guild.createChannel(name, type).then(c => {
      c.edit({
        userLimit: limit
      })
      setTimeout(() => {
        c.delete()
        message.channel.send("تم انقضاء الوقت")
      }, Math.floor(time*60000))
      
    })
    e.edit("تم انشاء الغرفه استمتع")
  
  })
  })
  })
  })
  })
  
    }
  })
  
  client.on('message', message => {
    var prefix = "#";
  if(message.content === prefix + "muteall") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
  
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
  message.channel.overwritePermissions(message.guild.id, {
  SEND_MESSAGES: false
  
  }).then(() => {
      message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
  
  });
  }
     
  
  
  });
    client.on('message', message => {
      var prefix = "#";
  if(message.content === prefix + "unmuteall") {
            if(!message.channel.guild) return message.reply('** This command only for servers**');
  
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
  message.channel.overwritePermissions(message.guild.id, {
  SEND_MESSAGES: true
  
  }).then(() => {
      message.reply("**__تم فتح الشات__:white_check_mark:**")
  });
    }
     
  
  
  });
  
            client.on("message", (message) => {
              if (message.content.startsWith('#delet')) {
  if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**I Don't Have `MANAGE_CHANNELS` Permission**").then(msg => msg.delete(6000))
                  if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("ليس لديك خاصية `MANAGE_CHANNELS` Premissions ");
           
                  let args = message.content.split(' ').slice(1);
                  let channel = message.client.channels.find('name', args.join(' '));
                  if (!channel) return message.reply('**مافي روم بهل اسم -_-**').catch(console.error);
                  channel.delete()
              }
          });
  
  client.on('message', message => {
         var prefix= "#";

      if(message.content === prefix + "hidechannel") {
      if(!message.channel.guild) return;
      if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**I Don't Have `MANAGE_CHANNELS` Permission**").then(msg => msg.delete(6000))

      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You Dont Have Perms :x:**');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('**Channel Hided Successfully ! :white_check_mark:  **')            
 }
});


client.on('message', message => {
         var prefix= "#";

      if(message.content === prefix + "showchannel") {
      if(!message.channel.guild) return;
      if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**I Don't Have `MANAGE_CHANNELS` Permission**").then(msg => msg.delete(6000))

      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You Dont Have Perms :x:**');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('**Channel Showed Successfully ! :white_check_mark:  **')            
 }
});
   
  
  client.on('message', message => {
      var prefix= "+";

      if(message.content === prefix + 'createcolors') {
                           if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
           if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

        message.guild.createRole({
                    name: "1",
                      color: "#FFB6C1",
                      permissions: []
       })
             message.guild.createRole({
                    name: "2",
                      color: "#FFC0CB",
                      permissions: []
       })
                  message.guild.createRole({
                    name: "3",
                      color: "#FF69B4",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "4",
                      color: "#FF1493",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "5",
                      color: "#DB7093",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "6",
                      color: "#C71585",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "7",
                      color: "#E6E6FA",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "8",
                      color: "#D8BFD8",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "8",
                      color: "#DDA0DD",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "9",
                      color: "#DA70D6",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "10",
                      color: "#EE82EE",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "11",
                      color: "#FF00FF",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "12",
                      color: "#BA55D3",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "13",
                      color: "#9932CC",
                      permissions: []
       })
                            message.guild.createRole({
                    name: "14",
                      color: "#9400D3",
                      permissions: []
       })
                            message.guild.createRole({
                    name: "15",
                      color: "#8A2BE2",
                      permissions: []
       })
                                 message.guild.createRole({
                    name: "16",
                      color: "#8B008B",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "17",
                      color: "#800080",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "18",
                      color: "#9370DB",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "19",
                      color: "#7B68EE",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "20",
                      color: "#6A5ACD",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "21",
                      color: "#483D8B",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "22",
                      color: "#663399",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "23",
                      color: "#4B0082",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "24",
                      color: "#FFA07A",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "25",
                      color: "#FA8072",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "26",
                      color: "#E9967A",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "27",
                      color: "#F08080",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "28",
                      color: "#CD5C5C",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "29",
                      color: "#DC143C",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "30",
                      color: "	#FF0000",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "31",
                      color: "#B22222",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "32",
                      color: "#8B0000",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "33",
                      color: "#FFA500",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "34",
                      color: "#FF8C00",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "35",
                      color: "#FF7F50",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "36",
                      color: "#FF6347",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "37",
                      color: "#FF4500",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "38",
                      color: "#FFD700",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "39",
                      color: "#FFFFE0",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "40",
                      color: "#FFFACD",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "41",
                      color: "#FAFAD2",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "42",
                      color: "	#FFEFD5",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "43",
                      color: "#FFE4B5",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "44",
                      color: "#FFDAB9",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "45",
                      color: "#EEE8AA",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "46",
                      color: "#F0E68C",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "47",
                      color: "#BDB76B",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "48",
                      color: "#ADFF2F",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "49",
                      color: "#7FFF00",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "50",
                      color: "#7CFC00",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "51",
                      color: "#00FF00",
                      permissions: []
       })  
       
                                           message.guild.createRole({
                    name: "52",
                      color: "#32CD32",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "53",
                      color: "#98FB98",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "54",
                      color: "#90EE90",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "55",
                      color: "#00FA9A",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "56",
                      color: "#00FF7F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "57",
                      color: "#3CB371",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "58",
                      color: "#2E8B57",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "59",
                      color: "#2E8B57",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "60",
                      color: "#008000",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "61",
                      color: "#006400",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "62",
                      color: "#9ACD32",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "63",
                      color: "#6B8E23",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "64",
                      color: "#556B2F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "65",
                      color: "#66CDAA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "66",
                      color: "#8FBC8F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "67",
                      color: "#20B2AA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "68",
                      color: "#008B8B",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "69",
                      color: "#008080",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "70",
                      color: "#00FFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "71",
                      color: "#E0FFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "72",
                      color: "#AFEEEE",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "73",
                      color: "#7FFFD4",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "74",
                      color: "#40E0D0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "75",
                      color: "#48D1CC",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "76",
                      color: "#00CED1",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "77",
                      color: "#5F9EA0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "78",
                      color: "#4682B4",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "79",
                      color: "#B0C4DE",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "80",
                      color: "#ADD8E6",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "81",
                      color: "#B0E0E6",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "82",
                      color: "#87CEFA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "83",
                      color: "#87CEEB",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "84",
                      color: "#6495ED",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "85",
                      color: "#00BFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "86",
                      color: "#1E90FF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "87",
                      color: "#4169E1",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "88",
                      color: "#0000FF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "89",
                      color: "#0000CD",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "90",
                      color: "#00008B",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "91",
                      color: "#000080",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "92",
                      color: "#191970",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "93",
                      color: "#FFF8DC",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "94",
                      color: "#FFEBCD",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "95",
                      color: "#FFE4C4",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "96",
                      color: "#FFDEAD",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "97",
                      color: "#F5DEB3",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "98",
                      color: "#DEB887",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "99",
                      color: "#D2B48C",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "100",
                      color: "#BC8F8F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "101",
                      color: "#F4A460",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "102",
                      color: "#DAA520",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "103",
                      color: "#B8860B",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "104",
                      color: "#CD853F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "105",
                      color: "#D2691E",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "106",
                      color: "#808000",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "107",
                      color: "#8B4513",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "108",
                      color: "#A0522D",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "109",
                      color: "#A52A2A",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "110",
                      color: "#800000",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "111",
                      color: "#FFFFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "112",
                      color: "#FFFAFA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "113",
                      color: "#F0FFF0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "114",
                      color: "#F5FFFA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "115",
                      color: "#F0FFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "116",
                      color: "#F0F8FF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "117",
                      color: "#F8F8FF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "118",
                      color: "#F5F5F5",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "119",
                      color: "#FFF5EE",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "120",
                      color: "#F5F5DC",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "121",
                      color: "#FDF5E6",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "122",
                      color: "#FFFAF0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "123",
                      color: "#FFFFF0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "124",
                      color: "#FAEBD7",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "125",
                      color: "#FAF0E6",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "126",
                      color: "#FFF0F5",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "127",
                      color: "#FFE4E1",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "128",
                      color: "#DCDCDC",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "129",
                      color: "#D3D3D3",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "130",
                      color: "#C0C0C0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "131",
                      color: "#A9A9A9",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "132",
                      color: "#696969",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "133",
                      color: "#808080",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "134",
                      color: "#778899",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "135",
                      color: "#708090",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "136",
                      color: "#2F4F4F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "137",
                      color: "#000000",
                      permissions: []
       })     
  
       
            message.channel.sendMessage({embed: new Discord.RichEmbed()
       .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``Colors Has Been Created``')});
      }
      });


client.on('message',async message => {
  if(message.content === '#unbanall') {
    var user = message.mentions.users.first();
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك صلاحية `**');
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    const guild = message.guild;

  message.guild.fetchBans().then(ba => {
  ba.forEach(ns => {
  message.guild.unban(ns);
  const embed= new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Succes!", "https://images-ext-1.discordapp.net/external/vp2vj9m0ieU5J6SHg6ObIsGpTJyoZnGAebrd0_vi848/https/i.imgur.com/GnR2unD.png?width=455&height=455")
        .setDescription(`**:white_check_mark: Has Been Unban For All**`)
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  message.channel.sendEmbed(embed);
  guild.owner.send(`سيرفر : ${guild.name}
  **تم فك الباند عن الجميع بواسطة** : <@${message.author.id}>`) 
  });
  });
  }
  });
    

  client.on("guildBanAdd", (guild, member) => {
    client.setTimeout(() => {
      guild.fetchAuditLogs({
          limit: 1,
          type: 22
        })
        .then(audit => {
          let exec = audit.entries.map(a => a.executor.username);
          try {
            client.fetchUser(member.id).then(myUser => {
              guild.owner.send(`سيرفر : ${guild.name}
              **${myUser.username} تم تبنيد  
             بواسطة : ${exec}**`).catch(e => {
              console.log(e);
            });
            });
          } catch (e) {
            console.log(e);
          }
        });
    }, 1000);
  });

  
client.on("message", message => {
  if (message.content === "#help") {
   message.react("✅")
message.react("📬")
   const embed = new Discord.RichEmbed() 
 .setColor("#ffff00")
 .setDescription(`
 
  ══════════ஜ۩۞۩ஜ════════════ 
**       اوامر ادارية    
#nick
  └─ لحذف اسمك
#nickname
  └─ لتغيير اسم شخص ما
#muteall 
  └─ لقفل الشات
#unmuteall
  └─ لفتح الشات
#hidechannel 
  └─ لأخفاء الشات
#showchannel
  └─ لأظهار الشات الشات  
#mute
  └─ لاعطاء ميوت لشخص 
#mutevoice
  └─ لاعطاء ميوت صوتي 
#unmutevoice
  └─ لفك ميوت صوتي
#deafen
  └─ لأعطاء ديفن 
#undeafen 
  └─ لفك الديفن
#unmute 
  └─ لفك الميوت
#createcolors 
  └─ لعمل 137 لون مرتب 
#deletecolors
  └─ لمسح جميع الألوان بالسيرفر
#ban
  └─ لتعطي شخص باند مع السبب
#unban
  └─ لفك الباند عند شخص محدد 
#unbanall
  └─ لفك الباند عن الجميع 
#kick
  └─ لتعطي شخص كيك مع السبب   
#clear
  └─ لمسح الشات   
#tc
  └─ لانشاء روم صوتي وكتابي مؤقت
#cc
  └─ لانشاء كاتجوري 
#cv
  └─ لانشاء روم صوتي دائم 
#ct
  └─ لانشاء روم كتابي دائم  
#delet
  └─ يحذف الـروم سواء صوتي او كتابي
#role 
  └─ لأعطاء رتبة
#removerole
  └─ أزالة رتبة
#role all 
  └─ لأعطاء جميع الي في سيرفر رتبة
#role bots
  └─ لأعطاء جميع البوتات رتبة
#role humans
  └─ لأعطاء جميع الناس معدى البوتات رتبة 
#voicekick
  └─ لطرد شخص من روم صوتي
#move
  └─ لسحب الشخص الى الروم صوتي الخاص بك
#move all
  └─ لسحب جميع الاشخاص الموجودون بالرومات الصوتية أليك**
  
 ══════════ஜ۩۞۩ஜ════════════  
 
  `)
  .setFooter('Requested by '+message.author.username, message.author.avatarURL)

     
     
    message.author.sendEmbed(embed)
     
    }
    }); 



  
  client.on('message' , msg => {
    var prefix = "#";
    if(msg.author.bot) return;
    if(msg.channel.type == 'dm') return;
    if(msg.content.startsWith(prefix + "deletecolors")) {
      if(!msg.member.hasPermission('ADMINISTRATOR')) return      msg.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
      if(!msg.guild.member(client.user).hasPermission("MANAGE_ROLES")) return msg.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

    msg.guild.roles.filter(msg => isNaN(msg)).forEach(dragon => dragon.delete())
    }
    });
            client.login(process.env.BOT_TOKEN);

      
