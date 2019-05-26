import * as types from '../actions/api'

const initialState = {
    data: []
}

const ui = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                // Remove incomplete items
                data: action.response.filter( item => item.Id && item.Name )
            }
        case types.GET_PRODUCTS_FAILURE:
        default:
            return state
    }
}

export default ui
