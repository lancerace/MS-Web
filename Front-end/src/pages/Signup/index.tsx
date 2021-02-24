import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from './styles.module.css';
import logo from '../../assets/image/Maplestory_logo.png';
import Axios from 'axios';

// prettier-ignore
import {
  makeStyles, Link, Typography, TextField, Button, Grid
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
  email: string;
}
export default function Login() {
  const history = useHistory();
  const [state, setState] = useState<IState>({
    username: "", usernameErr: false,
    password: "", passwordErr: false,
    email: ""
  });

  const { mainContainer, contentContainer, success } = useStyles();

  return (
    <Grid container className={[mainContainer, style.background].join(' ')} justify="center" >

      <Grid container justify="center" alignItems="center">
        <a href={`${process.env.REACT_APP_BASE_URL}`} style={{ textAlign: "center" }}>
          <img src={logo} alt="logo" width="22%" style={{ border: "0px solid black", marginTop: "1.5vh" }}></img>
        </a>
      </Grid>

      <Grid container item md={8} alignItems="center" style={{ border: '0px solid red', backgroundColor: "white", borderRadius: "10px", height: "80vh" }} justify="center" >
        <Grid className={contentContainer} item md={4} style={{ border: '0px solid red' }}>
          <Grid container item md={12} justify="center">
            <Typography variant="subtitle2" />
          </Grid>
          <Grid item md={12} container justify="center">
            <Button
              disabled
              fullWidth
              color="primary"
              variant="contained"
              size="large"
              disableRipple>
              Sign up with facebook
          </Button>
          </Grid>
          <Grid md={12} item>
            <div className={style.divider}>
              <strong>or</strong>
            </div>
          </Grid>
          <Grid item md={12}>
            <TextField fullWidth label="Username" variant="outlined"
              error={state.usernameErr}
              helperText={state.usernameErr ? 'Please fill in username!' : ''}
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
              helperText={state.passwordErr ? state.password.length > 13 ? 'Password must be not be more than 14 characters' : 'Please fill in password!' : ''}
              value={state.password} onChange={(e) => {
                if (e.target.value === "" || e.target.value.length > 14)
                  setState({ ...state, passwordErr: true, password: e.target.value })
                else
                  setState({ ...state, password: e.target.value, passwordErr: false })
              }} />
          </Grid>

          <Grid item md={12}>
            <TextField fullWidth label="Email" variant="outlined"
              value={state.email} onChange={(e) => {
                setState({ ...state, email: e.target.value })
              }} />
          </Grid>

          <Grid md={12} item>
            <Typography variant="body2" align="center">
              By signing up, you agree to MS's&nbsp;
            <Link
                href="/terms-and-condition"
                onClick={() => {
                }}>
                Terms and Conditions&nbsp;
            </Link>
            and&nbsp;
            <Link
                href="/privacy-policy"
                onClick={() => {
                }}>
                Privacy Policy.
            </Link>
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Button
              onClick={async () => {
                if (state.username.length !== 0 && state.password.length !== 0 && state.password.length <= 14) {
                  const { data } = await Axios.post(`${process.env.REACT_APP_MSLANCER_BASE_URL}/auth/register`,
                    { username: state.username, password: state.password, email: state.email });

                  console.log(data.affectedRows);
                  if (data.code === "ER_DUP_ENTRY")
                    alert("Account already exist!");
                  else
                    if (data.affectedRows > 0) {
                      alert("Registered. Welcome to SeaMS!");
                      history.push("/home");
                    }
                    else
                      alert("A problem has occurred while registering, please contact the GM");
                }
                else {
                  if (state.username.length === 0)
                    setState({ ...state, usernameErr: true, passwordErr: false })
                  else if (state.password.length === 0 || state.password.length > 14)
                    setState({ ...state, usernameErr: false, passwordErr: true })
                  else
                    setState({ ...state, usernameErr: false, passwordErr: true })
                }
              }}
              classes={{
                containedPrimary: success,
              }}
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              disableRipple>
              Sign up
          </Button>
          </Grid>
          <Grid md={12} item>
            <div className={style.divider} style={{ marginBottom: "1.5vh" }} />
            <Typography variant="body2" align="center">
              Already have an account?&nbsp;
            <Link
                href="/login">
                Log in
            </Link>
            </Typography>
          </Grid>
          <Grid md={12} item>
          </Grid>
        </Grid>
      </Grid>

    </Grid>);
}
