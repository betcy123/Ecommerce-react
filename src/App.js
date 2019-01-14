import React, { Component } from 'react';
import './App.css';
import 'react-bootstrap'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './Register.css';
import Home1 from './Home1';
import Register1 from './Register1';
import Login1 from './Login1';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div>
              <Route exact path="/" component={Register1} />
              <Route path="/login1" component={Login1} />
              <Route path="/home1" component={Home1} />
            </div>
          </Router>
        </div>
    )
  }
}

export default App;
