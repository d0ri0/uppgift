import React           from 'react';
import PropTypes       from 'prop-types';
import { productType } from '../types';
import {
  Alert,
  CardImg,
  CardText,
  CardBody,
} from 'reactstrap';

import AddToCart from './ProductItem/AddToCart';

const ProductItem = ({ 
    product,
    showAddToCart,
}) => (
    <article className="card">
        { product.Pic && (
            <div className="card-img-wrapper">
                <CardImg top src={ product.Pic } alt={ `Produktbild för ` + product.Name } />
            </div>
        ) }
        <CardBody>
            <h3 className="card-title">{ product.Name }</h3>
            { product.Description && <CardText>{ product.Description }</CardText> }
            {
                showAddToCart && (
                    <div className="num-data">
                        {product.Buyable ? (
                            <AddToCart
                                product = { product }
                            />
                        ) : (
                            <Alert color="light" fade={ false } className="mb-0 text-center">Denna produkt kan ej köpas.</Alert>
                        )}
                    </div>
                )
            }
        </CardBody>
    </article>
)

ProductItem.propTypes = {
    product:       productType.isRequired,
    showAddToCart: PropTypes.bool.isRequired,
}

export default ProductItem;
