import { Server } from "socket.io";
import { createServer } from "node:http";
import app from "./app";

const port = 3000;

const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("socket connected", socket.id);
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
