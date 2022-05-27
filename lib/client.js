"use strict";

const ws = require("ws");

const client = (cfg) => {
  const { ip4, port } = cfg;
  const wsc = new ws.WebSocket("ws://" + ip4 + ":" + port + "/");

  return {
    client: wsc,
    open: (cb) => {
      wsc.on("open", cb);
    },
    message: (cb) => {
      wsc.on("message", cb);
    },
    send: (msg, cb) => {
      wsc.send(msg, cb);
    },
    close: (cb) => {
      console.log("closing client");
      console.log("client readyState", wsc.readyState);
      wsc.close();
      console.log("client new readyState", wsc.readyState);
      // wsc.on("close", cb);
    },
  };
};

module.exports = client;
