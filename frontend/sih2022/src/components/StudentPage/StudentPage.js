import React from "react";
import "./StudentPage.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import LineChart from "./LineChart";
import Profile from "./Profile";

function createData(name, ct1, ct2, halfYearly, ct3, ct4, annual) {
  return { name, ct1, ct2, halfYearly, ct3, ct4, annual };
}

const rows = [
  createData("Maths", 159, 6.0, 24, 4.0, 2, 3),
  createData("Social Studies", 237, 9.0, 37, 4, 3, 5),
  createData("Science", 262, 16.0, 24, 6, 0, 6),
  createData("English", 356, 16.0, 49, 3, 9, 6),
  createData("Hindi", 356, 16.0, 49, 3, 9, 6),
  createData("FIT", 305, 3.7, 67, 4.3, 6, 7),
];

const titles = ["CT1", "CT2", "Half-Yearly", "CT3", "CT4", "Annual"];

// const data = {
//   labels: ["january", "february", "march", "april", "may", "june","july", "august", "september", "october", "november", "december"],
//   datasets: [
//     {
//       label: "Popularity of colours",
//       data: [55, 23, 96],
//       backgroundColor: [
//         "rgba(255, 255, 255, 0.6)",
//         "rgba(255, 255, 255, 0.6)",
//         "rgba(255, 255, 255, 0.6)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };
const chartData = [
  {
    x: ["january", "february", "march", "april", "may", "june","july", "august", "september", "october", "november", "december"],
    y: [2, 6, 3],
    type: "scatter",
    mode: "lines+markers",
    marker: { color: "red" },
  },
];
const chartLayout ={width: 320, height: 240, title: 'Yearly Marks'}
function StudentPage() {
  return (
    <div>
      {/* Student Details */}
      <div className="studentDetails">
      <Profile/>
      </div>
  
      {/* <div className="lineGraph">
        <LineChart/>
      </div> */}

   

    </div>
  );
}

export default StudentPage;
