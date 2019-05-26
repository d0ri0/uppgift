import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'
// import Example from '../components/Example'
import { Link } from 'react-router-dom';

import ProductItem from '../components/ProductItem'
import {loadCartSummary, addToCart, getCart } from '../actions/api'
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';


const EmptyView = () => (
    <Container>
        <Row>
            <Col>
                <h1 className="display-4 text-center">
                    Din varukorg är tom
                </h1>
            </Col>
        </Row>
        <Row>
            <Col className="text-center">
                <Link to="/products">Visa alla produkter</Link>
            </Col>
        </Row>
        </Container>
);



class Page extends Component {
    static propTypes = {
        // loadCartSummary: PropTypes.func.isRequired,
        // data2: PropTypes.array.isRequired,
    }

    componentDidMount() {
        this.props.getCart();
    }

    getProductById = productId => {
        return this.props.data.find( item => item.Id === productId );
    }

    render() {

        // console.log(this.props.cart);
        // console.log(this.props.data);

        // const CartProductsView = () => (
        //     <React.Fragment>
        //         <Row>
        //             <Col>
        //                 <h1 className="display-3 text-center">
        //                     Produkter i varukorgen
        //                 </h1>
        //             </Col>
        //         </Row>
        //         <Row>
        //             {this.props.data2.map( item => <ProductItem key={item.product.id} item={item} onAddToCart={ product => this.props.addToCart( product ) }/> )}
        //         </Row>
        //     </React.Fragment>
        // );

        // if( ! this.props.cart.Items.length ) {
        //     return  <EmptyView />;
        // }

        return (
            <Container>
                <Row>
                    <Col>
                        <h1 className="display-3 text-center">
                            Produkter i varukorgen
                        </h1>
                    </Col>
                </Row>
                <Row>
                    { this.props.cart.Items.map( item => {

                        const product = this.getProductById( item.Id );
                        
                        // Make sure that the product exists so we have its information
                        return product && (
                            <ProductItem key={item.Id} item={ product } onAddToCart={ product => this.props.addToCart( product ) } />
                        );

                    } ) }
                    {/* {this.props.data.filter( item => this.props.cart.Items ).map( item => <ProductItem key={item.Id} item={item} onAddToCart={ product => this.props.addToCart( product ) }/> )} */}
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart.data,
    data: state.api.data,
})

export default connect(mapStateToProps, {
    // loadCartSummary,
    // getDummyPosts,
    // addToCart,
    getCart
})(Page)