// Emoji id command

const up = require("uplife-api");
module.exports = {
run: async (option) => {
  if(!option.message[0]) return option.channel.send("please give me emoji name");
let emoji = up.customEmoji(option.message[0]);
  option.channel.send(`emoji id- **${emoji.id}**\nemoji name- **${emoji.name}**\n emoji url- ${emoji.url}`);
},
command: {
name: "emojiid",
aliases: ["ei"]
}
} 
