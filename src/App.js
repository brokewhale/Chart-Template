import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [
  { name: "Page A", uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20] },
  { name: "Page B", uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
  { name: "Page C", uv: 280, pv: 1398, amt: 2400, uvError: 40 },
  { name: "Page D", uv: 200, pv: 9800, amt: 2400, uvError: 20 },
  { name: "Page E", uv: 278, pv: null, amt: 2400, uvError: 28 },
  { name: "Page F", uv: 189, pv: 4800, amt: 2400, uvError: [90, 20] },
  { name: "Page G", uv: 189, pv: 4800, amt: 2400, uvError: [28, 40] },
  { name: "Page H", uv: 189, pv: 4800, amt: 2400, uvError: 28 },
  { name: "Page I", uv: 189, pv: 4800, amt: 2400, uvError: 28 },
  { name: "Page J", uv: 189, pv: 4800, amt: 2400, uvError: [15, 60] },
];

function App() {
  return (
    <div>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
}

export default App;
