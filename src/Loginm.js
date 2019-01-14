import React, {Component} from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import RaisedButton from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import axios from 'axios';

// const theme = createMuiTheme();
class Loginm extends Component {
    constructor(props){
       super(props);
       this.state = {
         email:'',
         password:''

     }
   }
   render() {
       return(
          // <MuiThemeProvider theme={theme}>
            <div>
             <AppBar title="Login Here" />
               <div className="loginm">
                   <TextField hintText="Enter your Email" id="email"
                     floatingLabelText="Email *"
                     onChange = {(event,newValue) => this.setState({email:newValue})} />
                   <br/>
                   <TextField hintText="Enter your Password" id="password"
                     floatingLabelText="Password *"
                     onChange = {(event,newValue) => this.setState({password:newValue})} />
                   <br/>
                   <RaisedButton label="Login" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
               </div>
            </div>
           // </MuiThemeProvider>

       )
   }
   handleClick(event) {

      var uemail = $("#email").val();
      var pass = $("#password").val();
          axios.get('http://172.16.53.30:3000/login', {
            params:{
            email: uemail,
            psw: pass
          }
        })
        .then(function (response) {
          alert("sucess");
          window.location.assign("/home");
        })
        .catch(function (error) {
          alert("sorry try again")
        });

      }
  }

const style = {
margin: 50,
}
export default Loginm;
