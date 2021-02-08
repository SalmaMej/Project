import React from 'react';
import logo from '../img/logo.jpg'

function Navbar() {
  return (
    <div className="navbar">
        <div >
           <a className="logo" href="index.html">
             <img src='/logo.jpg'/>  
           <h1> Sweet Land </h1> 
           </a> 
        </div>
      <ul>
          <li><a href='#'></a>Our products</li>
          <li><a href='#'></a>Local</li> 
          <li><a href='#'></a>Login</li> 
      </ul>
      
    </div>
  );
}

export default Navbar;
