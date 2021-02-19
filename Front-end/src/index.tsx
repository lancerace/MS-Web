import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';

ReactDOM.render(
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        {/**  define root path in last for nested to work */}
        <Route path="/" component={App} />
      </Switch>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
