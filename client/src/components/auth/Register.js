import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Form,Button} from 'react-bootstrap';

function Register(){
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2:''
  });

  const {name, email, password, password2} = formData;

  const onChange = e => setFormData({...formData, [e.target.name]:e.target.value});

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2){
      console.log('Passwords do not match');} else {
        console.log(formData);
      }
    };
  

    return(
    
<div className='form'>
<h2> Create Your Account </h2>
 <Form >
    <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Enter your name" name='name' value={name} onChange={e=> onChange(e)} required/>
 </Form.Group>
   
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" 
    placeholder="Enter email" name='email' value={email} onChange={e=> onChange(e)} required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={e=> onChange(e)} required />
  </Form.Group>

  <Form.Group controlId="formBasicPassword2">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm your password" name='password2' value={password2} onChange={e=> onChange(e)} required/>
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