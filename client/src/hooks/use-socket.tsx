import { useContext } from "react";
import { SocketContext, SocketContextType } from "../context/socket.provider";

export const useSocket = (): SocketContextType => {
  const socket = useContext(SocketContext);

  if (!socket) {
    throw new Error("useSocket must be used within a SocketProvider");
  }

  return socket;
};
