import Home from './pages/Home'
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Grid from '@material-ui/core/Grid';
import Ranking from './pages/Ranking';
import Login from './pages/Login';
import Vote from './pages/Vote';
function App() {
  return (
      <Grid container className="background">
        <Grid container>
        <NavBar hoverColor="blue">
            <NavBar.Item to="/">Home</NavBar.Item>
            <NavBar.Item to="/">Information</NavBar.Item>
            <NavBar.Item to="/ranking">Ranking</NavBar.Item>
            <NavBar.Item to="/Vote">Vote</NavBar.Item>
            
            <NavBar.Item to="/Login">Log In</NavBar.Item>
            <NavBar.Item to="/Signup">Register</NavBar.Item>
          </NavBar>
        </Grid>


          <Switch>
            <Route path="/ranking" component={Ranking} />
            <Route path="/Login" component={Login}/>
            <Route path="/Vote" component={Vote}/>
            <Route path="/" component={Home} />
          </Switch>

          {/**footer */}
          <Grid container style={{background:"black", zIndex:99,color:"white"}}>
            <Grid item md={1}></Grid>
            <Grid item md>All images or property related to nexon are rightfully belongs to nexon. © </Grid>
            </Grid>
      </Grid>
  );
}

export default App;
