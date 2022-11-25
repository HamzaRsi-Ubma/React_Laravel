import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [text, setText] = useState('this is a test');

  // Declare user variable to fetch users data from database via axios 
  const [user, setUser] = useState([]);

  // fetch data from database

  // via axios 
  const fetchData = () => {
    return axios.get("http://127.0.0.1:8000/api/users")
      .then((response) => setUser(response.data['users']));
  }

  /*
  // via fetch method
  const fetchData = () => {
    return fetch("http://127.0.0.1:8000/api/users")
    .then((response)=>response.json)
    .then((data)=>setUser(data['users']))
  }*/

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">


      <h1>Welcome to React-Laravel App</h1>

      <Button>Click Here</Button>

      <h1>User List</h1>

      <ul>
        {user && user.length > 0 && user.map((userObj, index) => (
          <li key={userObj.id}> {userObj.name} </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
