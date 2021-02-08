import React from 'react';
import {Button} from 'react-bootstrap';



function Login() {
  return (
    <div >
         <h1>
          Welcome in our Sweet land
          </h1>
          <p> To tast our sweets, create an account and add all that you want to your basket</p>
          <h3>Your purchases reach you wherever you are</h3>
          <div>
           <button variant="primary"> Sign Up </button>   
           <button variant="secondary"> Login </button>   

          </div>
     
    </div>
  );
}

export default Login;
