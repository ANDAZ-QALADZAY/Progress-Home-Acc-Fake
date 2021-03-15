
// 20 token dane   
//
const Discord = require("discord.js");
const Canvas = require("canvas");
const fs = require("fs");
const cmd = require("node-cmd");
const config = require("./config.json");
const prefix = config.prefix;
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client(); 
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client(); 
const client20 = new Discord.Client();
const client21 = new Discord.Client();
const client22 = new Discord.Client();
const client23 = new Discord.Client();
const client24 = new Discord.Client();
const client25 = new Discord.Client();
const client26 = new Discord.Client();
const client27 = new Discord.Client();
const client28 = new Discord.Client();
const client29 = new Discord.Client();
const client30 = new Discord.Client();
const client31 = new Discord.Client();
const client32 = new Discord.Client();
const client33 = new Discord.Client();
const client34 = new Discord.Client();
const client35 = new Discord.Client();
const client36 = new Discord.Client();
const client37 = new Discord.Client();
const client38 = new Discord.Client();
const client39 = new Discord.Client();
const client40 = new Discord.Client();
const client41 = new Discord.Client();
const client42 = new Discord.Client();
const client43 = new Discord.Client();
const client44 = new Discord.Client();
const client45 = new Discord.Client();
const client46 = new Discord.Client();
const client47 = new Discord.Client();
const client48 = new Discord.Client();
const client49 = new Discord.Client();
const client50 = new Discord.Client();
const client51 = new Discord.Client();
const client52 = new Discord.Client();
const client53 = new Discord.Client();
const client54 = new Discord.Client();
const client55 = new Discord.Client();
const client56 = new Discord.Client();
const client57 = new Discord.Client();
const client58 = new Discord.Client();
const client59 = new Discord.Client();
const client60 = new Discord.Client();
const client61 = new Discord.Client();
const client62 = new Discord.Client();
const client63 = new Discord.Client();
const client64 = new Discord.Client();
const client65 = new Discord.Client();
const client66 = new Discord.Client();
const client67 = new Discord.Client();
const client68 = new Discord.Client();
const client69 = new Discord.Client();
const client70 = new Discord.Client();
const client71 = new Discord.Client();
const client72 = new Discord.Client();
const client73 = new Discord.Client();
const client74 = new Discord.Client();
const client75 = new Discord.Client();
const client76 = new Discord.Client();
const client77 = new Discord.Client();
const client78 = new Discord.Client();
const client79 = new Discord.Client();
const client80 = new Discord.Client();
const client81 = new Discord.Client();
const client82 = new Discord.Client();
const client83 = new Discord.Client();
const client84 = new Discord.Client();
const client85 = new Discord.Client();
const client86 = new Discord.Client();
const client87 = new Discord.Client();
const client88 = new Discord.Client();
const client89 = new Discord.Client();
const client90 = new Discord.Client();
const client91 = new Discord.Client();
const client92 = new Discord.Client();
const client93 = new Discord.Client();
const client94 = new Discord.Client();
const client95 = new Discord.Client();
const client96 = new Discord.Client();
const client97 = new Discord.Client();
const client98 = new Discord.Client();
const client99 = new Discord.Client();
const client100 = new Discord.Client();

const help = `**
كۆمانده‌كان:

بۆ زیاد كردنی ڕیاكشن
!react <Channel ID> <Message ID> <Emoji>

بۆ هێنانه‌ ڤۆیسی هه‌موو بۆته‌كان
**`;

client6.on("message", message => {
if (message.author.bot) return;

 let prefix = "!"
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

// +say
if (command === "say") {
if (!message.channel.guild)
return message.channel
.send("ببورە ئەم ئەمرە تەنها بۆ سێرفەرە")
.then(m => m.delete(5000));
if (!message.member.hasPermission("ADMINISTRATOR"))
return message.channel.send("ببورە ئەم دەسەڵاتەت نیە ADMINISTRATOR");
message.delete();
message.channel.sendMessage(args.join(" "));
} 

if (command == "embed") {
if (!message.channel.guild)
return message.channel
.send("ببورە ئەم ئەمرە تەنها بۆ سێرفەرە")
.then(m => m.delete(5000));
if (!message.member.hasPermission("MANAGE_MESSAGES"))
return message.channel.send("ببورە ئەم دەسەڵاتەت نیە MANAGE_MESSAGES");
let say = new Discord.RichEmbed()
.setDescription(args.join(" "))
.setColor(0x23b2d6);
message.channel.sendEmbed(say);
message.delete();
}
});





const err = `** \`\`\`  [ERORR] : لازم تسوي رتبة بـ اسم  \`\`\`
         \`\` Role.Kahrbaa \`\` **`;

// ======= [ settings JSON   ] ======== //
const dinfo = JSON.parse(fs.readFileSync("./data.json", "UTF8"));
client.on("message", async msg => {
  if (!msg.guild) return;
  if (msg.author.bot) return;
  if (!dinfo)
    dinfo = {
    
      owner: config.kahrbaaid,
      serverid: "NONE",
      channelid: "NONE", 
      timespam: "NONE",
      timestop: "NONE"
    };
  if (msg.content.startsWith(config.prefix + "setownerID")) {
    if (msg.channel.type == "dm")
      
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**");
    dinfo.owner = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لصاحب التوكانات __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
    await cmd.run("refresh");
  }
  if (msg.content.startsWith(config.prefix + "setserverID")) {
    if (msg.channel.type == "dm")
      // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.serverid = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لسيرفر الاسبام __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "setchannelID")) {
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**");
    dinfo.channelid = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لروم الاسبام __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "settimeSpam")) {
    // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع وقت الاسبام بـ الثواني **");
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.timespam = args;
    await msg
      .reply(`** __ تم اضافة مدة ارسال الاسبام ب الثواني __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "settimeStop")) {
    // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args)
      return msg.channel.send(
        "** قم بوضع وقت توقف البوت بعد بداء الاسبام بـ الساعات **"
      );
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.timestop = args;
    await msg
      .reply(`** __ تم اضافة مدة توقف الاسبام بـ الساعات  __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
}); // جمــيع الحقوق محفوظة لدي "Kahrbaa"

client.on("message", async message => {
  if (message.content === prefix + "reset") {
    if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.serverid = "NONE";
    dinfo.channelid = "NONE";
    dinfo.timespam = "NONE"; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.timestop = "NONE";
    message.channel.send(`**⚠️ restsettings , <@${dinfo.owner}>**`);
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
    await cmd.run("refresh"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  }
});

// ======= [ settings JSON - END   ] ======== //

// جمــيع الحقوق محفوظة لدي "Kahrbaa"
// ======= [ Reload JSON   ] ======== //
client.on("message", async message => {
  if (message.author.id !== dinfo.owner) return;
  if (message.content === config.prefix + "reload") {
    await cmd.run("refresh");
    await message.channel.send("Done,");
  }
});
// ======= [ Reload JSON - END   ] ======== //

// جمــيع الحقوق محفوظة لدي "Kahrbaa"
// ======= [ Console LOG    ] ======== //
client.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم واحد يعمل`);
  console.log(`Hi ${client.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client.guilds.size} " ]`);
}); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
client2.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم اثنين يعمل `);
  console.log(`Hi ${client2.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client2.guilds.size} " ]`); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
});
client3.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 3 يعمل`);
  console.log(`Hi ${client3.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client3.guilds.size} " ]`);
});
client4.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 4 يعمل`);
  console.log(`Hi ${client4.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client4.guilds.size} " ]`);
});
client5.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 5 يعمل`);
  console.log(`Hi ${client5.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client5.guilds.size} " ]`);
});
client6.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 6 يعمل`);
  console.log(`Hi ${client6.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client6.guilds.size} " ]`);
});
client7.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 7 يعمل`);
  console.log(`Hi ${client7.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client7.guilds.size} " ]`);
});
client8.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 8 يعمل`);
  console.log(`Hi ${client8.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client8.guilds.size} " ]`);
});
client9.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 9 يعمل`);
  console.log(`Hi ${client9.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client9.guilds.size} " ]`);
});
client10.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 10 يعمل`);
  console.log(`Hi ${client10.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client10.guilds.size} " ]`);
});
client11.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 11 يعمل`);
  console.log(`Hi ${client11.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client11.guilds.size} " ]`);
});
client12.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 12 يعمل`);
  console.log(`Hi ${client12.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client12.guilds.size} " ]`);
});
client13.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 13 يعمل`);
  console.log(`Hi ${client13.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client13.guilds.size} " ]`);
});
client14.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 14 يعمل`);
  console.log(`Hi ${client14.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client14.guilds.size} " ]`);
});
client15.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 15 يعمل`);
  console.log(`Hi ${client15.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client15.guilds.size} " ]`);
});
client16.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 16 يعمل`);
  console.log(`Hi ${client16.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client16.guilds.size} " ]`);
});
client17.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 17 يعمل`);
  console.log(`Hi ${client17.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client17.guilds.size} " ]`);
});
client18.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 18 يعمل`);
  console.log(`Hi ${client18.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client18.guilds.size} " ]`);
});
client19.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 19 يعمل`);
  console.log(`Hi ${client19.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client19.guilds.size} " ]`);
});
client20.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 20 يعمل`);
  console.log(`Hi ${client20.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client20.guilds.size} " ]`);
});
// ==== [مهم جدااا ] ==== //
const KahDEV = require("request");
const invitecode = config.invite;
client.on("ready", () => {
  console.log(`[BOT] ${client.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN }
  });
});

client2.on("ready", () => {
  console.log(`[BOT] ${client2.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});

client3.on("ready", () => {
  console.log(`[BOT] ${client3.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});

client4.on("ready", () => {
  console.log(`[BOT] ${client4.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});

client5.on("ready", () => {
  console.log(`[BOT] ${client5.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN5 }
  });
});

client6.on("ready", () => {
  console.log(`[BOT] ${client6.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN6 }
  });
});

client7.on("ready", () => {
  console.log(`[BOT] ${client7.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN7 }
  });
});

client8.on("ready", () => {
  console.log(`[BOT] ${client8.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN8 }
  });
});

client9.on("ready", () => {
  console.log(`[BOT] ${client9.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN9 }
  });
});

client10.on("ready", () => {
  console.log(`[BOT] ${client10.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN10 }
  });
});

client11.on("ready", () => {
  console.log(`[BOT] ${client11.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN11 }
  });
});

client12.on("ready", () => {
  console.log(`[BOT] ${client12.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN12 }
  });
});

client13.on("ready", () => {
  console.log(`[BOT] ${client13.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN13 }
  });
});

client14.on("ready", () => {
  console.log(`[BOT] ${client14.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN14 }
  });
});

client15.on("ready", () => {
  console.log(`[BOT] ${client15.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN15 }
  });
});

client16.on("ready", () => {
  console.log(`[BOT] ${client16.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN16 }
  });
});

client17.on("ready", () => {
  console.log(`[BOT] ${client17.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN17 }
  });
});

client18.on("ready", () => {
  console.log(`[BOT] ${client18.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN18 }
  });
});

client19.on("ready", () => {
  console.log(`[BOT] ${client19.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN19 }
  });
});

client20.on("ready", () => {
  console.log(`[BOT] ${client20.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN20 }
  });
});
// DONE //
// ======= [ Console LOG - END   ] ======== //

client.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.toLowerCase() === config.prefix + "help") {
    message.delete(5000);
    if (!message.channel.guild) return;
    message.channel.send(help);
  }
});




// ======= [ MODE - React MSG  ] ======== //
client.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send("")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
      } catch (e) {
        return;
      }
    }
  }
});
client2.on("message", async message => {
  if (message.content.startsWith(prefix + "j")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client2.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        // كههربا (حسن ياسر)
        return;
      } // كههربا (حسن ياسر)
    } else {
      try {
        await msg.react(args[2]);
      
      } catch (e) {
        return;
      } // كههربا (حسن ياسر)
    }
  } // كههربا (حسن ياسر)
}); // كههربا (حسن ياسر)
client3.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client3.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client4.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client4.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
         
      } catch (e) {
        return;
      }
    }
  }
});
client5.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client5.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
         
      } catch (e) {
        return;
      }
    }
  }
});
client6.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client6.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client7.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        // جمــيع الحقوق محفوظة لدي "Kahrbaa"

        await msg.react(
          client7.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      }
    } else {
      // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        // جمــيع الحقوق محفوظة لدي "Kahrbaa"
        return;
      }
    }
  }
});
client8.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client8.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
      
      } catch (e) {
        return;
      }
    }
  }
});
client9.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client9.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client10.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client10.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
         
      } catch (e) {
        return;
      }
    }
  }
});
client11.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client11.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client12.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client12.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client13.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client13.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client14.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client14.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
         
      } catch (e) {
        return;
      }
    }
  }
});
client15.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client15.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client16.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client16.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client17.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client17.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client18.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client18.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client19.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client19.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client20.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client20.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client21.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client21.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client22.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client22.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client23.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client23.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client24.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client24.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client25.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client25.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client26.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client26.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client27.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client27.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client28.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client29.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client30.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client30.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client31.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client31.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client32.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client32.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client33.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client33.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client34.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client34.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client35.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client35.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client36.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client36.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client37.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client37.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client38.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client38.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client39.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client38.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client39.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client39.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client40.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client40.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client41.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client41.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client42.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client42.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client43.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client43.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client44.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client44.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client45.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client45.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client46.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client46.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client47.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client47.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client48.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client47.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client48.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client48.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client49.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client49.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client50.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client50.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});

// ======= [ MODE - React MSG END  ] ======== //


// ======= [ StayVoice - MODE  ] ======== //
client.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client2.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client3.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {

    }
  }
});
client4.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client5.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      }
  }
});
client6.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client7.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client8.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client9.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
    }
  }
});
client10.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      
    }
  }
});
client11.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join() // جمــيع الحقوق محفوظة لدي "Kahrbaa"
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      message.reply("");
    }
  } // جمــيع الحقوق محفوظة لدي "Kahrbaa"
});
client12.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client13.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client14.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client15.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client16.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client17.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client18.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client19.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client20.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
         
        })
        .catch(console.log);
    } else {
      
    }
  }
});


client21.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client22.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client23.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client24.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client25.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client26.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client27.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client28.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client29.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client30.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client31.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client32.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {
}
}
});
client33.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client34.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client35.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client36.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client37.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client38.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client39.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client40.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client41.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client42.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client43.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client44.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client45.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client46.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client47.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client48.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client49.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client50.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client51.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client52.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client53.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client54.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client55.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client56.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client57.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client58.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client59.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client60.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client61.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client62.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client63.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client64.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client65.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client66.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client67.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client68.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client69.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client70.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client71.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client72.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client73.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client74.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client75.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client76.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client77.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client78.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client79.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client80.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client81.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client82.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client83.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client84.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client85.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client86.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client87.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client88.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client89.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client90.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client91.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client92.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client93.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client94.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client95.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client96.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client97.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client98.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client99.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client100.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});

    





//تۆكینه‌كان لێره‌ جا بنێ

client.login("NzQyMDkyNDQwMTMxMDc2MTQ2.YAUNPQ.KHHuYeSAnmQR5LKUm__RREwdPHI");
client2.login("NzQyMDkzMjkyMTU3Nzk2Mzgy.YAUOIA.LpPdTz99wp2_vEtap4nRJuWWbSA");
client3.login("NzQyMTA1NzkyNjAxMzkxMjM3.YAUOhg.FZMxJhLAWiJQ_LkZGPBPKjBDETY");
client4.login("NzQyMTA2NDk3NzE4MTU3MzUz.YAUO2A.wUuO0ICOBvJY7l4dAnnjGOkw978");
client5.login("NzQyMTQ1OTg1ODc0MTAwMjY0.YAUPKA.yHRauOgAFJeTviM1UeWME_tpfpE");
client6.login("NzU4NjA0MDE2MTYxOTE0ODkw.YAUPeA.OsDgFc2RUS-dY6-Lq6U1DczdXa0");
client7.login("NzQyMTQ2ODIzNDE4MDE5OTEw.YAUPvw.-pcfv0_vnw7SK0FpkHCpV8Zpm4Q");
client8.login("NzQyMTQ5MTQ4NjYwNDY1NzYy.YAUQJg.uOVUcjtKwGg-IwepurOLtfxUOuk");
client9.login("NzQyMTQ4MjQ1MDM5MzQ5ODQx.YAUQcg.BsLojOjGyO1009F23wtt83_bmGw");
client10.login("NzU4NjAzMzcxMzQyMjAwODQy.YAUQ5g.eNJ1twa9Onk8szcGE5127nDuWQY");
client11.login("NzQyMTQ5Nzg1MjIxNDY0MDg0.YAUXgA.gj2n4-BAYBFUs6o-1ovXwrIhRhA");
client12.login("NzQyMTUwNDY4Mjg0NzExMDQy.YAUigA.bsIv9mRWCbduNdZtGnDSytPgtg4");
client13.login("NzU4NzczMTgxMTUzNjczMjQ5.YAUi8Q.r1UivIwW4ruKTH_WTxGGvsFd-nA");
client14.login("NzQ1MzgyMzI1MjIyODk5ODE0.YAUjUQ.AvbCwawaVCQdCy0AQtpxgzTRKnY");
client15.login("NzU4NzczNjkyMjI1ODE0NTU4.X9r9iw.17Z4c1sY3jHDRy9dgY2BXmQSEXg");
client16.login("NzU4Nzc1NzY1MzE0OTYxNTE4.X-e0lg.btqrZ5K8q7iqUiAdVMrfnucZV2o");
client17.login("NzU4Nzc2NjUzNDA0NzAwNjgy.X-SyiA.t7qvR-_S6rqHnF20eYcUEYyKhd4");
client18.login("NzU4Nzc5ODA2NjEwNjIwNDI5.X-Sy0g.hIe8vaR3LbxDHMh3EObTVCIV91s");
client19.login("NzU4Nzk0MTg3MTc2MDE3OTgx.X-SzBw.WpyC12naiJAlSWWdv3Z8L74ien0");
client20.login("NzU4NzgwODU4NzA1Mzc5MzY4.X-SzJw.NuyFEeXYnXrBxHM5ofXM667UT8g");
client21.login("NzkyNTE1ODIxOTM1MDAxNjMw.X-e2AA.yzfdhkqQal2dS7mtbFjWISWIAr0");
client22.login("NzkyNTE3OTA0MTkzMTU5MTg4.X-e3-w.kXjUId3LQuG1FJJlz_WPpoiWK9k");
client23.login("NzkyNTE4NjM3NzY3MzYwNTE0.X-e5iA.5UwnOnCl4krWidZh7764EZ85r1E");
client24.login("NzkyNTIwNDI0NzI1NDEzODk4.X-e6mw.2e25EC-_NuNSeSXCWU8VLJqPEJA");
client25.login("NzkyNTIxNTk0Njc2OTY5NTEz.X-e7cg.0Vn_cFHyEk0dscqlGwwVm_z9vAc");
client26.login("NzkyNTIyNTQ0NDg5NTYyMTUy.X-e8QA.gxcaubzwZ6AYF-QwCEBrhHqEUmw");
client27.login("NzkyNTIzMzQ5MzA0NjcyMjU2.X-e9Hw.ysj6_TtzQpElYTWXT4MuZAo21jw");
client28.login("NzkyNTI0NjA3NTY2OTA1Mzc0.X-e-Lg.apF9srv8bVCiESAUMEgIVTmSu58");
client29.login("NzkyNTI5MzM0OTkxODQ3NDYx.X-fCkA.xp5yQKVSQrHKrEjQ_XNoUTAsLYM");
client30.login("NzkyNTI5ODg2OTk1Njc3MTk1.X-fDFg.Y9NP7b_K7MxFOYcC3qptuRljSQs");
client31.login("NzkyNTMwMjY3NDcwMjk5MTM3.X-fD8Q.ZuL7O-XiRFqfBIwGuvbHTQVsWR4");
client32.login("NzkyNTMyODE1OTQyMTIzNTIw.X-fFtQ.HlcmkM7jQpfKwSfcO5pAn6m0bBUv");
client33.login("NzkyNTMxMTMzNDE3OTE0NDM4.X-fGrg.aOjArMF--EAxYVPM6Uc_seEIXuQ");
client34.login("NzkyNTM3MDE0NjA3NDEzMjQ4.X-hXaQ.IpzaOLg-SNvjXUHT2IIbwONEYVM");
client35.login("NzkyNjkwNzk0NTM5NjQ2OTk3.X-hZHA.51SXDeYK1ZolDbrFnCoHmRMMrSE");
client36.login("NzkyNjkwMzY4NDE5MzMyMTA2.X-hYjA.y34oWi6cFR7N2f2WPluh_N73mPY");
client37.login("NzkyNjkxMzYzMzI5NDc0NTYy.X-hZqg.-eocBtl_TY101a0aKxCheOB1hYg");
client38.login("NzkyNjkyOTIxMTQ0ODM2MTA3.X-ha9g.Ww1CX_HOUfkXKbBSGpkz6g3gfR8");
client39.login("NzkyNjk1Mjk5NDc3ODY0NDg4.X-hdJA.xJQib_AKb8BKQNSOam1zGONcHGs");
client40.login("NzkyNjk1NzMwNDcyMzUzODMz.X-heNA.pZeYTFfoZvUVmrWj-YP7wrnbT54");
client41.login("NzkyNjk2ODg0MTU3NjEyMDQy.X-he4g.5wzc0a4RoPSY6CqspeW7PDwAUFM");
client42.login("NzkyNzAxNDc4MDMxNTg5Mzc3.X-hi3g.5IMHXlIKNpKi4vvoQ9WOJDuomjI");
client43.login("ODAxNDk5Njk2NDIyMDYwMDUy.YAhlRw.218UB7xxHgz6B3WcAVWvSDqjNzI");
client44.login("ODAxNTAwNzQ0MzI2NTc4MjI2.YAhl3A.pXPqYtcEhYY5fwX2eGPgRQM7Z9A");
client45.login("ODAxNTAxNTM4NDc5NzY3NTg0.YAhmoA.wBCxdt9OhPZZuiKGxYiOK18ze-k");
client46.login("ODAxNTAxOTgwMDk0NjI3OTEx.YAhnJA.Bk2UWTKxCIuuqqdOxVJ-RumPiIc");
client47.login("ODAxNTAyODc2MTgxNzI1Mjk1.YAhoRg._TeGmkycyKRdMBvm3duEd9TQ_Qg");
client48.login("ODAxNTAzNzM1ODQ2MTQxOTcy.YAho7A.SAsL7bJ-ukwvfhEGxHihPF4aEb0");
client49.login("ODAxNTA0NDk4Mzk5OTY5MzIw.YAhpdw.xXAELZuqNalYWj3TcukyWfKoyvQ");
client50.login("ODAxNTA1NTQ4OTA1NjExMjc1.YAhqig.SKoEYZV1PCCrsaGNzZyy4b8eTUQ");
client51.login("ODAxNTA2MjIzNDMzNTgwNTY0.YAhrDg.ss7dmyXr9UZvNqmiZBiTPVhSSeU");
client52.login("ODAxNTA2NzE3MDc0MzI1NTM0.YAhrmw.Dp19g2LoS3fmFzIdOv9-O4RONt0");
client53.login("ODAxNTA3MjcyNjA0OTA5NjA5.YAhsGw.wCDTGFCeY9k7q5khajgPqWQ9QxQ");
client54.login("ODAxNTA3ODQ1ODYxNDA4NzY4.YAhsqA.u0aBKp7PFvFwp-v19YOlLRhtA4s");
client55.login("ODAxNTA4NDIxNDYzMzEwNDI3.YAhtRw.FMXOyjmcLhRGbzkVwd_WO3glGDA");
client56.login("ODAxNTA1MTExMzIyMTMyNTEw.YAhqAA.baDyPlhvvXKBHkj7zPhR0eqKoBU");
client57.login("ODAxNTA5NTU3MzE3OTI2OTcy.YAhuEA.1vpOKvWRYfQ2O0mocHa7lhfwnxk");
client58.login("ODAxNTEwNDA2ODI4ODUxMjUw.YAhvOw.sOo6yjDGLJ2U3oHRre09yHNgBJA");
client59.login("ODAxNTE4Njc1NzQzMjExNTkx.YAh29g.t6e7MvoWFALidukPMXU8TVZrprA");
client60.login("ODAxNTIwMDk5OTk5NjEzMDA5.YAh3_A.mpPfRDZaqza-v3rOYLqOCrJ5OJE");
client61.login("ODAxNDk4NTI0Nzk3MzcwNDM5.YAhkJQ.9WhJdYwoo_iTh6l6tJnTky8ZcNM");
client62.login("ODAxNTEwMDE5MDA2MDcwNzk0.YAhuiw.zgiXGrWBmRO6FdZ-5J8sr1N4BeE");
client63.login("ODAxNTA5MTg2MjE1MDg0MDYy.YAht4A.AXrhIuayezoSsGibgdpLq9MvtiQ");
client64.login("ODAxNTA4NjgyMTA1MzU2MzA4.YAhtVA.BhDf8-q0FBD4igCHND_onFtR2Hs");
client65.login("ODAxNTA3ODc0NjE4NDc0NTM4.YAhsvg.6bTKjbxgzPSGLsMT6HKA2wP3ZIc");
client66.login("ODAxNTA2NzQ0NTY3MDcwNzQw.YAhr2w.gsw8aDGDa3kiQjEjySLOuvWH4C0");
client67.login("ODAxNTA1NDQzMTc5NjU5MjY0.YAhqhw.pdxylJVfapOs-AQiSHGCG7tkmM8");
client68.login("ODAxNTA0ODM0MDM2ODI2MTM1.YAhpxg.A3EVk1t5vikqL_5Em88GPe_S7Pw");
client69.login("ODAxNTA0MTUwMjUyNDIxMTYw.YAhpHw.R4RTr6-LKGFeuLS6HKN5F_GmQxU");
client70.login("ODAxNTA0MTUwMjUyNDIxMTYw.YAhpHw.R4RTr6-LKGFeuLS6HKN5F_GmQxU");
client71.login("ODAxNTAzMzkyMDA5NTUxOTMy.YAhogw.sek_daqypC79Iiw5GXq61PT2L0E");
client72.login("ODAxNTAyNjgyOTI1MzY3MzE2.YAhn_A.csz8leJ3zuQniaWTcCV4CPBs4Kg");
client73.login("ODAxNTAxODY1MjM3NDEzODk4.YAhnMA.jVgAe1lRg8Dx0J998H8Nrmqbxwo");
client74.login("ODAxNTAxMzc1OTAwMDI0ODcz.YAhmjA.dopZqmOQMaCPHCK-ade7_i5ZSs");
client75.login("ODAxNTAwNjYxNTY4MjQxNzU3.YAhl-A.xB8v2rGhu566vVTyMUDDoRhsesI");
client76.login("ODAxNDk5OTYzNDM4OTIzNzg3.YAhlbw.P0VKPNbAs9U0BskFhNmW17OoJFY");
client77.login("ODAxNDk5MzY2NDA4ODQ3NDQ5.YAhkzQ._ee_T0E7HXKu6XdvlwPXU2ec0dQ");
client78.login("ODAxNTA0MTUwMjUyNDIxMTYw.YAhpHw.R4RTr6-LKGFeuLS6HKN5F_GmQxU");
client79.login("");
client80.login("");
client81.login("");
client82.login("");
client83.login("");
client84.login("");
client85.login("");
client86.login("");
client87.login("");
client88.login("");
client89.login("");
client90.login("");
client91.login("");
client92.login("");
client93.login("");
client94.login("");
client95.login("");
client96.login("");
client97.login("");
client98.login("");
client99.login("");
client100.login("");
