import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Box, Typography, Grid, Paper } from "@mui/material";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (!savedUser || !savedUser.email || !savedUser.password) {
      setError("No user found. Please sign up first.");
      return;
    }

    // Check if email and password match
    if (savedUser.email === email && savedUser.password === password) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");  // Redirect to dashboard after successful login
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>

        <form onSubmit={handleLogin} noValidate>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            required
          />

          {error && (
            <Typography variant="body2" color="error" align="center" sx={{ marginTop: 2 }}>
              {error}
            </Typography>
          )}

          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 3 }}>
            Login
          </Button>
        </form>

        <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
          <Grid item>
            <Typography variant="body2">
              Don't have an account?{" "}
              <a href="/signup" style={{ textDecoration: "none", color: "#1976d2" }}>
                Sign Up
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default LoginPage;