import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Box, Container, Typography, Paper, Button } from "@mui/material";

const RichTextEditor: React.FC = () => {
  const [content, setContent] = useState<string>("");

  // Load saved content from localStorage when the component mounts
  useEffect(() => {
    const savedContent = localStorage.getItem("richText");
    if (savedContent) setContent(savedContent);
  }, []);

  const handleChange = (value: string) => {
    setContent(value);
    localStorage.setItem("richText", value);
  };

  const handleSave = () => {
    localStorage.setItem("richText", content);
    alert("Content saved!");
    setContent(""); // Clear the editor after saving
  };

  const handleClear = () => {
    setContent("");
    localStorage.removeItem("richText");
  };

  return (
    <Container maxWidth="md" sx={{ paddingTop: "2rem" }}>
      <Paper sx={{ padding: "2rem", borderRadius: "10px", boxShadow: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Rich Text Editor
        </Typography>
        
        <ReactQuill
          value={content}
          onChange={handleChange}
          style={{ height: "300px", marginBottom: "1rem" }}
        />
        
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            sx={{ fontSize: "16px", padding: "10px 20px" }}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={handleClear}
            sx={{ fontSize: "16px", padding: "10px 20px" }}
          >
            Clear
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default RichTextEditor;
