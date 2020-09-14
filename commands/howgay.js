const up = require("uplife-api");
exports.run = async (option) => {
  let channel = option.channel;
  if(!option.mentionUser) return option.channel.send("❌ | please mention");
  
  channel.send({ embed: {
    title: "hoegay? let find.",
    description: `${option.mentionUser} ${up.randomNum(1, 100)}% 🏳️‍🌈\n[only fun] `
  }});
  
}
exports.command = {
  name: "howgay",
  aliases: ["hg"]
}
