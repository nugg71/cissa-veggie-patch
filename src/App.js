import React from "react";
import './App.css';
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import theme from "./theme";
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import CreateTask from './pages/CreateTask';
import Summary from './pages/Summary';

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={LogIn}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/createtask" component={CreateTask}/>
            <Route exact path="/summary" component={Summary}/>
          </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;

