import { FormEvent, useCallback, useState } from "react";

export const Lobby = () => {
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(email, roomId);
      return;
    },
    [email, roomId]
  );

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
