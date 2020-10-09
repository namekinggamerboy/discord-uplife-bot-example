
const up = require("uplife-api");

exports.run = async (option) => {
let Discord = option.discord;
let msg = option.msg;
let message = option.message;
let guild = option.guild;
let author = option.author;

up.getSnipe({
channelId: msg.channel.id,
errorMsg: { embed: { title:"❌ | nothing snipe message", color: "#FF0000" }},
embedColor: "#0099ff",
embedAuthor: "{usertag} message delete find me",
embedFooterMsg: "snipe message 😁"
});

}
exports.command = {
  name: "snipe",
  aliases: [""]
};
