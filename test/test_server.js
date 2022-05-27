const chai = require("chai"); // npm pkg
const ws = require("ws");

const lib = require("../lib"); // local

const expect = chai.expect;

// describe("server functionality test", function () {
//   it("Testing Socket connection and message", function (done) {
//     const test_client = new ws.WebSocket("ws://localhost:8081/");

//     test_client.on("open", () => {
//       console.log("Client:Connected");
//       test_client.on("message", (event) => {
//         console.log("Client:Connected for sending message");
//         expect(event.toString()).to.equal("sending hello");
//       });

//       test_client.send("HELLO THIS IS MY TEST MESSAGE");

//       test_client.close();
//       lib.server.close();
//       done();
//     });
//   });
// });
