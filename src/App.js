import React, { Component } from 'react';
import {connect} from 'react-redux'
import TopNavigation from './components/TopNavigation';
import {

  loadProducts, 
} from './actions/api'
import Page from './containers/Page';
import Page2 from './containers/Page2';
import Products from './containers/Products';
import Cart from './containers/Cart';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.loadProducts();

}
  render() {
    return (
      <Router>
        <div>
          <TopNavigation></TopNavigation>
          <Route exact path="/" component={Page} />
          <Route path="/page2" component={Page2} />
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart} />
        </div>
      </Router>
    );
  }
}

// export default App;



export default connect(null, {
  // loadCartSummary,
  loadProducts,
  // getDummyPosts,
  // addToCart
})(App)
