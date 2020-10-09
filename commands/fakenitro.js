//Fakenitro command

const up = require("uplife-api");
module.exports = {
run: async (option) => {
option.channel.send({ embed: {
  title: "nitro Time",
  image: { url: "https://cdn.discordapp.com/attachments/585182097577213965/635058785118978049/5d632407d7a405a9898ed4e3af8c0cda3ea2425c72c75bfca0313e66cb8237f2xedy9ugkqo621-1280x624.png", },
  description: `${option.randomUser} you win nitro😂😂[only fun]`,
  color: 0xFF00FF
}});
},
command: {
name: "fakenitro",
aliases: ["fn"]
}
} 
