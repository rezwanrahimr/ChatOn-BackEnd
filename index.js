const express = require("express");
const app = express();
const port = process.env.port | 5000;

app.get("/", (req, res) => {
  res.send("ChatOn Server is Running !");
});

app.listen(port, () => {
  console.log("ChatOn Server is Running : ", port);
});
