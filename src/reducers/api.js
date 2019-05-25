import * as types from '../actions/api'

const initialState = {
    data: [],
    // cart: {
    //     Items: [],
    //     Total: 0
    // },
    // data2: []
}

const ui = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS_SUCCESS:
            // console.log(action.response);
            return {
                ...state,
                // Remove incomplete items
                data: action.response.filter( item => item.Id && item.Name )
            }
            // break;
        // case types.GET_CART_SUCCESS:
        //     // console.log(action.response);
        //     return {
        //         ...state,
        //         cart: action.response
        //     }    
        //     break;
        case types.GET_PRODUCTS_FAILURE:
            // alert('error');
            // break;
        // case types.GET_STUFF_SUCCESS2:
        //     return {
        //         ...state,
        //         data2: action.response
        //     }
        default:
            // console.log('nu');
            return state
    }
}

export default ui
