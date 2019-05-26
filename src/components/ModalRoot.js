import React from 'react'
import { connect } from 'react-redux'
// import ReactModal from 'react-modal';

import { hideModal } from '../actions/modal'

import Modal from './Modal';


class ModalContainer extends React.Component {

  closeModal = () => {

    this.props.hideModal();

  }

  render() {
    // if (!this.props.modalType) {
    //   return null
    // }
    return (
        <Modal 
            isOpen = { this.props.data.modalProps.isOpen }
            title = 'Title här'
            message = { this.props.data.modalProps.message }
            closeModal = { this.closeModal }
        />
    )
  }
}

const mapStateToProps = state => ({
    // ...state.modal
    data: state.modal
  })

export default connect(mapStateToProps, {
    hideModal
})(ModalContainer)
