import React from 'react';
// prettier-ignore
import { makeStyles, Box, Link, Typography, TextField, Button, 
  Grid, FormControlLabel, Checkbox } from '@material-ui/core';
import '../../App.css';

const useStyles = makeStyles({
  mainContainer: {
    '& > div:nth-child(1)': { height: '20vh', border: '0px solid red' },
  },
  contentContainer: {
    /*  boxShadow:
      'rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;',
     marginTop:
      '1vh', */
    '& > div': { padding: '1.5vh' },
  },
  success: {
    backgroundColor: '#1db954',
    '&:hover': { backgroundColor: '#178f41' },
  },
});

export default function Login() {
  const { mainContainer, contentContainer, success } = useStyles();
  return (
    <Grid container className={mainContainer} justify="center">
      <Grid container justify="center" alignItems="center">
        <Typography variant="h2">Servicify</Typography>
      </Grid>

      <Grid container className={contentContainer} item md={4}>
        <Grid container item md={12} justify="center">
          <Typography variant="subtitle2">Welcome Back. To continue</Typography>
        </Grid>
        <Grid item md={12} container justify="center">
          <Button
            fullWidth
            color="primary"
            variant="contained"
            size="large"
            disableRipple>
            Login with facebook
          </Button>
        </Grid>
        <Grid md={12} item>
          <div className="divider">
            <strong>or</strong>
          </div>
        </Grid>
        <Grid item md={12}>
          <TextField fullWidth label="Email or Username" variant="outlined" />
        </Grid>
        <Grid item md={12}>
          <TextField fullWidth label="Password" variant="outlined" />
        </Grid>
        <Grid
          container
          item
          md={12}
          style={{ height: '10vh' }}
          justify="space-between"
          alignItems="flex-end">
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  onChange={() => {
                    console.log('clicked');
                  }}
                />
              }
              label="Remember me"
            />
          </Grid>
          <Grid item>
            <Box mb={1} clone>
              <Typography>
                <Link
                  href="/forgotpassword"
                  onClick={() => {
                    console.log('test click');
                  }}>
                  Forgot password?
                </Link>
              </Typography>
            </Box>
          </Grid>
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
            Login
          </Button>
        </Grid>
        <Grid md={12} item>
          <div className="divider" />
        </Grid>
        <Grid md={12} item>
          <Typography align="center" variant="h6">
            Dont have an account?
          </Typography>
        </Grid>
        <Grid item md={12} container justify="center" alignItems="flex-start">
          <Button
            fullWidth
            variant="outlined"
            size="large"
            disableRipple
            href="/signup">
            Signup
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
