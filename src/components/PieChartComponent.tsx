import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Sample data for the pie chart
const data = [
  { name: "Completed", value: 80 },
  { name: "Pending", value: 20 },
];

const COLORS = ["#0088FE", "#00C49F"];

const PieChartComponent: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie 
          data={data} 
          dataKey="value" 
          nameKey="name" 
          cx="50%" 
          cy="50%" 
          outerRadius={150} 
          label
        >
          {data.map((_, index) => (  // Removed "entry" since it's unused
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
