import React, { Component } from 'react';
import Page from './containers/Page';
import Page2 from './containers/Page2';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Page} />
          <Route path="/page2" component={Page2} />
        </div>
      </Router>
    );
  }
}

export default App;
