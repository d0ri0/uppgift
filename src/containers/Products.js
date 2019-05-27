import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { connect }          from 'react-redux';

import {
    Col,
    Container,
    Row,
} from 'reactstrap';

import {
    addToCartAndLoadCart,
    getProducts,
} from '../actions/api';

import { 
    PageLoader, 
    ProductItems,
} from '../components';

class Products extends Component {
    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
    };

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
                <Row>
                    <Col>
                        <ProductItems 
                            showAddToCart={true}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.product.loading,
});

export default connect(
    mapStateToProps,
    {
        getProducts,
        addToCartAndLoadCart,
    }
)(Products);
