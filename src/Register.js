import React, {Component} from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom'
import RaisedButton from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import $ from 'jquery';
import './Register.css'
import axios from 'axios';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: 'purple',
    secondary: 'green',
  },
  status: {
    danger: 'orange',
  },
});

class Register extends Component {
    constructor(props){
       super(props);
       this.state = {
         name:'',
         number:'',
         email:'',
         password:'',
         cpassword:''

     }
   }
    render() {
        return(
          <MuiThemeProvider theme={theme}>
             <div>
              <AppBar title="Register Here" />
                <div className="register">
                    <TextField  hintText="Enter your Name"
                      floatingLabelText="Name *" id="name"
                      onChange = {(event,newValue) => this.setState({name:newValue})} />
                    <br/>
                    <TextField hintText="Enter your Phone Number" id="number"
                      floatingLabelText="Phone Number *"
                      onChange = {(event,newValue) => this.setState({number:newValue})} />
                    <br/>
                    <TextField hintText="Enter your Email" id="email"
                      floatingLabelText="Email *"
                      onChange = {(event,newValue) => this.setState({email:newValue})} />
                    <br/>
                    <TextField hintText="Enter your Password" id="password"
                      floatingLabelText="Password *"
                      onChange = {(event,newValue) => this.setState({password:newValue})} />
                    <br/>
                    <TextField hintText="Conform Password"
                      floatingLabelText=" Conform-Password *" id="cpassword"
                      onChange = {(event,newValue) => this.setState({cpassword:newValue})} />
                    <br/>
                    <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                    <Link to="/login">already have an account? </Link>
                </div>
             </div>
            </MuiThemeProvider>
        )
    }
         handleClick(event) {
            var uname = $("#name").val();
            var uemail = $("#email").val();
            var pass = $("#password").val();
            var mob = $("#number").val();
            var confirm_pass = $("#cpassword").val();
            var phoneno = /^\d{10}$/;
            var re = /^[a-zA-Z0-9!@#$%^&*]{1,16}$/;
            if (!(mob.match(phoneno))) {
              alert("Enter a valid phone number");
            } else if (!(pass.match(re))) {
              alert("Enter a valid password");
            } else if (!(pass == confirm_pass)) {
              alert("missmatch in password");
            } else {
                axios.get('http://172.16.53.30:3000/signup', {
                  params:{
                  name: uname,
                  email: uemail,
                  phonenumber: mob,
                  psw: pass
                }
              })
              .then(function (response) {
                alert("sucessfully logged ");

              })
              .catch(function (error) {
              });

            }
        }
}
const style = {
  margin: 50,
}
export default Register;
