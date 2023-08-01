const express = require("express");
const { chats } = require("./data/data");

const app = express();

app.get('/', (req, res) => {
  res.send("Your API works!");
});

app.get('/api/chat', (req, res) => {
  res.send(chats)
});

app.listen(8000, console.log("Server is running on PORT 8000"));