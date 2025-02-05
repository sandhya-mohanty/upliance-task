import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Counter from "../components/Counter";
import RichTextEditor from "../components/RichTextEditer";
import UserForm from "../components/UserForm";
import HomeHeader from "../components/HomeHeader";
import FormObj from "../components/FormObj";


const Home: React.FC = () => {
  return (
  <>
  <HomeHeader/>
    <Container sx={{ mt: 5 }}>
      {/* Title */}
      <Typography variant="h4" align="center" gutterBottom>
        Home Dashboard
      </Typography>

      {/* First Row: Counter and RichTextEditor */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {/* Counter */}
          <Grid item xs={12} sm={6}>
            <Box
              p={2}
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                height: "100%",
                textAlign: "center",
              }}
            >
              <Counter />
            </Box>
          </Grid>

          {/* RichTextEditor */}
          <Grid item xs={12} sm={6}>
            <Box
              p={2}
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                height: "100%",
              }}
            >
              <RichTextEditor />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Second Row: User Forms */}
      <Box>
        <Grid container spacing={4} justifyContent="center">
          {/* User Form 1 */}
          <Grid item xs={12} sm={6}>
            <Box
              p={2}
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                height: "100%",
              }}
            >
              <Typography variant="h6" align="center" gutterBottom>
                User Data (JSON Object)
              </Typography>
              <FormObj/>
            </Box>
          </Grid>

          {/* User Form 2 */}
          <Grid item xs={12} sm={6}>
            <Box
              p={2}
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                height: "100%",
              }}
            >
              <Typography variant="h6" align="center" gutterBottom>
                Additional User Info
              </Typography>
              <UserForm />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
    </>

  );
};

export default Home;
