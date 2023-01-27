import React from "react";
import Header from "../../components/header/Header";
import Body from "../../components/body/Body";

function Chat() {
  return (
    <div>
      <Header />
      <div style={{ height: "70px" }}></div>
      <Body />
      <div style={{ height: "90px" }}></div>
    </div>
  );
}

export default Chat;
