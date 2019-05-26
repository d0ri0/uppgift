import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ProductItem from '../components/ProductItem';
import {
    getCart,
    deleteCart,
    getProductsAndCart
} from '../actions/api';

import routes from '../misc/routes';

import { getCartTotalPrice } from '../reducers';

import {
    Container,
    Row,
    Col,
    CardColumns,
    Button
} from 'reactstrap';

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

    getProductById = productId => {
        return this.props.data.find(item => item.Id === productId);
    };

    render() {

        if( ! this.props.cart.Items.length ){
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
                    <Button onClick={this.props.deleteCart}>Töm varukorg</Button>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    Totalpris: {this.props.totalPrice} kr
                </Col>
            </Row>
            <CardColumns>
                {this.props.cart.Items.map(item => {

                    const product = this.getProductById(item.Id);

                    // Make sure that the product exists so we have its information
                    return (
                        product && (
                            <ProductItem
                                key={item.Id}
                                item={product}
                                defaultQuantity={item.Quantity}
                                onAddToCart={product => this.props.addToCart(product)}
                            />
                        )
                    );
                })}
            </CardColumns>
        </Container>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart.data,
    data: state.api.data,
    totalPrice : getCartTotalPrice( state )
});

export default connect(
    mapStateToProps,
    {
        getCart,
        deleteCart,
        getProductsAndCart
    }
)(Page);
