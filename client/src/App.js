import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Cart from './components/shopping-cart/Cart';
import Alert from './components/layout/Alert';


// Redux
import {Provider} from 'react-redux';
import store from './store';
import { loadUser} from './actions/auth';
import setAuthToken from './utiles/setAuthToken';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}   

function App() {
  useEffect(()=>{
    store.dispatch(loadUser());
  }, []);
  return (
  <Provider store={store}>
  <Router>
     <Navbar/>  
      <div className="cont">
        <Route exact path='/' component={Landing}/>
        <Alert/>
        <Switch>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
        <Cart/> 
      </div>
   </Router> 
   </Provider> 
  );
}

export default App;
