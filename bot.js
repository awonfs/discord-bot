require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE"]
});

const BOT_PREFIX = "!"
const MOD_ME_COMMAND = "mod-me"

client.on("ready", () => {
  console.log("Our bot is ready to go!");
});

client.on("messageDelete", msg => {
  msg.channel.send("STOP DELETING STUFF!")
})
  

client.on("message", (msg) => {
  if(msg.content == "I love DJ-BOT"){
    msg.react("🥰")
  }

  if (msg.content === "!Dj") {
    msg.channel.send("Hello, I am DJ-BOT.");
  }

  if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
    modUser(msg.member)
  }
});

const modUser = (member) => {
  member.roles.add("1003275388539113602");
}

client.login(process.env.BOT_KEY);
