import React from 'react'
import { connect } from 'react-redux'
// import ReactModal from 'react-modal';

import { showModal, hideModal } from '../actions/modal'

import Modal from './Modal';


class ModalContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modalIsOpen: false
//     };
//     this.closeModal = this.closeModal.bind(this)
//   }

//   componentWillReceiveProps(nextProps) {
//       console.log(nextProps);
//     if (nextProps !== this.props) {
//       this.setState({
//         modalIsOpen: nextProps.modalProps.open
//       })
//     }
//   }

  closeModal = () => {
    // this.setState({ modalIsOpen: false })


    // console.log('closemodal');
    this.props.hideModal();

  }

  render() {
    // if (!this.props.modalType) {
    //   return null
    // }
    // console.log(this.props);
    return (
        <Modal 
            // closeModal={this.closeModal}
            // {...this.props.modalProps}
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
