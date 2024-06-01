//http
const http = require("http");

const server = http.createServer((request, response) => {
  console.log("I am Here");
});

server.listen(3005, "127.0.0.1", (err) => {
  if (!err) {
    console.log("Server is listining to port: 3005");
    console.log("Press CTRL+C to disconnet server");
  }
});
