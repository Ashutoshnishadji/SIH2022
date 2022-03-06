import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Studentinfo from "./components/StudentPage/Studentinfo";
import Totalstudent from "./components/StudentPage/Totalstudent";
import Profile from "./components/StudentPage/Profile";
import StudentPage from "./components/StudentPage/StudentPage";
import LineChart from "./charts/LineChart";
import SubjectPage from "./components/SubjectPage/SubjectPage";
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Home />{" "}
              </>
            }
          />
          <Route
            exact
            path="/students"
            element={
              <>
                <Totalstudent />{" "}
              </>
            }
          />
          <Route
            exact
            path="/Profile"
            element={
              <>
                <StudentPage />
              </>
            }
          />
          <Route
            exact
            path="/subjectpage"
            element={
              <>
                <SubjectPage />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
