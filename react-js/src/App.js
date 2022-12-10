import React from 'react';
import Home from './Home';
import About from './components/About'
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router'
import { BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <>
     <Router>
      <Navbar/>
      <Home/>
        <Routes>
          <Route exaxt path="/" element={<Home/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
        </Routes>
     </Router>
    </>
  )
  ;

}

export default App;