import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import { Routes, Route } from "react-router-dom";
import Accepted from "./pages/Accepted";
import Rejected from "./pages/Rejected";
import AllUsers from "./pages/AllUsers";
//import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* 
      <NavLink exact to="/" className="App-link">
        Home
      </NavLink>
      <NavLink exact to="/about" className="App-link">
        About
      </NavLink> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
        <Route exact path="/accepted" element={<Accepted />}></Route>
        <Route exact path="/rejected" element={<Rejected />}></Route>
        <Route exact path="/allUsers" element={<AllUsers />}></Route>
      </Routes>
    </div>
  );
}

export default App;
