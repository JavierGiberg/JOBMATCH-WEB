import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const Chat = ({ dataTable }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = useState("");
  const ids = [];

  const handleSendMessage = async () => {
    try {
      dataTable.forEach((data) => {
        debugger;
        ids.push(data.id);
      });
    } catch (error) {
      dataTable = 0;
      console.log("error", error);
    }

    if (newMessage.trim() && user.trim()) {
      try {
        const response = await fetch(
          `http://localhost:8000/api/messages?ids=${ids}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              message: newMessage,
            }),
          }
        );
        const data = await response.json();
        setMessages([
          { user, message: newMessage },
          { user: "Bot", message: data.message },
          ...messages,
        ]);
        setNewMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "0 auto", padding: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Bot Chat
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        {messages.map((msg, index) => (
          <Box key={index} sx={{ marginBottom: 1 }}>
            <Typography variant="body1">
              <strong>{msg.user}:</strong> {msg.message}
            </Typography>
          </Box>
        ))}
      </Box>
      <TextField
        fullWidth
        label="Your name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <TextField
        fullWidth
        label="Your message"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSendMessage}
      >
        Send
      </Button>
    </Box>
  );
};

export default Chat;
