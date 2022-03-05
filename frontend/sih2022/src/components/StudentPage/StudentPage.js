import React from "react";
import "./StudentPage.css";
import Plot from 'react-plotly.js';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
        <section className="rows">
          <div className="group">
            <p className="keys">Name </p>:<p> Sagar Nishad</p>
          </div>
          <div className="group">
            <p className="keys">Roll No </p>:<p> 10142</p>
          </div>
          <div className="group">
            <p className="keys">Class </p>:<p> 10</p>
          </div>
        </section>
        <section className="rows">
          <div className="group">
            <p className="keys">Admission No </p>:<p> 24</p>
          </div>
          <div className="group">
            <p className="keys">DOB </p>:<p> 27/02/2002</p>
          </div>
        </section>
      </div>
      {/* ************************************************************************************************ */}
      <div className="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Subjects</TableCell>
                {titles.map((title) => (
                  <TableCell align="right">{title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.ct1}</TableCell>
                  <TableCell align="right">{row.ct2}</TableCell>
                  <TableCell align="right">{row.halfYearly}</TableCell>
                  <TableCell align="right">{row.ct3}</TableCell>
                  <TableCell align="right">{row.ct4}</TableCell>
                  <TableCell align="right">{row.annual}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {/* ************************************************************************************************ */}

      <div className="lineGraph">
        <Plot data={chartData} layout={chartLayout}/>
        
      </div>
    </div>
  );
}

export default StudentPage;
