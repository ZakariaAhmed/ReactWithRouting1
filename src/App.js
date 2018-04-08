import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Welcome from './Components/Welcome';
import data from "./data/data.json";
import All from "./Components/all";
import Details from './Components/details';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/all' component={All} />
            <Route path='/details/:index' component={Details} />            
          </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
