import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const HomeHeader: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Left side: Dashboard title */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">Dashboard</Typography>
        </Box>

        {/* Right side: Login Button */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link to="/login">
            <Button color="success" variant="contained" sx={{ marginLeft: 2 }}>
              Login
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HomeHeader;
