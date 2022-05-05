import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom';
 

function Banner() {
  return (
    <div className='style'>
    <h1>
    Source our <b>Active IT Job Seekers</b>
    </h1>
    <Link className="right2"to="/Raja">Hire Our Candidates</Link>
     </div>
  )
}

export default Banner