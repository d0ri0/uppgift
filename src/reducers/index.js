import { combineReducers } from 'redux'
import api from './api'
import cart, * as fromCart from './cart'
import modal from './modal'

export default combineReducers({
	api,
	cart,
	modal
})

export const getCartTotalPrice = state => {
	return fromCart.getCartTotalPrice( state.cart );
};
