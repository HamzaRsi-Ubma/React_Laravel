import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="#">React-Laravel</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About Us</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact-us">Contact Us</Link>
          </li>
        {

          localStorage.getItem('user')?
          <>
            <li class="nav-item">
            <Link class="nav-link" to="/account">Account</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/logout">Logout</Link>
          </li>
          </>
          :
          <>
          <li class="nav-item">
            <Link class="nav-link" to="/register">Register</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/login">Login</Link>
          </li>
          </>
          
        }
        </ul>

      </div>
    </nav>




  );
}




export default Navbar

/*

    
*/