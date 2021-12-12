const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const express = require('express')
const app = express()
const port = config.port;

app.get('/', (req, res) => {
  res.send('ok!')
})
app.listen(port, () => {})
client.on("ready", ()=>console.log("READY"));

const jointocreate = require("./jointocreate");
jointocreate(client);


client.login("ODk1NjA2NDE1NTQzMTE1ODA3.YV7AeQ.zDHxdG5JpWUerC-CdKzxWSE1Sj0");