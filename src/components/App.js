//import logo from './logo.svg';
//import React, { useState, useEffect } from "react";
import "../App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import ProfilePage from "../pages/ProfilePage";
import ProjectPage from "../pages/ProjectPage";

import { Routes, Route } from "react-router-dom";

function App() {
  // const [profile, projects, setProfile, setProjects] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:4000/projects")
  //     .then((r) => r.json())
  //     .then(setProjects);
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route
            path="/projects"
            element={<ProjectPage />}
          />
        </Routes>
        <h1>Welcome to Mai's portfolio website!</h1>
      </header>
    </div>
  );
}

export default App;
