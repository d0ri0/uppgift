import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {
  Alert,
  CardImg,
  CardText,
  CardBody
} from 'reactstrap';

import AddToCart from './ProductItem/AddToCart';

class ProductItem extends Component {

    addToCart = amount => {
        this.props.onAddToCart({
            product: this.props.item,
            amount: amount
        });
    };

    render() {
        const { item, productsAddingToCart } = this.props;
        const addToCardButtonIsLoading = productsAddingToCart.findIndex( productId => productId === item.Id ) !== -1;

        return (
            <article className={[
                "card",
                ! item.Buyable ? 'not-buyable' : ''
            ].join(' ')}
            >
                {item.Pic && (
                <div className="card-img-wrapper">
                    <CardImg top src={item.Pic} alt={`Produktbild för ` + item.name} />
                </div>
                )}

                <CardBody>
                    <h3 className="card-title">{item.Name}</h3>
                    {item.Description && <CardText>{item.Description}</CardText>}
                    <div className="num-data">
                        {item.Buyable ? (
                            
                            <div>
                                { this.props.canAddToCart && <AddToCart
                                    product={item}
                                    defaultQuantity={this.props.defaultQuantity}
                                    addToCart={this.addToCart}
                                    isLoading={ addToCardButtonIsLoading }
                                /> }

                            </div>

                        ) : (
                            <Alert color="light" fade={false} className="mb-0 text-center">Denna produkt kan ej köpas.</Alert>
                        )}
                    </div>
                </CardBody>

            </article>
        );
    }
}

export default ProductItem;
