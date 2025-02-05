import React, { useState, useEffect } from "react";
import { Button, TextField, Box, Typography, Paper } from "@mui/material";

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const [isDirty, setIsDirty] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });


  // Generate a unique User ID on mount
  useEffect(() => {
    setFormData((prev) => ({ ...prev, userId: `USER-${Date.now()}` }));
  }, []);

  // Warn about unsaved changes when the user tries to close the page
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue = "You have unsaved changes!";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsDirty(true);
  };


  const validateForm = () => {
    const errors: any = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.address) errors.address = "Address is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is not valid";
    }
    if (!formData.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number must be 10 digits";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    localStorage.setItem("userData", JSON.stringify(formData));
    setIsDirty(false);
    alert("User data saved successfully!");
    setFormData({
      userId: `USER-${Date.now()}`,
      name: "",
      address: "",
      email: "",
      phone: "",
    });
  };

  return (
    <Paper sx={{ maxWidth: 500, mx: "auto", p: 3, mt: 5, borderRadius: 3, boxShadow: 3 }}>
      <Typography variant="h5" align="center" gutterBottom>
        User Data Form
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          required
          sx={{ backgroundColor: "#f9f9f9", borderRadius: 1 }}
          error={!!formErrors.name}
          helperText={formErrors.name}
        />
        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          required
          sx={{ backgroundColor: "#f9f9f9", borderRadius: 1 }}
          helperText={formErrors.name}

        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          required
          sx={{ backgroundColor: "#f9f9f9", borderRadius: 1 }}
        />
        <p>{formErrors.email}</p>
        <TextField
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          required
          sx={{ backgroundColor: "#f9f9f9", borderRadius: 1 }}
        />
        <p>{formErrors.phone}</p>
        
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: 600,
            borderRadius: 2,
            '&:hover': {
              backgroundColor: "#3b82f6", // Slightly darker blue on hover
            },
          }}
        >
          Save
        </Button>
      </Box>
    </Paper>
  );
};

export default UserForm;
