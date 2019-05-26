import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
  InputGroup,
  InputGroupAddon,
  Input,
  Spinner
} from 'reactstrap';

import { addToCart } from '../../actions/api';
import { getCartTotalPrice } from '../../reducers';

import { showModal } from '../../actions/modal'


class AddToCart extends Component {
  state = {
    amount: this.props.defaultQuantity || 1
  };

  increment = () => {
    this.setState(state => ({
      amount: state.amount + 1
    }));
  };

  decrement = () => {
    this.setState(state => ({
      amount: state.amount - 1
    }));
  };

  onAddToCart = () => {

    const maxTotalPrice = 5000;

    // Check that we are under the max price limit before adding to cart
    if( this.props.totalPrice <= maxTotalPrice ) {
        this.props.addToCart({
            product: this.props.product,
            amount: this.state.amount
        });
    } else {
        this.props.showModal({
            message: `Varukorgens värde överstiger ${maxTotalPrice}kr och du kan därför inte lägga till fler varor. Vänligen töm varukorgen och försök igen.`,
        })
    }

}

  render() {
    const decrementButtonIsDisabled = this.state.amount <= 1;

    return (
        <React.Fragment>

            <div className="cart-amount-wrapper">
                <h6>Antal:</h6>
                <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <Button
                    onClick={this.decrement}
                    disabled={decrementButtonIsDisabled}
                    >
                    -
                    </Button>
                </InputGroupAddon>
                <Input
                    readOnly
                    name="amount"
                    value={this.state.amount}
                    style={{ textAlign: 'center' }}
                />
                <InputGroupAddon addonType="append">
                    <Button onClick={this.increment}>+</Button>
                </InputGroupAddon>
                </InputGroup>
            </div>
            <Button
                className="mt-4 add-to-cart btn-lg"
                block
                onClick={this.onAddToCart}
            >
                {this.props.buttonActive && <Spinner size="sm" type="grow" color="light" />}
                Lägg i varukorg
            </Button>
            
        </React.Fragment>
    );
  }
}

// export default AddToCart;

const mapStateToProps = state => ({
    cart: state.cart.data,
    totalPrice : getCartTotalPrice( state )
});

export default connect(
    mapStateToProps,
    {
        addToCart,
        // validateAndAddToCart,
        getCartTotalPrice,
        showModal
    }
)(AddToCart);
