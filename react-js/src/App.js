import React from 'react';
import Home from './Home';
import About from './components/About'
import ContactUs from './components/contactUs'
import Register from './components/Register'
import Thanks from './components/Thanks'
import Login from './components/Login';
import Account from './components/Account';
import Navbar from './components/Navbar';
import  Logout  from './components/Logout';
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
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/account" element={<Account/>}></Route>
          <Route exact path="/logout" element={<Logout/>}></Route>

        </Routes>
     </Router>
    </>
  )
  ;

}

export default App;