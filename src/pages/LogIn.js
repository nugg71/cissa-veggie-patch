import React, { useState } from 'react'
import {
  AppBar,
  Avatar,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  Paper,
  TextField,
  Toolbar,
  Typography
} from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import { authFunctions } from '../firebase'
import { Visibility, VisibilityOff } from '@material-ui/icons'

const LogIn = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    showPassword: false,
    success: false,
    signup: false,
    uid: null
  })

  const handleChange = (event) => {
    setState((currState) => ({ ...currState, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    authFunctions.logIn(state.email, state.password)
    authFunctions.onUserActive((uid) => {
      setState((currState) => ({ ...currState, success: true, uid: uid }))
    })
    event.preventDefault()
  }

  const handleClickShowPassword = () => {
    setState((currState) => ({ ...currState, showPassword: !currState.showPassword }))
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const redirectToSignUp = () => {
    setState((currState) => ({ ...currState, signup: true }))
  }

  if (state.signup) {
    return <Redirect to='./signup' />
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
              <Grid item container justify='center' alignItems='center'>
                <Button type='submit' color='primary' variant='contained'>
                  Sign in
                </Button>
              </Grid>
              <Grid item container justify='center' alignItems='center'>
                <Typography style={{ fontSize: '0.75rem' }}>
                  Don't have an account?{' '}
                  <Link href='' onClick={redirectToSignUp}>
                    Sign up
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

export default LogIn
