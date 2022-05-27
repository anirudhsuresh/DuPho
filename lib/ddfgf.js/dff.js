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
const ws = require("ws");
const lib = require("../lib"); // local

const expect = chai.expect;

describe("new test", function () {
  it("should pass", function (done) {
    const testServer = lib.server({ port: 8006 });
    const cli = lib.client({ ip4: "localhost", port: 8006 });

    console.log("websocket open", WebSocket.OPEN);
    console.log("websocket closed", WebSocket.CLOSED);

    testServer.connect((ws) => {
      testServer.message(ws, (event) => {
        console.log("client: connected for sending message", event.toString());
        expect(event.toString()).to.equal("testing the client");
        testServer.send(ws, "sending response to client", () => {
          console.log("server sent msg to client");
          console.log("before server close", ws.readyState);
          testServer.close(ws, () => {
            console.log("closed server");
            console.log("after server close", ws.readyState);
          });
        });
      });
    });

    // testServer.on("connection", (ws) => {
    //   console.log("Server is connected to client");
    //   ws.on("message", (event) => {
    //     console.log("Client:Connected for sending message", event.toString());
    //     expect(event.toString()).to.equal("testing the client");
    //     ws.close();
    //   });
    // });

    cli.open(() => {
      console.log("client connected");
      cli.send("testing the client", () => {
        console.log("client sending message");
        cli.message((event) => {
          console.log("given message", event.toString());
          console.log("before client close", cli.client.readyState);
          cli.close(() => {
            console.log("closed client");
            console.log("after client close", cli.client.readyState);
          });
        });
      });
    });

    // client.on("open", () => {
    //   console.log("client connected111");
    //   client.send("testing the client");
    //   client.on("message", (event) => {
    //     console.log("given message", event.toString());

    //     client.close();
    //   });
    // });

    // cli(() => {
    //   console.log("client connected111");
    //   console.log("wsc", wsc);
    //   // wsc.on("connection", () => {
    //   //   wsc.send("testing the client");
    //   // });
    // });

    //   console.log("sent message");
    // });
    // testServer.close();
    // lib.client.close();
    // });
    done();
  });
});

// describe("client function test", function () {
//   it("Testing Socket connection and message", function (done) {
//     const test_server = new WebSocket.Server({ port: 8005 });
//     // lib.client.
//     test_server.on("connection", () => {
//       console.log("Server is connected to client");
//       test_server.on("message", (event) => {
//         console.log("Client:Connected for sending message");
//         expect(event.toString()).to.equal("sending hello");
//       });
//       test_server.close();
//       // lib.client.close();
//       done();
//     });
//   });
// });
// can i create web socket
// send a message from server
// send message from client
//
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
const ws = require("ws");
const lib = require("../lib"); // local

const expect = chai.expect;

describe("new test", function () {
  it("should pass", function (done) {
    const testServer = lib.server({ port: 8006 });
    const cli = lib.client({ ip4: "localhost", port: 8006 });

    console.log("websocket open", WebSocket.OPEN);
    console.log("websocket closed", WebSocket.CLOSED);

    testServer.connect((ws) => {
      testServer.message(ws, (event) => {
        console.log("client: connected for sending message", event.toString());
        expect(event.toString()).to.equal("testing the client");
        testServer.send(ws, "sending response to client", () => {
          console.log("server sent msg to client");
          console.log("before server close", ws.readyState);
          testServer.close(ws, () => {
            console.log("closed server");
            console.log("after server close", ws.readyState);
          });
        });
      });
    });

    cli.open(() => {
      console.log("client connected");
      cli.send("testing the client", () => {
        console.log("client sending message");
        cli.message((event) => {
          console.log("given message", event.toString());
          console.log("before client close", cli.client.readyState);
          cli.close(() => {
            console.log("closed client");
            console.log("after client close", cli.client.readyState);
          });
        });
      });
    });
    done();
  });
});
