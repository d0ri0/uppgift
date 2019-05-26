import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'
// import Example from '../components/Example'
import {loadCartSummary, addToCart } from '../actions/api'
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, Button,   InputGroup,
    InputGroupAddon, Input } from 'reactstrap';

import AddToCart from './ProductItem/AddToCart'

class ProductItem extends Component {

    // state = {
    //     amount: 1
    // };



    onChange = () => {
        console.log('onchange');
    }

    // addToCart = amount => {
    //     this.props.onAddToCart({
    //         product: this.props.item,
    //         amount: amount
    //     })
    // }

    render(){
        const { item } = this.props;

        // if( typeof item === 'undefined' ){
        //     return null;
        // }

        return (
            <Col sm="6" lg="4" className="mb-4">
                <Card>

                    {
                        item.Pic && (
                            <CardImg top width="100%" src={item.Pic} alt={`Produktbild för ` + item.name} />
                        )
                    }
                    
                    <CardBody>
                        <CardTitle>
                            {item.Name}
                        </CardTitle>

                       
                        { item.Description && (
                            <CardText>
                                { item.Description }
                            </CardText>
                        )}
                        
                        Pris: {item.Price}kr
                        <br />
                        {/* Kan köpas: { item.Buyable ? 'Ja' : 'Nej' }
                        <br /> */}
                        { item.Buyable ? <AddToCart
                            product = { item }
                            // addToCart={this.addToCart}
                        /> : 'Denna produkt kan ej köpas.' }

                    </CardBody>
                </Card>
            </Col>
        );
    }

}

export default ProductItem;
