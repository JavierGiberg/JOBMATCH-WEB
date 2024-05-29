import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  RegisterAppContainer,
  RegisterAppForm,
} from "../styles/RegisterAppStyles";

const RegisterApp = () => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange1 = (e) => {
    setPassword1(e.target.value);
    if (e.target.value.length >= 8) {
      setPasswordError("");
    } else {
      setPasswordError("הסיסמה חייבת להכיל לפחות 8 תווים");
    }
  };

  const handlePasswordChange2 = (e) => {
    setPassword2(e.target.value);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(newEmail)) {
      setEmailError("");
      setEmail(newEmail);
    } else {
      setEmailError("כתובת אימייל לא תקינה");
      setEmail(newEmail); // עדכן בכל מקרה כדי לאפשר למשתמש לראות את ההקלדה
    }
  };

  const goToAbout = () => {
    navigate("/Login-App");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      alert("הסיסמא אינה תואמת");
      return;
    }

    if (emailError) {
      alert("אנה הכנס מייל תקין");
      return;
    }

    if (password1.length < 8) {
      alert("הסיסמה חייבת להכיל לפחות 8 תווים");
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
        alert("מייל כבר רשום למערכת");
      });
  };

  return (
    <RegisterAppContainer>
      <Typography variant="h4" gutterBottom>
        Register-App
      </Typography>
      <RegisterAppForm onSubmit={handleSubmit}>
        <Box mb={2} fullWidth>
          <TextField
            id="email"
            label="Email"
            type="text"
            value={email}
            onChange={handleEmailChange}
            error={!!emailError}
            helperText={emailError}
            fullWidth
          />
        </Box>
        <Box mb={2} fullWidth>
          <TextField
            id="password1"
            label="Password"
            type="password"
            value={password1}
            onChange={handlePasswordChange1}
            error={!!passwordError}
            helperText={passwordError}
            fullWidth
          />
        </Box>
        <Box mb={2} fullWidth>
          <TextField
            id="password2"
            label="Confirm Password"
            type="password"
            value={password2}
            onChange={handlePasswordChange2}
            fullWidth
          />
        </Box>
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Register
        </Button>
      </RegisterAppForm>
    </RegisterAppContainer>
  );
};

export default RegisterApp;
