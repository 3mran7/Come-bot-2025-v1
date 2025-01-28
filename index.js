const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`http://localhost:${port}`)); 

const Discord = require('discord.js');
const client = new Discord.Client();



const prefix = "+"//prefix | البريفكس

client.on("ready", async () => {
  console.log(`${client.user.tag}`)
  await client.user.setStatus('dnd')
});


// Dont Touch | لا تعبث بالكود
client.on("message", async (message) => {
if (
    message.content.startsWith(prefix + "come") ||
    message.content.startsWith(prefix + "تعال")
  ) {
if(message.author.bot) return; 
if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`:x: | <@${message.author.id}> You Must Have ``MANAGE_GUILD`` Permission!`);
const id = message.content.slice(0).trim().split(/ +/)
var args = message.content.split(" ").slice(2);
var come = args.join(" ");
let user = message.mentions.members.first() || message.guild.members.cache.get(id[1])
if(!user) return message.reply(`**:x: I can't find this user \nUsage: ${prefix}come <user> (message)**`)
if(!come) return message.reply(`**:x: Please type a reason \nUsage: ${prefix}come <user> (reason)**`)
user.send(`**Please Come To <#${message.channel.id}> \nFor ${user}\n Reason : ${come}**`)
let embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`**✅ | Done Sending To ${user}**`)
.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
message.channel.send(embed)
}
})


 client.login("توكن البوت")