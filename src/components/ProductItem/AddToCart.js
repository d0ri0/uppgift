import React, { Component }     from 'react';
import PropTypes                from 'prop-types';
import { productType }          from '../../types';
import { connect }              from 'react-redux';
import { addToCartAndLoadCart } from '../../actions/api';
import { showModal }            from '../../actions/modal'
import { getCartTotalPrice }    from '../../reducers';

import AddToCartPresentational from './AddToCart/AddToCartPresentational';

class AddToCart extends Component {

    static propTypes = {
        addToCartAndLoadCart: PropTypes.func.isRequired,
        product:              productType.isRequired,
        productsAddingToCart: PropTypes.array.isRequired,
        showModal:            PropTypes.func.isRequired,
        totalPrice:           PropTypes.number.isRequired,
    };

    state = {
        amount: 1
    };

    increment = () => {
        this.setState( state => ({
            amount: state.amount + 1
        }));
    };

    decrement = () => {
        this.setState( state => ({
            amount: state.amount - 1
        }));
    };

    addToCart = () => {

        const maxTotalPrice = 5000;

        // Check that we arent over the max price limit before adding to cart
        if( this.props.totalPrice <= maxTotalPrice ) {
            this.props.addToCartAndLoadCart({
                product: this.props.product,
                amount:  this.state.amount,
            });
        } else {
            this.props.showModal({
                message: `Varukorgens värde överstiger ${maxTotalPrice}kr och du kan därför inte lägga till fler varor. Vänligen töm varukorgen och försök igen.`,
            });
        }

    }

    render() {
        const { product, ...props } = this.props;
        const addToCardButtonIsLoading = props.productsAddingToCart.findIndex( productId => productId === product.Id ) !== -1;

        return (
            <AddToCartPresentational
                price       = { this.props.product.Price }
                amount      = { this.state.amount }
                onIncrement = { this.increment }
                onDecrement = { this.decrement }
                isLoading   = { addToCardButtonIsLoading }
                onAddToCart = { this.addToCart }
            />
        );
    }
}

const mapStateToProps = state => ({
    cart:                   state.cart.data,
    totalPrice:             getCartTotalPrice( state ),
    productsAddingToCart:   state.cart.productsAddingToCart,
});

export default connect(
    mapStateToProps,
    {
        addToCartAndLoadCart,
        getCartTotalPrice,
        showModal
    }
)(AddToCart);
