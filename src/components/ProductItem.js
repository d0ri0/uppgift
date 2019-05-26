import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Example from '../components/Example'
import { loadCartSummary, addToCart } from '../actions/api';
import {
  Alert,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  InputGroup,
  InputGroupAddon,
  Input
} from 'reactstrap';

import AddToCart from './ProductItem/AddToCart';

class ProductItem extends Component {
  // state = {
  //     amount: 1
  // };

  onChange = () => {
    console.log('onchange');
  };

  addToCart = amount => {
    this.props.onAddToCart({
      product: this.props.item,
      amount: amount
    });
  };

  render() {
    const { item, itemsInChange } = this.props;

    return (
      <article className="card">
        {item.Pic && (
          <div className="card-img-wrapper">
            <CardImg top src={item.Pic} alt={`Produktbild för ` + item.name} />
          </div>
        )}

        <CardBody>
          <h3 className="card-title">{item.Name}</h3>
          {item.Description && <CardText>{item.Description}</CardText>}
          <div className="numdata">
            <h5 className="price">{ item.Price } kr</h5>
            {item.Buyable ? (
              <AddToCart
                product={item}
                defaultQuantity={this.props.defaultQuantity}
                addToCart={this.addToCart}
                buttonActive={
                  itemsInChange.length > 0 &&
                  itemsInChange.filter(id => id == item.Id).length
                }
              />
            ) : (
              <Alert color="light" className="mb-0 text-center">Denna produkt kan ej köpas.</Alert>
            )}
          </div>
        </CardBody>
      </article>
    );
  }
}

export default ProductItem;
