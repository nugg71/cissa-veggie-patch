import React from 'react'
import './App.css'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import theme from './themes/theme'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import CreateTask from './pages/CreateTask'
import Summary from './pages/Summary'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route exact path='/' component={LogIn} />
          <Route path='/home' component={Home} />
          <Route path='/login' component={LogIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/createtask' component={CreateTask} />
          <Route exact path='/summary' component={Summary} />
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  )
}

export default App
