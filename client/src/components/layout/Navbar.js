import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../img/logo.jpg';

function Navbar() {
  return (
    <div className="navbar">
        <div >
           <Link className="logo" to="/">
             <img src='/logo.jpg'/>
              
           <h1> Sweet Land </h1> 
           </Link> 
        </div>
      <ul>
          <li><Link to='/'>Our products</Link></li>
          <li><Link to='/register'>Register</Link></li> 
          <li><Link to='/login'>Login</Link></li> 
      </ul>
      
    </div>
  );
}

export default Navbar;
