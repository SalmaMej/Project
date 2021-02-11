import React from 'react';
import {Link} from 'react-router-dom';
import {Form,Button} from 'react-bootstrap';

function Login(){
    return(
     
<div className='form'>
  <h1> Sign In </h1>
  
 <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
 </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Login
  </Button>
 </Form>
 <p> You don't have an account? 
   <Link to="/register"> Sign Up</Link>
 </p>
</div>

)
}
export default Login;