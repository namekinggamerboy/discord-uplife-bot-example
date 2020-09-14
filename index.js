const UP = require("uplife-api");
const prefix = "<enter your prefix>";
var owner = "<enter your user id>";
UP.start(
  "<Enter your Bot Token>",
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
    welcomer: "true"
  }
);
  

UP.reactRoleSetup(__dirname+"/reactionRole.json");


  
UP.commandHeader({
  name: __dirname+"/commands"
});

UP.checkAfk({
    message: "> 💤**{usertag}** is currently afk. Reason: {reason}",
    autoDeleteAfk: "false"
  });
