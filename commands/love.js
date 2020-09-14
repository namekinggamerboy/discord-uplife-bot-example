const UP = require("uplife-api");

exports.run = async (option) => {

option.msg.react("♥️");
  option.channel.send({ embed: {
    title: "find your love!!",
    color: "#FF00FF",
    description: `${option.author}  ${UP.randomNum(1, 100)}% love <@${option.randomUser.id}> `
}});

}

exports.command = {
  name:"love",
  aliases: ["l"]
}
