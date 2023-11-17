const http = require("http");
const todo = [
  {
    id: 1,
    text: "todo app",
  },
  {
    id: 2,
    text: "todo app two",
  },
  {
    id: 3,
    text: "todo app three",
  },
];

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "application/json");

  res.end(JSON.stringify({
    "success":true,
    data:todo
  }));
});

const PORT = 4000;

server.listen(PORT, () => console.log(`server is running ${PORT}`));
