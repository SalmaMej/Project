import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../actions/auth';
import {Form,Button} from 'react-bootstrap';

function Login({login}){
  const [formData, setFormData] = useState({
    email:'',
    password:''
  });

  const {email, password} = formData;

  const onChange = e => setFormData({...formData, [e.target.name]:e.target.value});

  const onSubmit = async e => {
    e.preventDefault();
    login(email,password);
 };
  
  
  return(
     
<div className='form'>
  <h1> Sign In </h1>
  
 <Form onSubmit={e=> onSubmit(e)}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={e=>onChange(e)}/>
 </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={e=>onChange(e)} minLength="6" />
  </Form.Group>
  
  <Button variant="primary" type="submit" value="Login">
    Login
  </Button>
 </Form>
 <p> You don't have an account? 
   <Link to="/register"> Sign Up</Link>
 </p>
</div>

);
};

Login.propTypes ={
  login: PropTypes.func.isRequired,
}
export default connect(null, {login}) (Login);