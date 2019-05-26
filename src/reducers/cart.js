import * as types from '../actions/api'
// import { currencyFormat } from '../misc/utils';

const initialState = {
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

const isObject = (a) => {
    return (!!a) && (a.constructor === Object);
};

// Reducer
const cartItems = (state = initialState, action) => {
    switch (action.type) {
        // case 'ADD_TO_CART':
        //     // console.log(action.payload);
        //     return {
        //         ...state,
        //         products: [action.payload, ...state.products]
        //     }

        case types.GET_CART_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.GET_CART_SUCCESS:

            // console.log(action.response);
            // console.log(isObject(action.response));

            // let cartData = initialState.data;

            // if (![].isArray(action.response) || !array.length) {
            //     // array does not exist, is not an array, or is empty
            //     // ⇒ do not attempt to process array
            //   }

            // TODO: check action.response.Items / . Total
            const cartResponse = (isObject(action.response) ? action.response : initialState.data);

            return {
                ...state,
                data:       cartResponse,
                hasLoaded:  true,
                loading:    false
            }

            // break;

            case 'POST_CART_REQUEST':
                // console.log(action.payload);
                return {
                    ...state,
                    itemsInChange: [...state.itemsInChange, action.payload.product.Id],
                }
            case 'DELETE_CART_SUCCESS':
                return {
                    ...state,
                    data: initialState.data
                }
            case 'POST_CART_SUCCESS':
                // console.log(state);
                // console.log(action);
                //alert('Added to cart' + action.payload.product.Id);
                // console.log(types.getCart());

                return {
                    ...state,
                    itemsInChange: state.itemsInChange.filter(id => id !== action.payload.product.Id)
                }
            case 'POST_CART_FAILURE':
                //alert('Failed added to cart' + action.payload.product.Id);
                return {
                    ...state,
                    itemsInChange: state.itemsInChange.filter(id => id !== action.payload.product.Id),
                    loading:    false
                }
                default:
                    return state
    }
}

export const getCartTotalPrice = state => state.data.Total;

export const getCartTotalItems = state => state.data.Items.reduce((total, currentValue) => total + currentValue.Quantity, 0);

// export const getCartTotalPriceFormatted = state => currencyFormat( getCartTotalPrice() );

export default cartItems;
