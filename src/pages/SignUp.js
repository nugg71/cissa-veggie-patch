import React, { useState } from 'react'
import {
  AppBar,
  Avatar,
  Grid,
  Paper,
  Toolbar,
  TextField,
  Button,
  Typography,
  Link,
  InputLabel,
  InputAdornment,
  IconButton
} from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import { authFunctions } from '../firebase'
import { Visibility, VisibilityOff } from '@material-ui/icons'

const SignUp = () => {
  const [state, setState] = useState({
    email: '',
    username: '',
    password: '',
    confirm: '',
    showPassword: false,
    success: false,
    signup: false,
    uid: null
  })

  const handleChange = (event) => {
    setState((currState) => ({ ...currState, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    if (state.password === state.confirm) {
      authFunctions.signUp(state.username, state.email, state.password)
      authFunctions.onUserActive((uid) => {
        setState((currState) => ({ ...currState, success: true, uid: uid }))
      })
      event.preventDefault()
    }
  }

  const handleClickShowPassword = () => {
    setState((currState) => ({ ...currState, showPassword: !currState.showPassword }))
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const redirectToLogIn = () => {
    setState((currState) => ({ ...currState, login: true }))
  }

  if (state.login) {
    return <Redirect to='./login' />
  }
  if (state.success) {
    return <Redirect to='./home' />
  }
  return (
    <Grid container style={{ height: '100vh' }} spacing={2} justify='center' alignItems='center'>
      {/* App Blurb */}
      <Grid item container xs={12} md={5} justify='center' alignItems='center'></Grid>

      {/* Form */}
      <Grid item container xs={12} md={5} justify='center' alignItems='center'>
        <Paper elevation={1} style={{ borderRadius: 15, width: '60%' }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item container>
                <InputLabel>Username</InputLabel>
                <TextField
                  placeholder='enter your username'
                  name='username'
                  id='username'
                  fullWidth
                  required
                  autoFocus
                  onChange={handleChange}
                  value={state.username}
                />
              </Grid>
              <Grid item container>
                <InputLabel>Email</InputLabel>
                <TextField
                  placeholder='enter your email'
                  name='email'
                  id='email'
                  fullWidth
                  required
                  autoFocus
                  onChange={handleChange}
                  value={state.email}
                />
              </Grid>
              <Grid item container>
                <InputLabel>Password</InputLabel>
                <TextField
                  placeholder='enter password'
                  name='password'
                  id='password'
                  type={state.showPassword ? 'text' : 'password'}
                  fullWidth
                  required
                  onChange={handleChange}
                  value={state.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge='end'
                        >
                          {state.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item container>
                <InputLabel>Confirm Password</InputLabel>
                <TextField
                  placeholder='confirm your password'
                  name='confirm'
                  id='confirm'
                  type={state.showPassword ? 'text' : 'password'}
                  fullWidth
                  required
                  onChange={handleChange}
                  value={state.confirm}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge='end'
                        >
                          {state.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item container justify='center' alignItems='center'>
                <Button type='submit' color='primary' variant='contained'>
                  Sign up
                </Button>
              </Grid>
              <Grid item container justify='center' alignItems='center'>
                <Typography style={{ fontSize: '0.75rem' }}>
                  <Link href='' onClick={redirectToLogIn}>
                    Go back to login
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default SignUp
