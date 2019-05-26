import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  InputGroup,
  InputGroupAddon,
  Input
} from 'reactstrap';

import { addToCart } from '../../actions/api';

// const Todo = ({
//     onClick
// }) => (
//     <div></div>
// );

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

  render() {
    return (
      <React.Fragment>
        <div className="cart-amount-wrapper">
          <h6>Antal:</h6>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Button
                onClick={this.decrement}
                disabled={this.state.amount <= 1}
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
          onClick={() => this.props.addToCart(this.state.amount)}
        >
          Lägg i varukorg
        </Button>
      </React.Fragment>
    );
  }
}

// export default AddToCart;

const mapStateToProps = state => ({
  cart: state.cart.data
});

export default connect(
  mapStateToProps,
  {
    addToCart
  }
)(AddToCart);
