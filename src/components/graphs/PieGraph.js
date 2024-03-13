import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Storage", "Details"],
  ["Total", 20],
  ["Used", 2],
  ["remaining", 18],
  // CSS-style declaration
];

export const options = {
  title: "My Daily Activities",
  pieHole: 0.5,
  is3D: false,
};

export default function PieGraph() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
}
