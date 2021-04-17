import React from 'react'
import './App.css'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import theme from './themes/theme'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/' component={Home} />
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  )
}

export default App
