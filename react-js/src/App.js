import React from 'react';
import Function from './Function';
import User from './User';
import Home from './Home';
import About from './components/About'
function App() {

  return (
    <div>
     <Function text="this is a prop from App.js"/>

     <User name={{data:'Ghazouani Hamza'}} address={{data:'Annaba'}}/>
     <Home text="this is a prop from Home class"/>
     <About content="this is About Page"/>
    </div>
  )
    ;

}

export default App;