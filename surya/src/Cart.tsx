  import React from 'react'
import './Cart.css';
import data from  './data.json'
const Cart = () => {
  return (
    <div>
    <div>
        <h1 className='mesha'>Active IT Jobseeker</h1>
    </div>
    <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <div className="row">
        {data.map((item,index)=>
       <div key={index} className="col-4" style={{marginTop:'10px'}}>
       <div className="card-1">
         <div className="card">
           <div className="card-body">
             <div className="row">
               <div className="col-2">
                 <img src={item.img} alt="ananth"  style={{width:"70px",height:"70px"}}/>
               </div>
               <div className="col-8">
                 <h2>{item.name}</h2>
                 <p>{item.native}</p>
               </div>
               <div className="col-2">
                 <h5>1</h5>
                 <h5>2</h5>
               </div>
             </div>
             
             <div className="row">
               <div className="col-4">
                 <div className='right '>
                   <h5>Primary Skills</h5>
                   <p>Html,Css,Bootstrap,JavaScript,<br />WordPress,React.</p>
                   <h5>Secondary Skills</h5>
                   <p>Visual Studio Code,Git</p>
                   <h5>Expected Salary</h5>
                   <p>2.5L</p>
                 </div>
               </div>
               <div className="col-8">
                 <div className='left'>
                   <h5>{item.B}</h5>
                   <h5>{item.H}</h5>
                   <h5>{item.S}</h5> 
                   <h5>Availability to join</h5>
                   <p>Immediate</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div> )}
          {/* <div class="col-4">
            <div class="card-2">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-2">
                      <img src="../Images/ananth" alt="ananth" />
                    </div>
                    <div class="col-8">
                      <h2>Messak</h2>
                      <p>from valliyur</p>
                    </div>
                    <div class="col-2">
                      <h5>1</h5>
                      <h5>2</h5>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-4">
                      <div className='right'>
                        <h5>Primary Skills</h5>
                        <p>Html,Css,Bootstrap,JavaScript,<br />WordPress,React.</p>
                        <h5>Secondary Skills</h5>
                        <p>Visual Studio Code,Git</p>
                        <h5>Expected Salary</h5>
                        <p>2.5L</p>
                      </div>
                    </div>
                    <div class="col-8">
                      <div className='left'>
                        <h5>Education</h5>
                        <p>BE - CSE - 2021 - 8.06 CGPA.</p>
                        <p>HSC - State Board - 2017 - 79%.</p>
                        <p>SSLC - State Board - 2015 - 85%.</p>
                        <h5>Availability to join</h5>
                        <p>Immediate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div class="col-4">
            <div class="card-1">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-2">
                      <img src="../Images/ananth" alt="ananth" />
                    </div>
                    <div class="col-8">
                      <h2>MariRaja</h2>
                      <p>from Tenkasi</p>
                    </div>
                    <div class="col-2">
                      <h5>1</h5>
                      <h5>2</h5>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-4">
                      <div className='right'>
                        <h5>Primary Skills</h5>
                        <p>Html,Css,Bootstrap,JavaScript,<br />WordPress,React.</p>
                        <h5>Secondary Skills</h5>
                        <p>Visual Studio Code,Git</p>
                        <h5>Expected Salary</h5>
                        <p>4.5L</p>
                      </div>
                    </div>
                    <div class="col-8">
                      <div className='left'>
                        <h5>Education</h5>
                        <p>BE - CSE - 2021 - 10 CGPA.</p>
                        <p>HSC - State Board - 2017 - 98%.</p>
                        <p>SSLC - State Board - 2015 - 95%.</p>
                        <h5>Availability to join</h5>
                        <p>Immediate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div class="col-4">
            <div class="card-1">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-2">
                      <img src="../Images/ananth" alt="ananth" />
                    </div>
                    <div class="col-8">
                      <h2>MariRaja</h2>
                      <p>from Tenkasi</p>
                    </div>
                    <div class="col-2">
                      <h5>1</h5>
                      <h5>2</h5>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-4">
                      <div className='right'>
                        <h5>Primary Skills</h5>
                        <p>Html,Css,Bootstrap,JavaScript,<br />WordPress,React.</p>
                        <h5>Secondary Skills</h5>
                        <p>Visual Studio Code,Git</p>
                        <h5>Expected Salary</h5>
                        <p>4.5L</p>
                      </div>
                    </div>
                    <div class="col-8">
                      <div className='left'>
                        <h5>Education</h5>
                        <p>BE - CSE - 2021 - 10 CGPA.</p>
                        <p>HSC - State Board - 2017 - 98%.</p>
                        <p>SSLC - State Board - 2015 - 95%.</p>
                        <h5>Availability to join</h5>
                        <p>Immediate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    {/* <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-4">
            <div class="card-1">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-2">
                      <img src="../Images/ananth" alt="ananth" />
                    </div>
                    <div class="col-8">
                      <h2>kabilash</h2>
                      <p>from Rajakobalaperi</p>
                    </div>
                    <div class="col-2">
                      <h5>1</h5>
                      <h5>2</h5>
                    </div>
                  </div>
                  
                  <div class="row">
                    <div class="col-4">
                      <div className='right '>
                        <h5>Primary Skills</h5>
                        <p>Html,Css,Bootstrap,JavaScript,<br />WordPress,React.</p>
                        <h5>Secondary Skills</h5>
                        <p>Visual Studio Code,Git</p>
                        <h5>Expected Salary</h5>
                        <p>2.5L</p>
                      </div>
                    </div>
                    <div class="col-8">
                      <div className='left'>
                        <h5>Education</h5>
                        <p>BSC-Pyshicis - 2021 - 7.4 CGPA.</p>
                        <p>HSC - State Board - 2017 - 75%.</p>
                        <p>SSLC - State Board - 2015 - 83%.</p>
                        <h5>Availability to join</h5>
                        <p>Immediate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card-2">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-2">
                      <img src="../Images/ananth" alt="ananth" />
                    </div>
                    <div class="col-8">
                      <h2>chandru</h2>
                      <p>from kelapavoor</p>
                    </div>
                    <div class="col-2">
                      <h5>1</h5>
                      <h5>2</h5>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-4">
                      <div className='right'>
                        <h5>Primary Skills</h5>
                        <p>Html,Css,Bootstrap,JavaScript,<br />WordPress,React.</p>
                        <h5>Secondary Skills</h5>
                        <p>Visual Studio Code,Git</p>
                        <h5>Expected Salary</h5>
                        <p>2.5L</p>
                      </div>
                    </div>
                    <div class="col-8">
                      <div className='left'>
                        <h5>Education</h5>
                        <p>DME - Mech - 2017 - 8.05 CGPA.</p>
                        <p>HSC - State Board - 2017 - 74%.</p>
                        <p>SSLC - State Board - 2015 - 80%.</p>
                        <h5>Availability to join</h5>
                        <p>Immediate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card-1">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-2">
                      <img src="../Images/ananth" alt="ananth" />
                    </div>
                    <div class="col-8">
                      <h2>Rubus</h2>
                      <p>from Akarakattu</p>
                    </div>
                    <div class="col-2">
                      <h5>1</h5>
                      <h5>2</h5>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-4">
                      <div className='right'>
                        <h5>Primary Skills</h5>
                        <p>Html,Css,Bootstrap,JavaScript,<br />WordPress,React.</p>
                        <h5>Secondary Skills</h5>
                        <p>Visual Studio Code,Git</p>
                        <h5>Expected Salary</h5>
                        <p>2.5L</p>
                      </div>
                    </div>
                    <div class="col-8">
                      <div className='left'>
                        <h5>Education</h5>
                        <p>BCA - 2021 - 8.07 CGPA.</p>
                        <p>HSC - State Board - 2017 - 74%.</p>
                        <p>SSLC - State Board - 2015 - 83%.</p>
                        <h5>Availability to join</h5>
                        <p>Immediate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/* <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-4">
            <div class="card-1">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-2">
                      <img src="../Images/ananth" alt="ananth" />
                    </div>
                    <div class="col-8">
                      <h2>Simson</h2>
                      <p>from Akarakattu</p>
                    </div>
                    <div class="col-2">
                      <h5>1</h5>
                      <h5>2</h5>
                    </div>
                  </div>
                  
                  <div class="row">
                    <div class="col-4">
                      <div className='right '>
                        <h5>Primary Skills</h5>
                        <p>Html,Css,Bootstrap,JavaScript,<br />WordPress,React.</p>
                        <h5>Secondary Skills</h5>
                        <p>Visual Studio Code,Git</p>
                        <h5>Expected Salary</h5>
                        <p>3.5L</p>
                      </div>
                    </div>
                    <div class="col-8">
                      <div className='left'>
                        <h5>Education</h5>
                        <p>BE - Mech - 2021 - 8.09 CGPA.</p>
                        <p>HSC - State Board - 2017 - 74%.</p>
                        <p>SSLC - State Board - 2015 - 83%.</p>
                        <h5>Availability to join</h5>
                        <p>Immediate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card-2">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-2">
                      <img src="../Images/ananth" alt="ananth" />
                    </div>
                    <div class="col-8">
                      <h2>Grace</h2>
                      <p>from Senkottai</p>
                    </div>
                    <div class="col-2">
                      <h5>1</h5>
                      <h5>2</h5>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-4">
                      <div className='right'>
                        <h5>Primary Skills</h5>
                        <p>Html,Css,Bootstrap,JavaScript,<br />WordPress,React.</p>
                        <h5>Secondary Skills</h5>
                        <p>Visual Studio Code,Git</p>
                        <h5>Expected Salary</h5>
                        <p>2.5L</p>
                      </div>
                    </div>
                    <div class="col-8">
                      <div className='left'>
                        <h5>Education</h5>
                        <p>BE - CSE - 2016 - 7.20 CGPA.</p>
                        <p>HSC - State Board - 2012 - 74%.</p>
                        <p>SSLC - State Board - 2010 - 83%.</p>
                        <h5>Availability to join</h5>
                        <p>Immediate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card-1">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-2">
                      <img src="../Images/ananth" alt="ananth" />
                    </div>
                    <div class="col-8">
                      <h2>Sudalai</h2>
                      <p>from Sambavarvadakarai</p>
                    </div>
                    <div class="col-2">
                      <h5>1</h5>
                      <h5>2</h5>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-4">
                      <div className='right'>
                        <h5>Primary Skills</h5>
                        <p>Html,Css,Bootstrap,JavaScript,<br />WordPress,React.</p>
                        <h5>Secondary Skills</h5>
                        <p>Visual Studio Code,Git</p>
                        <h5>Expected Salary</h5>
                        <p>2.5L</p>
                      </div>
                    </div>
                    <div class="col-8">
                      <div className='left'>
                        <h5>Education</h5>
                        <p>BE - CSE - 2021 - 9.99 CGPA.</p>
                        <p>HSC - State Board - 2017 - 74%.</p>
                        <p>SSLC - State Board - 2015 - 83%.</p>
                        <h5>Availability to join</h5>
                        <p>Immediate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
  </div>

    </div>
  )
}

export default Cart