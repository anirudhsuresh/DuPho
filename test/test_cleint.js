// const chai = require("chai"); // npm pkg

// // TODO fix tests for client to ensure they work []

// const WebSocket = require("ws");
// const lib = require("../lib"); // local
// const expect = chai.expect;

// describe("client functionality test", function () {
//   //   it("Testing for connection and message", () => {
//   //     const wss = new WebSocket.Server({ port: 8002 });
//   //     wss.on("connection", function connection(ws) {
//   //       console.log("Server:Connected");
//   //       //   ws.on("message", function (event) {
//   //       //     console.log("server: got the message", event.toString());
//   //       //   });
//   //       //   ws.send("sending hello");
//   //       //   test_server.close();
//   //       //   lib.client.close();
//   //       done();
//   //     });
//   it("testing if client opens and sends a", function (done) {
//     const wss = new WebSocket.Server({ port: 8003 });
//     wss.on("connection", function connection(ws) {
//       console.log("connected client");
//     });
//     wss.close();
//     done();
//   }); //   });
// });

const chai = require("chai"); // npm pkg
const WebSocket = require("ws");

const lib = require("../lib"); // local

const expect = chai.expect;

describe("client function test", function () {
  it("Testing Socket connection and message", function (done) {
    const test_server = new WebSocket.Server({ port: 8005 });
    test_server.on("connection", () => {
      console.log("Server is connected to client");
      test_server.on("message", (event) => {
        console.log("Client:Connected for sending message");
        expect(event.toString()).to.equal("sending hello");
      });
      test_server.close();
      // lib.client.close();
      done();
    });
  });
});
