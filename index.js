const prefix = "U";
const UP = require("uplife-api");

var status = "{prefix}help | {users}Members;
var owner = "<enter your user id>";
UP.start(
  process.env.TOKEN, 
  status,
  "WATCHING",
  "idle",
  prefix,
  owner,
  {
    util: "true",
    mod: "true",
    giveaway: "true",
    reaction: "🎉",
    giveawaystorage: __dirname+"/giveaway.json",
    giveawayembed: "🎉🎉**START GIVEAWAY**🎉🎉",
    giveawaymessage: "🎉🎉**start giveaway**🎉🎉",
    participate: "click to 🎉 participate",
    music: "true",
    youtubekey: "<enter your YouTube v3 api>",
    economy: "true",
    help: "true",
    welcomer: "true",
    statusTime: 20000
  }
);
  


/* afk ceck system */
  UP.checkAfk({
    message: "> 💤**{usertag}** is currently afk. Reason: {reason}",
    autoDeleteAfk: "true"
  });

/* custom Commands */
UP.commandHeader({
  name: __dirname+"/commands",
  prefix: prefix
}); 
