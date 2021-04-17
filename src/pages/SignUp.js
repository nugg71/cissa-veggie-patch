import React, { useState } from "react";
import { AppBar, Avatar, Grid, Paper, Toolbar, TextField, Button, Typography, Link } from '@material-ui/core';
import {Redirect} from 'react-router-dom';
import {
    authFunctions
} from '../firebase';

const gridStyle = {
    width: "100%",
    margin: "0px"
}

const rightPaperStyle = {
  width: "50vw",
  backgroundColor: "green",
};

const leftPaperStyle = {
  padding: "20px",
  height: "50vh",
  width: "280px",
  margin: "20px auto",
};

const h3Style = {
    color: "#FFFFFF",
    padding: "20px"
}

const buttonStyle = {
    margin: "10px 0"
}

const SignUp = () => {
  const [state, setState] = useState({email: '', username: '', password: '', success: false, signup: false, uid: null})

  const handleChange = (event) => {
      setState((currState) => ({...currState, [event.target.name]: event.target.value}));
  }

  const handleSubmit = (event) => {
      authFunctions.signUp(
          state.username,
          state.email,
          state.password
      );
      authFunctions.onUserActive((uid) => {
          setState((currState) => ({...currState, success: true, uid: uid}));
      });
      event.preventDefault();
  }

  const redirectToLogIn = () => {
      setState((currState) => ({...currState, login: true}));
  }

  if (state.login) {
      return <Redirect to='./login'/>
  }
  if (state.success) {
      return <Redirect to="./home"/>
  }
  return (
      <div>
          <Grid container style={gridStyle} spacing={2}>
              <Grid item>
                  <Paper style={leftPaperStyle} elevation={10}>
                      <Grid align='center'>
                          <Avatar></Avatar>
                          <h2>Sign up</h2>
                      </Grid>
                      <form onSubmit={handleSubmit}>
                          <TextField label="Username" placeholder="Username" name="username" id="username" fullWidth required autoFocus onChange={handleChange} value={state.username}/>
                          <TextField label="Email" placeholder="Enter email" name="email" id="email" fullWidth required onChange={handleChange} value={state.email}/>
                          <TextField label="Password" placeholder="Enter password" name="password" id="password" fullWidth required type="password" onChange={handleChange} value={state.password}/>
                          <Button type="submit" color="primary" variant="contained" fullWidth style={buttonStyle}>Sign up</Button>
                      </form>
                      <Typography>
                          Already have an account?{" "}<Link href="" onClick={redirectToLogIn}>Log in</Link>
                      </Typography>
                  </Paper>
              </Grid>
              <Grid item>
                  <Paper style={rightPaperStyle}>
                      <div>
                          <h3 style={h3Style}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </h3>
                          <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="yellow flowers" width="60%"/>
                      </div>
                  </Paper>
              </Grid>
          </Grid>
      </div>
  )
  
}

export default SignUp;