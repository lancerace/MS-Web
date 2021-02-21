import React, { useState } from 'react';
import Axios from 'axios';
import style from './styles.module.css';
import logo from '../../assets/image/Maplestory_logo.png';
// prettier-ignore
import {
  makeStyles, Typography, TextField, Button, Grid
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    minHeight: '100vh',
    '& > div:nth-child(1)': { height: '0vh', border: '0px solid red' },
    '& > div:nth-child(2)': {
      marginTop: '12vh',
      boxShadow:
        '0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)'
    }
  },
  contentContainer: {
    '& > div': { padding: '1vh' },
  },
  success: {
    backgroundColor: '#1db954',
    '&:hover': { backgroundColor: '#178f41' },
  },
}));
interface IState {
  username: string;
  usernameErr: boolean;
  password: string;
  passwordErr: boolean;
}

export default function Login() {
  const [state, setState] = useState<IState>({
    username: "", usernameErr: false,
    password: "", passwordErr: false
  });

  const { mainContainer, contentContainer, success } = useStyles();
  return (
    <Grid container className={[mainContainer, style.background].join(' ')} justify="center" >

      <Grid container justify="center" alignItems="center">
        <a href={`${process.env.REACT_APP_BASE_URL}`} style={{ textAlign: "center" }}>
          <img src={logo} alt="logo" width="22%" style={{ border: "0px solid black", marginTop: "1.5vh" }}></img>
        </a>
      </Grid>

      <Grid container md={8} item alignItems="center" style={{ border: '0px solid red', backgroundColor: "white", borderRadius: "10px", height: "80vh" }} justify="center" >
        <Grid className={contentContainer} item md={4} style={{ border: '0px solid red' }}>
          <Grid container item md={12} justify="center">
            <Typography variant="h4">Welcome back!</Typography>
          </Grid>
          <Grid md={12} item>
            <div className={style.divider}>
            </div>
          </Grid>
          <Grid item md={12}>
            <TextField fullWidth label="Username" variant="outlined"
              error={state.usernameErr}
              helperText={state.usernameErr ? 'Please fill in username!' : ' '}
              value={state.username} onChange={(e) => {
                if (e.target.value === "")
                  setState({ ...state, usernameErr: true, username: e.target.value })
                else
                  setState({ ...state, username: e.target.value, usernameErr: false })
              }} />
          </Grid>
          <Grid item md={12}>
            <TextField fullWidth label="Password" variant="outlined"
              error={state.passwordErr}
              helperText={state.passwordErr ? 'Please fill in password!' : ' '}
              value={state.password} onChange={(e) => {
                if (e.target.value === "")
                  setState({ ...state, passwordErr: true, password: e.target.value })
                else
                  setState({ ...state, password: e.target.value, passwordErr: false })
              }} />
          </Grid>
          <Grid item md={12}>
            <Button
              onClick={async (e) => {
                if (state.username.length !== 0 && state.password.length !== 0) {
                const res = await Axios.post(`${process.env.REACT_APP_MSLANCER_BASE_URL}/auth/login`,
                    { username: state.username, password: state.password });
                    console.log(res);
                  alert("welcome to maplestory");
                }
                else
                  setState({ ...state, usernameErr: true, passwordErr: true })
              }}
              classes={{
                containedPrimary: success,
              }}
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              disableRipple>
              Login
          </Button>
          </Grid>
          <Grid md={12} item>
          </Grid>
        </Grid>
      </Grid>

    </Grid>


  );
}
