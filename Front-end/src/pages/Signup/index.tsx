import React, { useState } from 'react';
import style from './styles.module.css';
import logo from '../../assets/image/Maplestory_logo.png';
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
    '& > div': { padding: '2vh' },
  },
  success: {
    backgroundColor: '#1db954',
    '&:hover': { backgroundColor: '#178f41' },
  },
}));

export default function Login() {
  const monthArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const [age, setAge] = useState('');
  const handleChange = event => {
    setAge(event.target.value);
  };

  const { mainContainer, contentContainer, success } = useStyles();
  return (
    <Grid container className={[mainContainer, style.background].join(' ')} justify="center" >


      <Grid container justify="center" alignItems="center">
        <a href={`${process.env.REACT_APP_BASE_URL}`} style={{ textAlign: "center" }}>
          <img src={logo} alt="logo" width="22%" style={{ border: "0px solid black",marginTop:"1.5vh" }}></img>
        </a>
      </Grid>


      <Grid container md={8} alignItems="center" style={{ border: '0px solid red', backgroundColor: "white", borderRadius: "10px", height: "80vh" }} justify="center" >

        <Grid className={contentContainer} item md={4} style={{ border: '0px solid red' }}>
          <Grid container item md={12} justify="center">
            <Typography variant="subtitle2" />
          </Grid>
          <Grid item md={12} container justify="center">
            <Button
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
            <TextField fullWidth label="Email or Username" variant="outlined" />
          </Grid>
          <Grid item md={12}>
            <TextField fullWidth label="Password" variant="outlined" />
          </Grid>

          <Grid md={12} item>
            <Typography variant="body2" align="center">
              By signing up, you agree to MS's&nbsp;
            <Link
                href="/terms-and-condition"
                onClick={() => {
                  console.log('test click');
                }}>
                Terms and Conditions&nbsp;
            </Link>
            and&nbsp;
            <Link
                href="/privacy-policy"
                onClick={() => {
                  console.log('test click');
                }}>
                Privacy Policy.
            </Link>
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Button
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
                href="/login"
                onClick={() => {
                  console.log('test click');
                }}>
                Log in
            </Link>
            </Typography>
          </Grid>
          <Grid md={12} item>
          </Grid>
        </Grid>
      </Grid>

    </Grid>


  );
}
