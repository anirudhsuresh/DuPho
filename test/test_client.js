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
