import Home from './pages/Home'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Grid from '@material-ui/core/Grid';
import Ranking from './pages/Ranking';
import Login from './pages/Login';

function App() {
  return (
      <Grid container className="background">
        <Grid container>
        <NavBar hoverColor="blue">
            <NavBar.Item to="/">Home</NavBar.Item>
            <NavBar.Item to="/">Download</NavBar.Item>
            <NavBar.Item to="/ranking">Ranking</NavBar.Item>
            <NavBar.Item to="/">Vote</NavBar.Item>
            
            <NavBar.Item to="/Login">Log In</NavBar.Item>
            <NavBar.Item to="/Signup">Register</NavBar.Item>
          </NavBar>
        </Grid>


          <Switch>
            <Route path="/ranking" component={Ranking} />
            <Route path="/" component={Home} />
            <Route path="/Login" component={Login}/>
          </Switch>
      </Grid>
  );
}

export default App;
