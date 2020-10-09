// Rolecolor command
const up = require("uplife-api");
module.exports = {
run: async (option) => {
if(!option.checkAdmin) return option.channel.send("only admin");
  if(!option.mentionRole) return option.channel.send("please give me color then mention role ex.<prefix>rc <color code> @memtion role");
up.colorRole(option.mentionRole.name, option.message[0]);
 option.channel.send("successful change role color.👍"); 
},
command: {
name: "rolecolor",
aliases: ["rc"]
}
} 
