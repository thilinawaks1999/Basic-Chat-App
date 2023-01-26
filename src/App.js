import React from "react";
import Routers from "../src/routes/Routers";
import "./App.css";
import io from "socket.io-client";

export const socket = io.connect("http://localhost:4000", {
  transports: ["websocket"],
});

function App() {
  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
