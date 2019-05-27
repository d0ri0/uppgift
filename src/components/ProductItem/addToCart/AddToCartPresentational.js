import React from 'react';
// import PropTypes from 'prop-types';
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
        className="mt-4 add-to-cart btn-lg"
        block
        disabled={true}
    >
        <Spinner color="light" size="sm" />
        Lägger till...
    </Button>
);

const NormalButton = ({
    onClick,
}) => (
    <Button
        className="mt-4 add-to-cart btn-lg"
        block
        onClick={onClick}
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
    onAddToCart
}) => {

    // Dont allow user to add 0 or negative amount of items
    const decrementButtonIsDisabled = amount <= 1;

    return (
        <React.Fragment>
            <div className="cart-amount-wrapper">
                <h6 className="totalItems">Antal:</h6>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <Button
                            onClick={onDecrement}
                            disabled={decrementButtonIsDisabled}
                        >
                            -
                        </Button>
                    </InputGroupAddon>
                    <Input
                        readOnly
                        name="amount"
                        value={amount}
                        style={{ textAlign: 'center' }}
                    />
                    <InputGroupAddon addonType="append">
                        <Button onClick={onIncrement}>+</Button>
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

export default AddToCardPresentational;
