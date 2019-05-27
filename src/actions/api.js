import { callAPIWrapper, isObject } from '../misc/utils';
import * as types from '../actions/actionTypes'
import { initialState as cartInitialState } from '../reducers/cart'

export const getProducts = () => ({
    types: [types.GET_PRODUCTS_REQUEST, types.GET_PRODUCTS_SUCCESS, types.GET_PRODUCTS_FAILURE],
    callAPI: () => callAPIWrapper({
        path:   'products'
    }),
    shouldCallAPI: state => {
        // Only fetch data if we dont have any
        return ! state.product.data.length;
    },
})

export const getCart = ( force = false ) => ({
    types: [types.GET_CART_REQUEST, types.GET_CART_SUCCESS, types.GET_CART_FAILURE],
    callAPI: () => callAPIWrapper({
        path: 'cart'
    }),
    shouldCallAPI: state => {
        // Fetch data on first load
        // Or after adding new items to cart
        return ! state.cart.hasLoaded || force;
    },
    transform: response => {
        // Empty cart is an empty array []
        // Filled cart is an object {}
        // Normalize it
        return isObject(response) ? response : cartInitialState.data;
    }
})


export const addToCart = data => {
    return {
        types: [types.POST_CART_REQUEST, types.POST_CART_SUCCESS, types.POST_CART_FAILURE],
        callAPI: () => callAPIWrapper({
            path:   'cart',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Id":       data.product.Id,
                "Quantity": data.amount
            })
        }),
        // We dont get back any body data from this call
        // So nothing to parse
        parse: () => {},
        payload: data
    }
}
// After adding item to Cart we normally want to request a updated cart with total items & price
export function addToCartAndLoadCart(data) {
    return dispatch => {
        return dispatch(addToCart(data)).then(response => {
            if (response.type === types.POST_CART_SUCCESS) {
                return dispatch( getCart( true ) );
            }
        })
    }
}

export const clearCart = () => ({
    types: [types.DELETE_CART_REQUEST, types.DELETE_CART_SUCCESS, types.DELETE_CART_FAILURE],
    callAPI: () => callAPIWrapper({
        path:   'cart',
        method: 'DELETE',
    }),
    parse: () => {}
})

// We often need both of these as Cart data is dependent on Products data
export const getProductsAndCart = () =>{
    return dispatch => {
        dispatch(getProducts());
        dispatch(getCart());
    }
}
