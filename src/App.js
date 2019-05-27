import React, { Component } from 'react';
// import {connect} from 'react-redux'
import TopNavigation from './components/TopNavigation';
// import {
//     loadProducts, 
// } from './actions/api'
// import Page from './containers/Page';
import Products from './containers/Products';
import Cart from './containers/Cart';
import ModalRoot from './components/ModalRoot';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import routes from './misc/routes.js'
import './App.css';

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <TopNavigation />
                    {/* We dont have a startpage at the moment
                    Redirect to Products page */}
                    <Route exact path={routes.home} component={() => <Redirect to={routes.products} />}/>
                    <Route path={routes.products} component={Products} />
                    <Route path={routes.cart} component={Cart} />
                    <ModalRoot />
                </div>
            </Router>
        );
    }
}

export default App;
