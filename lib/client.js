"use strict";

const ws = require("ws");

const client = new ws.WebSocket("ws://localhost:8005/");

client.on("open", () => {
  console.log("client connected111");
  client.send("testing the client");
  client.on("message", (event) =>
    console.log("given message", event.toString())
  );
});

module.exports = client;
