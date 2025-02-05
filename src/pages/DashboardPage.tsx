
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import BarChartComponent from "../components/BarChartComponent";
import PieChartComponent from "../components/PieChartComponent";
import Navbar from "../components/Navbar";
 // Import the PieChart component

const DashboardPage: React.FC = () => {
  const [counterData, setCounterData] = useState<any[]>([]);  // Placeholder for counter data
  const [user, setUser] = useState<any | null>(null);

  // Simulate fetching user data from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Simulate real-time data update (e.g., every 5 seconds)
  useEffect(() => {
    if (user) {
      const interval = setInterval(() => {
        const newData = {
          time: new Date().toLocaleTimeString(),
          counter: Math.floor(Math.random() * 30) + 1,  // Random counter value
        };
        setCounterData((prevData) => [...prevData, newData]);
      }, 5000);  // Update every 5 seconds

      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }
  }, [user]);

  

  return (
    <Box >
      <Navbar/>
      <Typography variant="h4" textAlign="center" sx={{ mt: 5 }}>Welcome to your Dashboard!</Typography>
      {user ? (
        <Box textAlign="center" sx={{ mt: 5 }}>
          <Box sx={{ mt: 3 }}>
            <Typography variant="h5">Counter Trend</Typography>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={counterData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="counter" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </Box>

          {/* Bar Chart - Task Completion Comparison */}
          <Box sx={{ mt: 3 }}>
            <Typography variant="h5">Task Completion by Category</Typography>
            <BarChartComponent />
          </Box>

          {/* Pie Chart - Task Distribution */}
          <Box sx={{ mt: 3 }}>
            <Typography variant="h5">Task Distribution</Typography>
            <PieChartComponent />
          </Box>
        </Box>
      ) : (
        <Typography variant="body1">You are not logged in.</Typography>
      )}
    </Box>
  );
};

export default DashboardPage;

