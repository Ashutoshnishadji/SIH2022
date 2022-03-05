import "./App.css";
import "./components/Login-Singup/Login.js";
import "./components/StudenPage/StudentPage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/Login-Singup/Login.js";
import InfoContenor from "./components/InfoContener/InfoContenor";
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <>
          <div className="container">
            <div className="row">
            <div className="col"><Login /></div>
            <InfoContenor/>
            <InfoContenor/>
            <InfoContenor/>
            </div>
          </div>
        </>

        <Routes>
          <Route exact path="/" element={<h1>Home page</h1>} />
          <Route exact path="/sagar" element={<></>} />
          <Route
            exact
            path="/ashu"
            element={
              <>
                <h1>ashu</h1>
                <Navbar />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
