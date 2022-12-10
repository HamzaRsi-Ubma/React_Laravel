import React from 'react';
import Home from './Home';
import About from './components/About'
import ContactUs from './components/contactUs'
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
        </Routes>
     </Router>
    </>
  )
  ;

}

export default App;