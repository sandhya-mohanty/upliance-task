import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Button, Box, Typography, Container, Grid } from "@mui/material";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // Load count from localStorage when the component mounts
  useEffect(() => {
    const savedCount = localStorage.getItem("counter");
    if (savedCount) setCount(Number(savedCount));
  }, []);

  // Save count to localStorage on change
  useEffect(() => {
    localStorage.setItem("counter", count.toString());
  }, [count]);

  // Background animation based on count
  const bgStyle = useSpring({
    backgroundColor: `rgba(0, 150, 255, ${Math.min(count / 10, 1)})`, // Bezier-like transition
    config: { tension: 120, friction: 14 },
  });

  return (
    <Container maxWidth="sm">
      <animated.div
        style={{
          ...bgStyle,
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Counter: {count}
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCount(count + 1)}
              sx={{ width: 120, fontSize: "16px", padding: "10px" }}
            >
              Increment
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setCount(count - 1)}
              sx={{ width: 120, fontSize: "16px", padding: "10px" }}
            >
              Decrement
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="error"
              onClick={() => setCount(0)}
              sx={{ width: 120, fontSize: "16px", padding: "10px" }}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </animated.div>
    </Container>
  );
};

export default Counter;
