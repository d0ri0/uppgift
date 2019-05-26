import * as types from '../actions/api'

const initialState = {
    data: {
        Items: [],
        Total: 0
    }
}

const isObject = (a) => {
    return (!!a) && (a.constructor === Object);
};

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
            // console.log(isObject(action.response));

            // let cartData = initialState.data;

            // if (![].isArray(action.response) || !array.length) {
            //     // array does not exist, is not an array, or is empty
            //     // ⇒ do not attempt to process array
            //   }

            const cartResponse = ( isObject(action.response) ? action.response : initialState.data );

            return {
                ...state,
                data: cartResponse
            }    
            // break;
        default:
            return state
    }
}

export default cartItems
