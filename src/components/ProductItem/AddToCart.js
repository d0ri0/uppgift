import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, Button,   InputGroup,
    InputGroupAddon, Input } from 'reactstrap';

import {
    addToCart 
} from '../../actions/api'

class AddToCart extends Component {

    state = {
        amount: 1
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

        // console.log(this.props.product);

        this.props.addToCart({
            product: this.props.product,
            amount: this.state.amount
        })
    }



    render(){
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
    // data: state.api.data,
})

export default connect(mapStateToProps, {
    addToCart
})(AddToCart)
