import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Banner';
import Navbar from './Components/Navbar/Navbar'; 
// import Banner from './Pages/Home/Banner';
// import Cart from './Cart';
import {Routes,Route} from 'react-router-dom';
import Maincontent from './Maincontent';
import Raja from './Raja';




function App() {
  return (
    <div>
      
      {/* <Navbar />     */}
      <Routes>
        <Route path='/'element={<Maincontent/>}></Route>
        <Route path='/Raja'element={<Raja />}></Route>


      </Routes>
    </div>
  );
}

export default App;
