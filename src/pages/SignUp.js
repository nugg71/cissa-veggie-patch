import React from "react";
import { AppBar, Avatar, Grid, Paper, TextField, Toolbar, Button, Typography } from '@material-ui/core'
import {Redirect,Link} from 'react-router-dom'

const gridStyle = {
    width: "100%", 
    margin: 0 // no spacing
}

const leftPaperStyle = {
    width: "100%", 
    backgroundColor: "#405185"
}

const h3Style = {
    color: "#FFFFFF",
    padding: "20px",
}

const rightPaperStyle = {
    width: "100%", 
    padding: "25px",
    height: "50vh", // 50% of current window size
    width: "200px",
    margin: "20px auto 20px"
}

const buttonStyle = {
    margin: "10px 0"
}

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            username: "",
            success: false,
            login: false,
        };
        // must bind state updating functions to corresponding component in order to update states
        this.handleChange = this.handleChange.bind(this);
        this.redirectToLogIn = this.redirectToLogIn(this);
    }

    handleChange(event) {
        // update target state with value taken from event
        this.setState({[event.target.name]: event.target.value});
    }

    redirectToLogIn() {
        this.setState({login: true})
    }

    render() {
        if (this.state.login) { // redirect to login page if logged in
            return <Redirect to='./login'/>
        }
        return (
            <div>
                <AppBar position="static"> 
                    <Toolbar>
                        <h1>Veggie Patch</h1>
                    </Toolbar>
                </AppBar>
                <Grid container style={gridStyle} spacing={1}>
                    <Grid item xs={9}>
                        <Paper style={leftPaperStyle}>
                            <div>
                                <h3 style={h3Style}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dui mauris, eleifend vitae gravida quis, volutpat eget urna. Maecenas sollicitudin, arcu et faucibus convallis, ligula orci consequat leo, id commodo elit ex vel dui. Etiam eleifend leo urna, nec facilisis lorem mollis in. Morbi eu auctor ligula, eget viverra nunc. Phasellus risus sapien, pretium ullamcorper libero sit amet, viverra consectetur sem. Integer sit amet porttitor lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam odio metus, pretium nec risus at, ornare tincidunt nisi. Ut viverra ipsum ac sollicitudin ullamcorper. Praesent sed est nisl.    
                                </h3>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Onion_on_White.JPG/1200px-Onion_on_White.JPG" alt="onion" width="100%" position="center"></img>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid Item>
                        <Paper style={rightPaperStyle} elevation={10}>
                            <Grid align='center'>
                                <Avatar></Avatar>
                                <h2>Sign Up</h2>
                            </Grid>
                            <form>
                                <TextField label="User name" placeholder="Username" name="username" id="username" required fullWidth autoFocus onChange={this.handleChange} value={this.state.username}/>
                                <TextField label="Email" placeholder="email" name="email" id="email" required fullWidth onChange={this.handleChange} value={this.state.email}/>
                                <TextField label="Password" placeholder="Password" name="password" id="password" required fullWidth type="password" onChange={this.handleChange} value={this.state.password}/>
                                <Button type="submit" color="primary" variant="contained" fullWidth style={buttonStyle}>Sign up</Button>
                            </form>
                            <Typography>
                                Already have an account?{"\n"}<Link href="">Log in</Link>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    };
}

export default SignUp;