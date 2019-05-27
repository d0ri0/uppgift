import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { connect }          from 'react-redux';

import {
    getProductsAndCart,
} from '../actions/api';

import { ProductGrid, ProductItem } from './index';

class ProductItems extends Component {

    static propTypes = {
        showAddToCart: PropTypes.bool.isRequired,
    };

    componentDidMount() {
        this.props.getProductsAndCart();
    }

    render() {
        const { item, ...props } = this.props;

        return (
            <ProductGrid>
                { this.props.product.map(product => (
                    <ProductItem
                        key           = { product.Id }
                        product       = { product }
                        showAddToCart = { props.showAddToCart }
                    />
                )) }
            </ProductGrid>
        );
    }
}

const mapStateToProps = state => ({
    product: state.product.data,
});

export default connect(
    mapStateToProps,
    {
        getProductsAndCart,
    }
)(ProductItems);
