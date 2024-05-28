import React, { useState } from "react";
import {
  Box,
  Button as MuiButton,
  FormControl,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LoginContainer, LoginButton } from "../styles/LoginAppStyles";
import PrivateRoute from "./PrivateRoute";

const LoginApp = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleClickRegister = () => {
    navigate("/Register-App");
  };

  const handleClickLogIn = () => {
    fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        navigate("/MainApp");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <LoginContainer>
      <Typography variant="h4" gutterBottom>
        LogIn-App
      </Typography>
      <form onSubmit={PrivateRoute}>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="email">Email</InputLabel>
          <TextField
            id="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="password">Password</InputLabel>
          <TextField
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </FormControl>
        <MuiButton
          onClick={handleClickLogIn}
          variant="contained"
          color="primary"
          className={LoginButton}
          type="button"
        >
          LogIn
        </MuiButton>
        <MuiButton
          onClick={handleClickRegister}
          variant="outlined"
          color="secondary"
          className={LoginButton}
          type="button"
        >
          Register
        </MuiButton>
      </form>
    </LoginContainer>
  );
};

export default LoginApp;
