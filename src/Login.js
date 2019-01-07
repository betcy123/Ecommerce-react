import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import $ from 'jquery';
import axios from 'axios';
class Login extends Component {
    constructor(props){
       super(props);
       this.state = {
         email:'',
         password:''

     }
   }
   render() {
       return(
         <MuiThemeProvider>
            <div>
             <AppBar title="Login Here" />
               <div className="login">
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
           </MuiThemeProvider>

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
          window.location.assign("http://www.yoururl.com");
        })
        .catch(function (error) {
        });

      }
  }

const style = {
margin: 50,
}
export default Login;
