import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
// Redux
import {Provider} from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
  <Provider store={store}>
  <Router>
     <Navbar/>  
      <div className="cont">
        <Route exact path='/' component={Landing}/>
        <Switch>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </div>
   </Router> 
   </Provider> 
  );
}

export default App;
