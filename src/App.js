// import React from 'react'
// import CanvasJS from 'canvasjs';
// import  CanvasJSChart from 'canvasjs';
// function App() {
//   return (
//     <div>

//     </div>
//   )
// }
// import CanvasJS from 'canvasjs';
// export default App

import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  SplineSeries,
  Legend,
  Tooltip,
} from "@devexpress/dx-react-chart-material-ui";
import { ValueScale, Animation } from "@devexpress/dx-react-chart";
import { EventTracker } from "@devexpress/dx-react-chart";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const generateData = (start, end, step) => {
      const m = 1.08 * Math.pow(9.1, -31);
      const h = 6.626 * Math.pow(10, -34);
      const data = [];
      for (let i = start; i < end; i += step) {
        data.push({
          // splineValue: Math.sin(i) / i,
          // lineValue: (i / 15) ** 2.718 - 0.2,
          argument: i,
          splineValue:
            Math.sqrt((2 * Math.PI * m) / h ** 2) /
            Math.sqrt(i * 1.6021773 * Math.pow(10, -22)),
          // lineValue:
          //   Math.sqrt((2 * Math.PI * m) / h ** 2) /
          //   Math.sqrt(i * 1.6021773 * Math.pow(10, -22)),
        });
      }

      return data;
    };
    let dat = generateData(2, 100, 5);
    setData(dat);
    console.log(dat);
  }, []);

  return (
    <div>
      <Paper>
        <Chart data={data}>
          <ArgumentAxis />
          <ValueAxis />

          <LineSeries valueField="lineValue" argumentField="argument" />
          <SplineSeries valueField="splineValue" argumentField="argument" />
          {/* <Animation /> */}
          <Legend />
          <EventTracker />
          <Tooltip />
        </Chart>
      </Paper>
      {/* <button onClick={() => setData(generateData(3.5, 22, 0.5))}>
        Change value
      </button> */}
    </div>
  );
}

export default App;
