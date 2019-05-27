import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ProductItems from '../components/ProductItems';
import {
    getCart,
    clearCart,
    getProductsAndCart
} from '../actions/api';

import routes from '../misc/routes';

import { getCartTotalPrice, getProductById } from '../reducers';

import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

import PageLoader from '../components/PageLoader';

const EmptyView = () => (
    <Container>
        <Row>
            <Col>
                <h1 className="display-4 text-center">Din varukorg är tom</h1>
            </Col>
        </Row>
        <Row>
            <Col className="text-center">
                <Link to={routes.products}>Visa alla produkter</Link>
            </Col>
        </Row>
    </Container>
);

class Page extends Component {
    static propTypes = {
    };

    componentDidMount() {
        this.props.getProductsAndCart();
    }

    render() {

        if( this.props.cart.loading || this.props.product.loading ){
            return <PageLoader />;
        }

        if( ! this.props.cart.data.Items.length ){
            return <EmptyView />;
        }

        return (
        <Container>
            <Row>
                <Col>
                    <h1 className="display-3 text-center">Produkter i varukorgen</h1>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    {/* TODO: Alert type modal where the user can confirm deletion */}
                    <Button onClick={this.props.clearCart}>Töm varukorg</Button>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <ProductItems 
                        showAddToCart={false}
                    />
                </Col>
            </Row>
        </Container>
        );
    }
}

const mapStateToProps = state => ({
    cart:           state.cart,
    product:        state.product,
    getProductById: id => getProductById( state, id ),
    totalPrice:     getCartTotalPrice( state ),
});

export default connect(
    mapStateToProps,
    {
        getCart,
        clearCart,
        getProductsAndCart
    }
)(Page);
