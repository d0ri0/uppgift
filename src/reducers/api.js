import * as types from '../actions/api'

const initialState = {
    data: {}
}

const ui = (state = initialState, action) => {
    switch (action.type) {
    case types.GET_STUFF_SUCCESS:
        return {
            ...state,
            data: action.response
        }
    default:
        return state
    }
}

export default ui