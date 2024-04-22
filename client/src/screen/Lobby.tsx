import { FormEvent, useCallback, useEffect, useState } from "react";
import { useSocket } from "../hooks/use-socket";
import { useNavigate } from "react-router-dom";

export const Lobby = () => {
  const navigate = useNavigate();
  const socketContext = useSocket();
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(email, roomId);
      socketContext?.socket.emit("room:join", { email, roomId });
      return;
    },
    [email, roomId, socketContext]
  );

  const handleRoomJoin = useCallback(
    ({ email, roomId }: { email: string; roomId: string }) => {
      console.log(email, roomId);
      navigate(`room/${roomId}`);
      return;
    },
    [navigate]
  );

  useEffect(() => {
    socketContext?.socket.on("join:room", handleRoomJoin);
    return () => {
      socketContext?.socket.off("join:room");
    };
  }, [socketContext, handleRoomJoin]);

  return (
    <div>
      <h1>Lobby</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email ID</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Email ID"
        />
        <br />
        <label htmlFor="roomId">Room Number</label>
        <input
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          type="text"
          name="roomId"
          placeholder="Room Number"
        />
        <br />
        <button type="submit" style={{ cursor: "pointer" }}>
          Join
        </button>
      </form>
    </div>
  );
};
