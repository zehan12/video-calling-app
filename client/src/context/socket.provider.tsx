import { FC, ReactNode, createContext, useMemo } from "react";
import { io, Socket } from "socket.io-client";

interface SocketProviderProps {
  children: ReactNode;
}

interface SocketContextType {
  socket: Socket;
}

export const SocketContext = createContext<SocketContextType | null>(null);

export const SocketProvider: FC<SocketProviderProps> = ({ children }) => {
  const socket = useMemo(() => io("localhost:3000"), []);
  const contextValue = useMemo(() => ({ socket }), [socket]);

  return (
    <SocketContext.Provider value={contextValue}>
      {children}
    </SocketContext.Provider>
  );
};
