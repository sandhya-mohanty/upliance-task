import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [user, setUser] = useState<{ userName: string; email: string } | null>(null);

  // Retrieve user data from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse and set user from localStorage
    }
  }, []);

  // Handle sign-out: remove user data from localStorage
  const handleSignOut = () => {
    localStorage.removeItem("user"); // Remove user data from localStorage
    setUser(null); // Clear the state
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">Dashboard</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {user ? (
            <>
              <Typography variant="body1" sx={{ marginRight: 2 }}>
                {user.userName}
              </Typography>
              <Button color="secondary" variant="contained" onClick={handleSignOut}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button color="success" variant="contained">Login</Button>
              </Link>
             
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
