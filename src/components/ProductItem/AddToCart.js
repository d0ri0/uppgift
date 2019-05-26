import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, Button,   InputGroup,
    InputGroupAddon, Input } from 'reactstrap';

import {
    addToCart 
} from '../../actions/api'


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
        this.setState( state => ({
            amount: state.amount + 1
        }));
    }

    decrement = () => {
        this.setState( state => ({
            amount: state.amount - 1
        }));
    }

    onAddToCart = () => {

        // console.log('onAddToCart');

        // console.log(store);

        // store.dispatch(addToCart(42)).then(() =>
        //     console.log('Fetched user and updated UI!')
        // )

        // console.log(this.props.cart.Total);

        this.props.addToCart({
            product: this.props.product,
            amount: this.state.amount
        })
    }



    render(){
        // console.log(this.props.cart);
        // console.log(this.props.product);
        // console.log(this.props.defaultQuantity);
        return(
            <React.Fragment>
                <span>Antal:</span>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <Button onClick={this.decrement} disabled={ this.state.amount <= 1 }>-</Button>
                    </InputGroupAddon>
                    <Input readOnly name="amount" value={this.state.amount} style={{ textAlign: 'center' }} />
                    <InputGroupAddon addonType="append">
                        <Button onClick={this.increment}>+</Button>
                    </InputGroupAddon>
                </InputGroup>
                <Button
                    className="mt-2"
                    block 
                    onClick={ this.onAddToCart }
                >
                    Lägg i varukorg
                </Button>
        </React.Fragment>
        );
    }

}

// export default AddToCart;

const mapStateToProps = state => ({
    cart: state.cart.data,
})

export default connect(mapStateToProps, {
    addToCart
})(AddToCart)
