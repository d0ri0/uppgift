import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {compose, createStore, applyMiddleware} from 'redux'
import {middlewares} from './middleware'
import rootReducer from './reducers'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = composeEnhancers(applyMiddleware(...middlewares))(createStore)(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();
