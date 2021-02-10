import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
  <Router>
    <div>
      <Navbar/>  
      <Route exact path='/' component={Landing}/>
      <section className='container'>
        <Switch>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/login' component={Login}/>
        </Switch>

      </section>

    </div>
  </Router> 
  );
}

export default App;
