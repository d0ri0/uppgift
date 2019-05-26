import React from 'react'
// import PropTypes from 'prop-types'
import { currencyFormat } from '../misc/utils';


const Price = ({ 
    value
}) => (
    <React.Fragment>
        { currencyFormat( value ) }
    </React.Fragment>
)

export default Price
