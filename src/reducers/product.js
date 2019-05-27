import * as types from '../actions/actionTypes'

const initialState = {
    data: [],
    // loading will display a spinner
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                // Remove incomplete items
                data: action.response.filter( item => item.Id && item.Name ),
                loading: false
            }
        case types.GET_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export const getProductById = ( state, productId ) => state.data.find( item => item.Id === productId );
