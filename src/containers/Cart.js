import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Example from '../components/Example'
import { Link } from 'react-router-dom';

import ProductItem from '../components/ProductItem';
import {
  loadCartSummary,
  addToCart,
  getCart,
  deleteCart,
  // getCartTotalPrice
} from '../actions/api';

import { getCartTotalPrice } from '../reducers';

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
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
        <Link to="/products">Visa alla produkter</Link>
      </Col>
    </Row>
  </Container>
);

class Page extends Component {
  static propTypes = {
    // loadCartSummary: PropTypes.func.isRequired,
    // data2: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getCart();
  }

  getProductById = productId => {
    return this.props.data.find(item => item.Id === productId);
  };

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
            // console.log(item.Quantity);

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
          {/* {this.props.data.filter( item => this.props.cart.Items ).map( item => <ProductItem key={item.Id} item={item} onAddToCart={ product => this.props.addToCart( product ) }/> )} */}
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
    // loadCartSummary,
    // getDummyPosts,
    // addToCart,
    getCart,
    deleteCart
  }
)(Page);
