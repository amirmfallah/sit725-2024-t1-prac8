const express = require("express");
const catRouter = require("./routers/catRouter");
const connectToDatabase = require("./dbConnection");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/cats", catRouter);

const port = process.env.PORT || 3000;

const http = require("http").createServer(app);
let io = require("socket.io")(http);
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  setInterval(() => {
    socket.emit("number", parseInt(Math.random() * 10));
  }, 1000);
});

http.listen(port, async () => {
  console.log("App listening on port", port);
  await connectToDatabase();
});
