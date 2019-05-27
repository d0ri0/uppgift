import * as types from './actionTypes'

export const showModal = modalProps => dispatch => {

    // console.log(modalProps);

    dispatch({
        type: types.SHOW_MODAL,
        
        modalProps: {
            isOpen: true,
            // title: modalProps.title,
            message: modalProps.message,
        }
        // modalProps,
    });
}

export const hideModal = () => dispatch => {
    dispatch({
        type: types.HIDE_MODAL
    });
}
