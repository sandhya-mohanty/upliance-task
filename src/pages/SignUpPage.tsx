import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography, Grid, Paper } from "@mui/material";

const SignUpPage: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ userName?: string; email?: string; password?: string }>({});
  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;
    let newErrors: { userName?: string; email?: string; password?: string } = {};

    if (!userName.trim() || userName.length < 3) {
      newErrors.userName = "Username must be at least 3 characters long.";
      valid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim() || !emailPattern.test(email)) {
      newErrors.email = "Enter a valid email address.";
      valid = false;
    }

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!password.trim() || !passwordPattern.test(password)) {
      newErrors.password = "Password must be at least 6 characters long and include a number.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const mockUserId = "user123";

    const userData = {
      email,
      userName,
      userId: mockUserId,
      password, // In real apps, never store passwords in plain text
    };

    localStorage.setItem("user", JSON.stringify(userData));

    navigate("/login");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>

        <form onSubmit={handleSignUp} noValidate>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            error={!!errors.userName}
            helperText={errors.userName}
            required
          />

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
            required
          />

          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
            required
          />

          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 3 }}>
            Sign Up
          </Button>
        </form>

        <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
          <Grid item>
            <Typography variant="body2">
              Already have an account?{" "}
              <a href="/login" style={{ textDecoration: "none", color: "#1976d2" }}>
                Login
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SignUpPage;
