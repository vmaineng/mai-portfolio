import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>Navbar
        <br/>
        <Link to="/"> Home</Link>
        <Link to="/projects"> Projects</Link>
        <Link to="/profile"> Profile</Link>
    </div>
  )
}

export default Navbar