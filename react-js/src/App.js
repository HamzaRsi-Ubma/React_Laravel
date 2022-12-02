import React from 'react';
import Function from './Function';
import User from './User';
import Home from './Home';
function App() {

  return (
    <div>
     <Function text="this is a prop from App.js"/>

     <User name={{data:'Ghazouani Hamza'}} address={{data:'Annaba'}}/>
     <Home text="this is a prop from Home class"/>
    </div>
  )
    ;

}

export default App;