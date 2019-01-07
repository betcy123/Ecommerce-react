import React, { Component } from 'react';
import './App.css';
import 'react-bootstrap'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import  Register from './Register';
import './Register.css';
import Login from './Login';
class App extends Component {
  render() {
    return (
      <div className="App">
           <Register></Register>
          <Router>
            <div>
              <Route path="/login" component={Login} />
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
