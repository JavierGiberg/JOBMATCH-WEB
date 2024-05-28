import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  RegisterAppContainer,
  RegisterAppForm,
} from "../styles/RegisterAppStyles";

const RegisterApp = () => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange1 = (e) => {
    setPassword1(e.target.value);
  };

  const handlePasswordChange2 = (e) => {
    setPassword2(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const goToAbout = () => {
    navigate("/Login-App");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      alert("Passwords do not match");
      return;
    }

    fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password: password1 }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(`email: ${email}, password: ${password1}`);
        console.log(`from api: ${JSON.stringify(data)}`);
        alert("Register to JOBMATCH");
        goToAbout();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <RegisterAppContainer>
      <Typography variant="h4" gutterBottom>
        Register-App
      </Typography>
      <RegisterAppForm onSubmit={handleSubmit}>
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
          <InputLabel htmlFor="password1">Password</InputLabel>
          <TextField
            id="password1"
            type="password"
            value={password1}
            onChange={handlePasswordChange1}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="password2">Confirm Password</InputLabel>
          <TextField
            id="password2"
            type="password"
            value={password2}
            onChange={handlePasswordChange2}
          />
        </FormControl>
        <Button variant="contained" color="primary" type="submit">
          Register
        </Button>
      </RegisterAppForm>
    </RegisterAppContainer>
  );
};

export default RegisterApp;
