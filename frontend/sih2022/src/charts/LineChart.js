import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

import { Label, ScaleOutlined } from "@mui/icons-material";
export default function LineChart(props) {
  return (
    <>
      <Line
     data={
       {
         labels: props.labels,
         datasets: props.datasets,
          //  {
          //    label: "A",
          //    data: [10 , 15 , 20 , 16 , 25]
          //  }
        
       }
       
     }
    
      />
    </>
  );
}
