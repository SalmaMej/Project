import React from 'react';
import {Link} from 'react-router-dom';
import {Form,Button} from 'react-bootstrap';

function Register(){
    return(
<div>
<h1> Create Your Account </h1>
 <Form>
 <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Enter your name" />
 </Form.Group>
   
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword2">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password2" placeholder="Confirm your password" />
  </Form.Group>
  
  <Button variant="primary" type="register">
    Register
  </Button>
 </Form>
 <p> Already have an account? 
   <Link to="/login"> Sign In</Link>
 </p>
</div>
)
}
export default Register;