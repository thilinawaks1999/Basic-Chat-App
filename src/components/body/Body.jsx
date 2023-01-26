import React, { useState } from "react";
import Message from "../message/Message";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import InputAdornment from "@mui/material/InputAdornment";
import { socket } from "../../App";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "../../pages/chat/chatSlice";

function Body() {
  const [message, setMessage] = useState("");
  const username = useSelector((state) => state.home.username);
  const messages = useSelector((state) => state.chat.chatArray);
  const dispatch = useDispatch();

  const sendMessage = () => {
    const messageObject = {
      message: message,
      name: username,
    };
    socket.emit("send-message", messageObject);
    dispatch(addMessage({ ...messageObject, id: 1 }));
    setMessage("");
  };

  socket.on("new-message", (message) => {
    dispatch(addMessage({ ...message, id: 2 }));
  });

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <Box
        sx={{ flexGrow: 1 }}
        style={{
          position: "fixed",
          right: "0",
          left: "0",
          top: "70px",
          zIndex: "3",
          height: "90px",
          backgroundColor: "rgb(219, 186, 142)",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              id="outlined-basic"
              label="Type your message here"
              variant="outlined"
              fullWidth
              sx={{ margin: 2 }}
              onChange={(e) => handleChange(e)}
              value={message}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              sx={{ margin: 2, height: 55, width: "86%" }}
              onClick={sendMessage}
            >
              Send
              <InputAdornment
                position="start"
                sx={{ marginLeft: 1, color: "white" }}
              >
                <SendIcon />
              </InputAdornment>
            </Button>
          </Grid>
        </Grid>
      </Box>
      {messages.map((message) => (
        <Message key={message.message + "" + message.name} message={message} />
      ))}
    </div>
  );
}

export default Body;
