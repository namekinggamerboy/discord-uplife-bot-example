const UP = require("uplife-api");
exports.run = async (option) => {

 option.channel.send({ embed: {title: "click 💪 to get power role", color: "0099ff" }}).then(msg => {

UP.reactionRoleCreate({

messageId: msg.id,

msg: option.msg, /* or message */

react: "💪", /* react */

roleName: "power" /* role name */

})

}); 
  
}

exports.command = {
  name: "reactionrole",
  aliases: ["rr"]
}
