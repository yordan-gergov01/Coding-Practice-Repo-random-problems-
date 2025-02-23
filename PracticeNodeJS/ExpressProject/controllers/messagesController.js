const path = require("path");

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "Skiing.jpg"));
  //   res.send("<ul><li>Hello message!</li></ul>");
}

function postMessage(req, res) {
  console.log("Adding or updating messages...");
}

module.exports = { getMessages, postMessage };
