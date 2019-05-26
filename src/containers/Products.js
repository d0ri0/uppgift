import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from '../components/ProductItem';
import {
  loadCartSummary,
  loadProducts,
  addToCart
} from '../actions/api';
import {
  Container,
  Row,
  Col,
  CardColumns
} from 'reactstrap';


class Page extends Component {
  static propTypes = {
    loadCartSummary: PropTypes.func.isRequired
    // data: PropTypes.array.isRequired,
  };


  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className="display-3 text-center">Alla våra produkter</h1>
          </Col>
        </Row>

        <CardColumns>
          {this.props.data.map(item => (
            <ProductItem
              key={item.Id}
              item={item}
              itemsInChange={this.props.itemsInChange}
              canAddToCart={true}
            />
          ))}
        </CardColumns>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  data: state.api.data,
  itemsInChange: state.cart.itemsInChange
});

export default connect(
  mapStateToProps,
  {
    loadCartSummary,
    loadProducts,
    // getDummyPosts,
    addToCart
  }
)(Page);
