// this is the server
"use strict";

const WebSocket = require("ws");

const server = (cfg) => {
  const { port } = cfg;
  const wss = new WebSocket.Server({ port: port });
  // const ws = wss.on("connection", () => console.log("server connected"));

  return {
    server: wss,
    connect: (cb) => {
      wss.on("connection", cb);
    },
    message: (ws, cb) => {
      console.log("inside server message");
      ws.on("message", cb);
    },
    send: (ws, msg, cb) => {
      ws.send(msg, cb);
    },
    close: (ws, cb) => {
      ws.on("close", cb);
    },
  };
};

module.exports = server;

// const wss = new WebSocket.Server({ port: 8081 });

// wss.on("connection", function connection(ws) {
//   console.log("Server:Connected");

//   ws.on("message", function (event) {
//     console.log("server: got the message", event.toString());
//   });

//   ws.send("sending hello");
// });

// module.exports = wss;

// possible features
// ask and start this server somewhere?
// ask tru the socket the address of the socket , rather the port
// ask the socket for asking
