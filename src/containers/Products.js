// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from '../components/ProductItem';
import {
    getProducts,
    addToCartAndLoadCart,
    getProductsAndCart
} from '../actions/api';
import {
    Container,
    Row,
    Col,
    CardColumns
} from 'reactstrap';

import PageLoader from '../components/PageLoader';

class Page extends Component {
    static propTypes = {
        // loadCartSummary: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getProductsAndCart();
    }

    render() {

        if( this.props.isLoading ){
            return <PageLoader />;
        }

        return (
            <Container>
                <Row>
                    <Col>
                        <h1 className="display-3 text-center">Alla våra produkter</h1>
                    </Col>
                </Row>

                <CardColumns>
                    {this.props.product.map(item => (
                        <ProductItem
                        key={item.Id}
                        item={item}
                        productsAddingToCart={this.props.productsAddingToCart}
                        canAddToCart={true}
                        />
                    ))}
                </CardColumns>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    product: state.product.data,
    isLoading: state.product.loading,
    productsAddingToCart: state.cart.productsAddingToCart
});

export default connect(
    mapStateToProps,
    {
        getProducts,
        addToCartAndLoadCart,
        getProductsAndCart
    }
)(Page);
