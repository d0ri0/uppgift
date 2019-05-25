import * as types from '../actions/api'

const initialState = {
    data: {
        Items: [],
        Total: 0
    }
}

const cartItems = (state = initialState, action) => {
    switch (action.type) {
        // case 'ADD_TO_CART':
        //     // console.log(action.payload);
        //     return {
        //         ...state,
        //         products: [action.payload, ...state.products]
        //     }
        case types.GET_CART_SUCCESS:
            // console.log(action.response);
            return {
                ...state,
                data: action.response
            }    
            // break;
        default:
            return state
    }
}

export default cartItems
