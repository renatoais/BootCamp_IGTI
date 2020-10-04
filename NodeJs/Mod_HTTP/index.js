import http from "http";

http
  .createServer((req, res) => {
    if (req.method === "GET" && req.url === "/teste") {
      res.write("GET / teste executando com suecesso ");
      res.statusCode = 200;
      res.end();
    } else {
      res.write("hello World !");
      res.statusCode = 200;
      res.end();
    }
  })
  .listen(8090);
