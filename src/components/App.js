//import logo from './logo.svg';
//import React, { useState, useEffect } from "react";
import "../App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import ContactPage from "../pages/ContactPage";
import ProjectPage from "../pages/ProjectPage";
import { Routes, Route } from "react-router-dom";
import { Text } from '@chakra-ui/react'

function App() {

  return (
    <div className="App">
  
        <Navbar />
        <Text fontSize='6xl'>Welcome to Mai's portfolio website!</Text>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/projects"
            element={<ProjectPage />}
          />
        </Routes>
      
     
    </div>
  );
}

export default App;
