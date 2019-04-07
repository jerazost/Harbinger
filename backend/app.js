const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);

server.listen(8080);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", socket => {
  socket.emit("state", { hello: "Memes", status: "combat" });
  socket.on("other", data => {
    console.log(data);
  });
  socket.on("private message", (from, msg) => {
    console.log("Received pm by " + from + " saying " + msg);
  });
  socket.on('disconnect', () => {
    io.emit('user disconnected')
  })
});
