// Statistics.jsx
import React from "react";

const statisticsData = [
  { label: "Satisfied Customers", value: "10.5k" },
  { label: "Monthly Product Sales", value: "33k", highlighted: true },
  { label: "Customer Reviews and Ratings", value: "45.5k" },
  { label: "Average Annual Growth Rate", value: "25k" },
];

const Statistics = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      {statisticsData.map((stat, index) => (
        <div
          key={index}
          className={`p-4 border rounded-md ${
            stat.highlighted ? "bg-red-500 text-white" : "bg-white text-black"
          }`}
        >
          <p className="text-xl font-bold">{stat.value}</p>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
