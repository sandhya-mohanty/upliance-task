// // // import React, { useState, useEffect } from "react";
// // // import { Bar } from "react-chartjs-2";
// // // import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
// // // // import { useSpring, animated } from "react-spring";
// // // import { useNavigate } from "react-router-dom";

// // // // Register chart.js components
// // // ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// // // const DashboardPage: React.FC = () => {
// // //   const [counter, setCounter] = useState(0);
// // //   const [color, setColor] = useState<string>("rgb(210, 112, 112)");
// // //   const [user, setUser] = useState<any>({});
// // //   const navigate = useNavigate();
// // //   // Fetch user data from localStorage
// // //   useEffect(() => {
// // //     const savedUser = JSON.parse(localStorage.getItem("user") || "{}");
// // //     setUser(savedUser);
// // //   }, []);

// // //   // Handle counter increment, decrement, and reset
// // //   const increment = () => {
// // //     setCounter(prevCounter => {
// // //       const newCounter = prevCounter + 1;
// // //       updateBackgroundColor(newCounter);
// // //       return newCounter;
// // //     });
// // //   };

// // //   const decrement = () => {
// // //     setCounter(prevCounter => {
// // //       const newCounter = prevCounter - 1;
// // //       updateBackgroundColor(newCounter);
// // //       return newCounter;
// // //     });
// // //   };

// // //   const reset = () => {
// // //     setCounter(0);
// // //     setColor("rgb(255, 255, 255)"); // Reset background color
// // //   };

// // //   // Update background color based on counter value
// // //   const updateBackgroundColor = (count: number) => {
// // //     const newColor = `rgb(${count * 10 % 255}, ${count * 5 % 255}, ${count * 3 % 255})`;
// // //     setColor(newColor);
// // //   };

// // //   // Chart data for user profile trends (mock data)
// // //   const chartData = {
// // //     labels: ["Jan", "Feb", "Mar", "Apr", "May"],
// // //     datasets: [
// // //       {
// // //         label: "User Engagement",
// // //         data: [65, 59, 80, 81, 56],
// // //         backgroundColor: "rgba(75, 192, 192, 0.2)",
// // //         borderColor: "rgba(75, 192, 192, 1)",
// // //         borderWidth: 1,
// // //       },
// // //     ],
// // //   };

// // //   const chartOptions = {
// // //     responsive: true,
// // //     plugins: {
// // //       title: {
// // //         display: true,
// // //         text: "User Engagement Trends",
// // //       },
// // //     },
// // //   };

// // //   // React Spring animation for smooth transitions
// // //   const animationProps = useSpring({
// // //     opacity: 1,
// // //     from: { opacity: 0 },
// // //     reset: true,
// // //     reverse: counter % 2 === 0,
// // //   });

// // //   return (
// // //     <animated.div style={animationProps}>
// // //       <div style={{ backgroundColor: color, minHeight: "100vh", transition: "background-color 0.5s ease-in-out" }}>
// // //         <div className="container mx-auto p-4">
// // //           <h1 className="text-4xl font-bold text-center mb-4">Welcome to your Dashboard, {user.email}</h1>

// // //           <div className="flex justify-center mb-4">
// // //             <div className="mr-4">
// // //               <button
// // //                 onClick={increment}
// // //                 className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
// // //               >
// // //                 Increment
// // //               </button>
// // //             </div>
// // //             <div className="mr-4">
// // //               <button
// // //                 onClick={decrement}
// // //                 className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
// // //               >
// // //                 Decrement
// // //               </button>
// // //             </div>
// // //             <div>
// // //               <button
// // //                 onClick={reset}
// // //                 className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700"
// // //               >
// // //                 Reset
// // //               </button>
// // //             </div>
// // //           </div>

// // //           <div className="flex justify-center mb-8">
// // //             <h2 className="text-2xl font-semibold">Current Counter: {counter}</h2>
// // //           </div>

// // //           {/* User Engagement Chart */}
// // //           <div className="mb-8">
// // //             <Bar data={chartData} options={chartOptions} />
// // //           </div>

// // //           {/* Logout Button */}
// // //           <div className="text-center">
// // //             <button
// // //               onClick={() => {
// // //                 localStorage.removeItem("user");
// // //                 navigate("/login");
// // //               }}
// // //               className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
// // //             >
// // //               Logout
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </animated.div>
// // //   );
// // // };

// // // export default DashboardPage;




// // // Dashboard.tsx (Updated)




// // import React, { useState, useEffect } from "react";
// // import { Box, Typography, Button } from "@mui/material";
// // import { useNavigate } from "react-router-dom";
// // import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
// // import BarChartComponent from "../components/BarChartComponent";
// // import PieChartComponent from "../components/PieChartComponent";
// // // import BarChartComponent from "./BarChart";  // Import the BarChart component
// // // import PieChartComponent from "./PieChart";  // Import the PieChart component

// // const DashboardPage: React.FC = () => {
// //   const navigate = useNavigate();
// //   const [counterData, setCounterData] = useState<any[]>([]);  // Placeholder for counter data
// //   const [user, setUser] = useState<any | null>(null);

// //   // Simulate fetching user data from localStorage
// //   useEffect(() => {
// //     const savedUser = localStorage.getItem("user");
// //     if (savedUser) {
// //       setUser(JSON.parse(savedUser));
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (user) {
// //       // Mock fetching user trends (Replace with actual data fetching logic)
// //       const mockData = [
// //         { time: "10:00 AM", counter: 5 },
// //         { time: "10:05 AM", counter: 10 },
// //         { time: "10:10 AM", counter: 15 },
// //         { time: "10:15 AM", counter: 20 },
// //         { time: "10:20 AM", counter: 25 },
// //       ];
// //       setCounterData(mockData);
// //     }
// //   }, [user]);

// //   const handleSignOut = () => {
// //     localStorage.removeItem("user");
// //     navigate("/login");
// //   };

// //   return (
// //     <Box textAlign="center" sx={{ mt: 5 }}>
// //       <Typography variant="h4">Welcome to your Dashboard!</Typography>
// //       {user ? (
// //         <Box>
// //           <Typography variant="h6">Hello, {user.name}</Typography>
// //           <Typography variant="body1">Email: {user.email}</Typography>
// //           <Button variant="contained" color="secondary" onClick={handleSignOut}>
// //             Sign Out
// //           </Button>

// //           {/* Counter Trend Chart */}
// //           <Box sx={{ mt: 3 }}>
// //             <Typography variant="h5">Counter Trend</Typography>
// //             <ResponsiveContainer width="100%" height={400}>
// //               <LineChart data={counterData}>
// //                 <CartesianGrid strokeDasharray="3 3" />
// //                 <XAxis dataKey="time" />
// //                 <YAxis />
// //                 <Tooltip />
// //                 <Legend />
// //                 <Line type="monotone" dataKey="counter" stroke="#8884d8" />
// //               </LineChart>
// //             </ResponsiveContainer>
// //           </Box>

// //           {/* Bar Chart - Task Completion Comparison */}
// //           <Box sx={{ mt: 3 }}>
// //             <Typography variant="h5">Task Completion by Category</Typography>
// //             <BarChartComponent />
// //           </Box>

// //           {/* Pie Chart - Task Distribution */}
// //           <Box sx={{ mt: 3 }}>
// //             <Typography variant="h5">Task Distribution</Typography>
// //             <PieChartComponent />
// //           </Box>
// //         </Box>
// //       ) : (
// //         <Typography variant="body1">You are not logged in.</Typography>
// //       )}
// //     </Box>
// //   );
// // };

// // export default DashboardPage;



// import React, { useState, useEffect } from "react";
// import { Box, Typography, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
// import Navbar from "../components/Navbar";

// // Mock function for real-time data
// const fetchCounterData = (count: number) => {
//   return [
//     { time: "10:00 AM", counter: count },
//     { time: "10:05 AM", counter: count + 5 },
//     { time: "10:10 AM", counter: count + 10 },
//     { time: "10:15 AM", counter: count + 15 },
//     { time: "10:20 AM", counter: count + 20 },
//   ];
// };

// const DashboardPage: React.FC = () => {
//   const navigate = useNavigate();
//   const [counterData, setCounterData] = useState<any[]>([]);  // Placeholder for counter data
//   const [user, setUser] = useState<any | null>(null);

//   // Simulate fetching user data from localStorage
//   useEffect(() => {
//     const savedUser = localStorage.getItem("user");
//     if (savedUser) {
//       setUser(JSON.parse(savedUser));
//     }
//   }, []);

//   // Simulate real-time data update (e.g., every 5 seconds)
//   useEffect(() => {
//     if (user) {
//       const interval = setInterval(() => {
//         const newData = {
//           time: new Date().toLocaleTimeString(),
//           counter: Math.floor(Math.random() * 30) + 1,  // Random counter value
//         };
//         setCounterData((prevData) => [...prevData, newData]);
//       }, 5000);  // Update every 5 seconds

//       // Cleanup interval on component unmount
//       return () => clearInterval(interval);
//     }
//   }, [user]);
 

//   return (
//     <Box>
//       {/* Navbar Component */}
//       {user ? (
//         <>
//         <Navbar />

//         {/* Counter Trend Chart */}
//         <Box sx={{ mt: 3, textAlign: "center" }}>
//           <Typography variant="h5">Counter Trend (Real-time)</Typography>
//           <ResponsiveContainer width="100%" height={400}>
//             <LineChart data={counterData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="time" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line type="monotone" dataKey="counter" stroke="#8884d8" />
//             </LineChart>
//           </ResponsiveContainer>
//         </Box>
//         </>
//       )
      
//       :('')}
//     </Box>
//   );
// };

// export default DashboardPage;



import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import BarChartComponent from "../components/BarChartComponent";
import PieChartComponent from "../components/PieChartComponent";
import Navbar from "../components/Navbar";
 // Import the PieChart component

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
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
          {/* <Typography variant="h6">Hello, {user.name}</Typography>
          <Typography variant="body1">Email: {user.email}</Typography>
          <Button variant="contained" color="secondary" onClick={handleSignOut}>
            Sign Out
          </Button> */}

          {/* Counter Trend Chart */}
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

