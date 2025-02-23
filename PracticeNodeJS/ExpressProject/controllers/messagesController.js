function getMessages(req, res) {
  res.send("<ul><li>Hello message!</li></ul>");
}

function postMessage(req, res) {
  console.log("Adding or updating messages...");
}

module.exports = { getMessages, postMessage };
