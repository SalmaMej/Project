import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

function Landing() {
  return (
    <div className="landing">
      <div className="dark">
         <h1>
          Welcome in our Sweet land
          </h1>
          <p> To tast our sweets, create an account and add all that you want to your basket</p>
          <h3>Your purchases reach you wherever you are</h3>
          <div className="nada">
           <Link to="/register"> Sign Up </Link>   
           <Link to="/login"> Login </Link>   
          </div>
      
     </div>
    </div>
  );
}

export default Landing;
