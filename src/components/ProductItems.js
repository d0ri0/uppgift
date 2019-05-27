import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import {
    getProductsAndCart
} from '../actions/api';
import ProductItem from './ProductItem';
import {
  CardColumns
} from 'reactstrap';


class ProductItems extends Component {

    componentDidMount() {
        this.props.getProductsAndCart();
    }

    render() {
        const { item, ...props } = this.props;

        return (
            <CardColumns>
                {this.props.product.map(item => (
                    <ProductItem
                        key={item.Id}
                        product={item}
                        showAddToCart={props.showAddToCart}
                    />
                ))}
            </CardColumns>
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
