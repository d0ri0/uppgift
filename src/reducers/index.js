import { combineReducers } from 'redux'
import api from './api'
import cart, * as fromCart from './cart'

export default combineReducers({
	api,
	cart
})

export const getCartTotalPrice = state => {
	return fromCart.getCartTotalPrice( state.cart );
};
