export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'

export const showModal = modalProps => dispatch => {

    // console.log(modalProps);

    dispatch({
        type: SHOW_MODAL,
        
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
        type: HIDE_MODAL
    });
}
