import * as types from '../actions/actionTypes'

export const initialState = {
    // data will contain API response
    data: {
        Items: [],
        Total: 0
    },
    itemsInChange: [],
    // hasLoaded works like a form of cache
    hasLoaded: false,
    // loading will display a spinner
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CART_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.GET_CART_SUCCESS:
            return {
                ...state,
                data:       action.response,
                hasLoaded:  true,
                loading:    false
            }
        case types.POST_CART_REQUEST:
            return {
                ...state,
                itemsInChange: [...state.itemsInChange, action.payload.product.Id],
            }
        case types.POST_CART_SUCCESS:
            return {
                ...state,
                itemsInChange: state.itemsInChange.filter(id => id !== action.payload.product.Id)
            }
        case types.POST_CART_FAILURE:
            return {
                ...state,
                itemsInChange:  state.itemsInChange.filter(id => id !== action.payload.product.Id),
                loading:        false
            }
        case types.DELETE_CART_SUCCESS:
            return {
                ...state,
                data: initialState.data
            }
        default:
            return state
    }
}

export const getCartTotalPrice = state => state.data.Total;

export const getCartTotalItems = state => state.data.Items.reduce((total, currentValue) => total + currentValue.Quantity, 0);
