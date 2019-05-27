import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import {
    getProductsAndCart
} from '../actions/api';

import ProductGrid from './ProductGrid';
import ProductItem from './ProductItem';


class ProductItems extends Component {

    componentDidMount() {
        this.props.getProductsAndCart();
    }

    render() {
        const { item, ...props } = this.props;

        return (
            <ProductGrid>
                {this.props.product.map(product => (
                    <ProductItem
                        key={product.Id}
                        product={product}
                        showAddToCart={props.showAddToCart}
                    />
                ))}
            </ProductGrid>
        );
    }
}

const mapStateToProps = state => ({
    product:  state.product.data
});

export default connect(
    mapStateToProps,
    {
        getProductsAndCart
    }
)(ProductItems);
