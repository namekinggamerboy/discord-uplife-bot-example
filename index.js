const express = require('express');

const app = express();

app.get("/", (request, response) => {

  console.log(Date.now() + " Online bot using uplife-api");

  response.sendStatus(200);

});

app.listen(process.env.PORT);


const UP = require("uplife-api");
var prefix = "<enter your prefix>";
var owner = "<enter your user id>";

UP.loginMe("< auth code>", "< bot id >");
//Bot online 10s then
setTimeout(() => {
  
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
    welcomer: "true",
    ping: "true",
    pingColor: "#0099ff"
  }
);
  

UP.reactRoleSetup(__dirname+"/reactionRole.json");

UP.checkSnipe();
  
UP.commandHeader({
  name: __dirname+"/commands"
});

UP.checkAfk({
    message: "> 💤**{usertag}** is currently afk. Reason: {reason}",
    autoDeleteAfk: "false"
  });

}, 10000);
