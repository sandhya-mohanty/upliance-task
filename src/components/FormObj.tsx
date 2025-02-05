import React, { useState, useEffect } from "react";
import { Button, TextField, Typography, Paper } from "@mui/material";

const FormObj = () => {
  const [userData, setUserData] = useState({
    userId: "",
    name: "",
  });

  const [jsonInput, setJsonInput] = useState("");

  useEffect(() => {
    // Generate a unique User ID on mount
    const uniqueId = `USER-${Date.now()}`;
    const initialData = {
      userId: uniqueId,
      name: "",
    };
    setUserData(initialData);
    setJsonInput(JSON.stringify(initialData, null, 2)); // Initialize JSON input field
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleJsonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const jsonString = e.target.value;
    setJsonInput(jsonString);

    try {
      // Validate and parse the JSON input
      const parsedData = JSON.parse(jsonString);
      setUserData(parsedData);
    } catch (error) {
      console.error("Invalid JSON input:", error);
    }
  };

  const handleSave = () => {
    console.log("Saved Data:", userData);
    alert("Data saved successfully!");
  };

  return (
    <Paper
      sx={{
        maxWidth: 400,
        p: 3,
        borderRadius: 3,
        boxShadow: 3,
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        UserData JSON Object
      </Typography>
      <TextField
        label="Edit JSON Object"
        value={jsonInput}
        onChange={handleJsonChange}
        fullWidth
        multiline
        rows={5}
        variant="outlined"
        sx={{ mb: 3 }}
      />
      <TextField
        label="Name"
        name="name"
        value={userData.name}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        sx={{ mb: 3 }}
      />
      <TextField
        label="ID (Auto-generated)"
        value={userData.userId}
        disabled
        fullWidth
        variant="outlined"
        sx={{ mb: 3 }}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleSave}>
        Save
      </Button>
    </Paper>
  );
};

export default FormObj;
