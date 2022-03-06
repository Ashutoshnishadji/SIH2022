import React from 'react'
import { Line } from 'react-chartjs-2';

import Chart from 'chart.js/auto';
import "./LineChart.css";
function LineChart() {
    const labels=["January", "February", "March", "April", "May", "June", "July"];
    const data= {
        labels: labels,
        datasets: [{
            label: "My First dataset",
            data:[1,2,3,4,5,6,7],
        }]
    }
    return (
        <div className="lineChart">
            <Line data={data} width={720}/>
        </div>
    )
}

export default LineChart
