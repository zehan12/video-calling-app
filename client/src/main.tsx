import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { SocketProvider } from "./context/socket.provider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <SocketProvider>
      <App />
    </SocketProvider>
  </Router>
);
