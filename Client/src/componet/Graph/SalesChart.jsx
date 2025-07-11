import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "JUL", amount: 60 },
  { month: "AUG", amount: 62 },
  { month: "SEP", amount: 76 },
  { month: "OCT", amount: 130 },
  { month: "NOV", amount: 100 },
  { month: "DEC", amount: 400 },
];

const SalesChart = () => {
  return (
    <div className="w-full h-[200px] ">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <defs>
            <linearGradient id="whiteToBlue" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#1B59F8" />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" vertical={false} horizontal={true} />
          <XAxis
            dataKey="month"
            stroke="#e0e0e0"
            tick={{ fill: "#000000", fontSize: 12, fontWeight: 500 }}
          />
          <YAxis
            tickFormatter={(value) => `₹${value}`}
            tick={{ fontSize: 12, fontWeight: 500 }}
            stroke="#"
          />

          <Tooltip formatter={(value) => `₹${value}`} />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="url(#whiteToBlue)"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
