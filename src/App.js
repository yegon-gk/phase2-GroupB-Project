
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
// import Contact from "./Components/Contact";
import Service from "./Components/Service";
import "./styles.css";
import data from "./db.json"; 

export default function App() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    setTours(data.tours);
  }, []);


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service tours={tours} />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
        {/* <Route path="/Signup" element={<SignUp />} /> */}
      </Routes>
    </div>
  );
}
