import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Accepted from "./pages/Accepted";
import Rejected from "./pages/Rejected";
import AllUsers from "./pages/AllUsers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//import { NavLink } from "react-router-dom";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

  return (
    <div className="App">
      {/* 
      <NavLink exact to="/" className="App-link">
        Home
      </NavLink>
      <NavLink exact to="/about" className="App-link">
        About
      </NavLink> */}

      <QueryClientProvider client={client}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/accepted" element={<Accepted />}></Route>
          <Route exact path="/rejected" element={<Rejected />}></Route>
          <Route exact path="/allUsers" element={<AllUsers />}></Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
