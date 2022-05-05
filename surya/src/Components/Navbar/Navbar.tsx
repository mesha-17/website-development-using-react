import React from 'react'
import logo from '../../Images/virat.png'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <img src={logo}></img>
        <Link className="right1"to="/Raja">Hire Our Candidates</Link>
    </div>
  )
}

export default Navbar