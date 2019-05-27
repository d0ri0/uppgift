import { combineReducers } from 'redux'
import product, * as fromProduct from './product'
import cart, * as fromCart from './cart'
import modal from './modal'

export default combineReducers({
    product,
    cart,
    modal
})

export const getProductById = ( state, productId ) => {
    return fromProduct.getProductById( state.product, productId );
};

export const getCartTotalPrice = state => {
    return fromCart.getCartTotalPrice( state.cart );
};

export const getCartTotalItems = state => {
    return fromCart.getCartTotalItems( state.cart );
};
