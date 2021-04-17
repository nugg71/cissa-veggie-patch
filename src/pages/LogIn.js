import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import {
  authFunctions
} from '../firebase';

const gridStyle = {
  width: "100%",
  margin: "0px",
};

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
  padding: "20px",
};

const buttonStyle = { margin: "10px 0" };

const LogIn = () => {
  const [state, setState] = useState({email: '', password: '', success: false, signup: false, uid: null})

  const handleChange = (event) => {
    setState((currState) => ({...currState,[event.target.name]: event.target.value}))
  }

  const handleSubmit = (event) => {
    authFunctions.logIn(state.email, state.password);
    authFunctions.onUserActive((uid) => {
      setState((currState) => ({...currState, success: true, uid: uid}))
    });
    event.preventDefault();
  }
  
  const redirectToSignUp = () => {
    setState((currState) => ({...currState, signup: true}))
  }

  if (state.signup) {
      return <Redirect to="./signup" />;
  }
  if (state.success) {
      return <Redirect to="./home"/>;
  }

  return (
    <div>
      <Grid container style={gridStyle} spacing={2}>
        <Grid item>
          <Paper elevation={10} style={leftPaperStyle}>
            <Grid align="center">
              <Avatar></Avatar>
              <h2>Log in</h2>
            </Grid>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                placeholder="Enter email"
                name="email"
                id="email"
                fullWidth
                required
                autoFocus
                onChange={handleChange}
                value={state.email}
              />
              <TextField
                label="Password"
                placeholder="Enter password"
                name="password"
                id="password"
                type="password"
                fullWidth
                required
                onChange={handleChange}
                value={state.password}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={buttonStyle}
                fullWidth
              >
                Sign in
              </Button>
            </form>
            <Typography>
              Don't have an account?{" "}
              <Link href="" onClick={redirectToSignUp}>
                Sign up
              </Link>
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper style={rightPaperStyle}>
            <div>
              <h3 style={h3Style}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </h3>

              {/* TODO: Save all media files to folder and access from there instead of link */}
              <img
                src="https://media.discordapp.net/attachments/832189594137133056/832763545040715806/image5.png?width=946&height=946"
                alt="onion mascot"
                width="70%"
              />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
  
}

export default LogIn;

