import React, { Component } from 'react';
import './App.css';
import 'react-bootstrap'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './Register.css';
import Home1 from './Home1';
import Register1 from './Register1';
import Login1 from './Login1';
import Products from './Products';
import Help from './Help';
import About from './About';
import Contact  from './Contact';
import Mycart  from './Mycart';
import Wishlist from'./Wishlist';
import Order from './Order';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div>
              <Route exact path="/" component={Register1} />
              <Route path="/login1" component={Login1} />
              <Route path="/home1" component={Home1} />
              <Route path="/products" component={Products}/>
              <Route path="/help" component={Help}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={ Contact}/>
              <Route path="/mycart" component={ Mycart}/>
              <Route path="/wishlist" component={ Wishlist}/>
              <Route path="/order" component={ Order}/>
            </div>
          </Router>
        </div>
    )
  }
}

export default App;
