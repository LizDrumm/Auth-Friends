import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import './App.css';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
       <li>
          <Link to ="/login">Login</Link>
          </li>
        <li>
     <Link to ="/protected">Friends (Protected)</Link>
    </li>
      </ul>
      <Switch>
          <PrivateRoute exact path='/protected' component={FriendsList} /> 
          <Route path='/login' component={Login} /> 
          {/* will redirect to the login page  */}
          {/* <Route path='/' component={Login} />  */}
          {/* this is just rendering the login when you hit the website- making the login page the home page  */}
        </Switch>
    </div>
    </Router>
  );
}


export default App;
