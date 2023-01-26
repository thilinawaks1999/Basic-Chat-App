import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Message(props) {
  const setCardStyle = () => {
    if (1 === props.message.id) {
      return {
        margin: 1,
        marginRight: 0,
        marginLeft: "auto",
        maxWidth: 500,
      };
    } else {
      return {
        maxWidth: 500,
        margin: 1,
        marginRight: "auto",
        marginLeft: 0,
      };
    }
  };
  return (
    <Box sx={{ margin: 2, alignItems: "end" }}>
      <Card sx={setCardStyle}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.message.name}
          </Typography>
          <Typography variant="body2">{props.message.message}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Message;
