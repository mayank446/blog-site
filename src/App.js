import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/home.js";
import Home_nav from "./components/Home_nav.jsx";
import Register from "./pages/register.js";
import LogIn from "./pages/login.js";
import SinglePage from "./pages/single_page.js";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/single" element={<SinglePage />} />
      </Routes>
    </Router>
  );
}

export default App;
