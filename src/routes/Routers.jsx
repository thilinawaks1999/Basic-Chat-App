import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./../pages/home/Home";
import Chat from "./../pages/chat/Chat";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default Routers;
