import React     from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    InputGroup,
    InputGroupAddon,
    Input,
    Spinner
} from 'reactstrap';

import Price from '../../Price';

const LoadingButton = () => (
    <Button
        className = "mt-4 add-to-cart btn-lg"
        disabled  = { true }
        block
    >
        <Spinner color="light" size="sm" />
        Lägger till...
    </Button>
);

const NormalButton = ({
    onClick,
}) => (
    <Button
        className = "mt-4 add-to-cart btn-lg"
        onClick   = { onClick }
        block
    >
        Lägg i varukorg
    </Button>
);

const AddToCardPresentational = ({ 
    price,
    amount,
    onIncrement,
    onDecrement,
    isLoading,
    onAddToCart,
}) => {

    // Dont allow user to add 0 or negative amount of items
    const decrementButtonIsDisabled = amount <= 1;

    return (
        <React.Fragment>
            <div className="cart-amount-wrapper">
                <h6 className="total-items">Antal:</h6>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <Button
                            data-test = "decrementProductAmount"
                            onClick   = { onDecrement }
                            disabled  = { decrementButtonIsDisabled }
                        >
                            -
                        </Button>
                    </InputGroupAddon>
                    <Input
                        data-test = "productAmount"
                        name      = "amount"
                        value     = { amount }
                        style     = {{ textAlign: 'center' }}
                        readOnly
                    />
                    <InputGroupAddon addonType="append">
                        <Button
                            data-test = "incrementProductAmount"
                            onClick   = { onIncrement }
                        >+</Button>
                    </InputGroupAddon>
                </InputGroup>
                <h5 className="price">
                    <Price value={ price } />
                </h5>
            </div>
            { isLoading ? <LoadingButton /> : <NormalButton onClick={ onAddToCart } /> }
        </React.Fragment>
    )
}

AddToCardPresentational.propTypes = {
    amount:      PropTypes.number.isRequired,
    isLoading:   PropTypes.bool.isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onIncrement: PropTypes.func.isRequired,
    price:       PropTypes.number.isRequired,
}

export default AddToCardPresentational;
