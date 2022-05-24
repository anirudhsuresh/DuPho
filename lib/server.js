// this is the server
"use strict";

const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8081 });

wss.on("connection", function connection(ws) {
  console.log("Server:Connected");

  ws.on("message", function (event) {
    console.log("server: got the message", event.toString());
  });

  ws.send("sending hello");
});

module.exports = wss;

// possible features
// ask and start this server somewhere?
// ask tru the socket the address of the socket , rather the port
// ask the socket for asking
