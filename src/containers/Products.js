// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItems from '../components/ProductItems';
import {
    getProducts,
    addToCartAndLoadCart    
} from '../actions/api';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

import PageLoader from '../components/PageLoader';

class Page extends Component {
    static propTypes = {
        // loadCartSummary: PropTypes.func.isRequired
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
)(Page);
