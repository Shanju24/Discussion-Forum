import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Forum from "./components/Forum";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Home from "./components/Pages/Home";  // Added Home Page reference
import "./App.css"; // Import App styles if used

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route 
            path="/forum" 
            element={isAuthenticated ? <Forum /> : <Navigate to="/" />} 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
