import { Server } from "socket.io";
import { createServer } from "node:http";
import app from "./app";

const port = 3000;

const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

const emailToSocketId = new Map();
const socketIdToEmail = new Map();

io.on("connection", (socket) => {
  console.log("socket connected", socket.id);
  socket.on("room:join", (data) => {
    const { email, roomId } = data;
    emailToSocketId.set(email, socket.id);
    socketIdToEmail.set(socket.id, email);
    io.to(socket.id).emit("join:room", data);
  });
});

io.on("error", (error) => {
  console.error("Socket.IO error:", error);
});

server.listen(port, () => {
  console.log(`
          ################################################
          🚀 Server listening on port: ${port} 🚀
          ################################################
      `);
});
