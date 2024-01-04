const http = require("http");
const deleteReq = require("./methods/delete-request");
const putReq = require("./methods/put-request");
const postReq = require("./methods/post-request");
const getReq = require("./methods/get-request");
let movies = require("./data/movies.json");

const PORT = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
  req.movies = movies;

  switch (req.method) {
    case "GET":
      getReq(req, res);
      break;
    case "POST":
      postReq(req, res);
      break;
    case "PUT":
      putReq(req, res);
      break;
    case "DELETE":
      deleteReq(req, res);
      break;
    default:
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

