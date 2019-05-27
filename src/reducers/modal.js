// import * as types from '../actions/modal'
import * as types from '../actions/actionTypes'

const initialState = {
    modalProps: {
        isOpen: false
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.POST_CART_SUCCESS:
            return {
                ...state,
                modalProps: {
                    isOpen: true,
                    message: `Du har nu lagt till ${action.payload.amount}st ${action.payload.product.Name} i varukorgen.`
                },
            }
        case types.POST_CART_FAILURE:
            return {
                ...state,
                modalProps: {
                    isOpen: true,
                    message: `Varan kunde ej läggas till i varukorgen. Vänligen försök igen.`
                },
            }
        case types.SHOW_MODAL:
            return {
                ...state,
                modalProps: action.modalProps,
            }
        case types.HIDE_MODAL:
            return initialState
        default:
            return state
    }
}
