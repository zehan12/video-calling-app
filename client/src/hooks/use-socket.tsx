import { useContext } from "react";
import { SocketContext } from "../context/socket.provider";

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};
