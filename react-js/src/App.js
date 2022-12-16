import React from 'react';
import Home from './Home';
import About from './components/About'
import ContactUs from './components/contactUs'
import Register from './components/Register'
import Thanks from './components/Thanks'
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <>
     <Router>
      <Navbar/>
        <Routes>
          <Route exaxt path="/" element={<Home/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/contact-us" element={<ContactUs/>}></Route>
          <Route exact path="/register" element={<Register/>}></Route>
          <Route exact path="/thanks" element={<Thanks/>}></Route>
        </Routes>
     </Router>
    </>
  )
  ;

}

export default App;