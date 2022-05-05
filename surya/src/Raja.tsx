import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './Raja.css'

const Raja = () => {
  return (
    <div className='shiny'>
    <div className='jaff'>
      <div className='container'>
      <div className='z '>
        <br />
        <h1 className='abd'>Hire Our Traineees</h1>
        <br />
        <p className='max'>Please Provide Your details, Our HR will touch base with you.</p>
        <br />
      </div>
      <br />
      <div>
      <form action="" >
        <div className='john'>
        <div className='s'>*Required</div>
        <br />
        <br />
        <div  className='a' >
        <label>1.Company Name*</label>
        <br />
        <br />
        <input className='col-10' type="text" name="cname" placeholder='Enter your answer'/>
        </div>
        <br />
        <div  className='b'>
        <label >2.Email*</label>
        <br />
        <br />
        <input className='col-10'type="text" name="mail" placeholder='Enter your answer'/>
        </div>
        <br />
        <div  className='c'>
        <label >3.HR Name*</label>
        <br />
        <br />
        <input className='col-10'type="text" name="hname" placeholder='Enter your answer'/>
        </div>
        <br />
        <div className='d'>
        <label>4.Contact Number*</label>
        <br />
        <br />
        <input className='col-10'type="text" name="cno"placeholder='Enter your answer'/>
        </div>
        <br />
        <br />
        </div>
        <input className='e' type="submit" name="submit" />
     </form>
     </div>
     </div>
    </div>
</div>
  )
}

export default Raja