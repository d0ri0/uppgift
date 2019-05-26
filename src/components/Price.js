import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap';
import { currencyFormat } from '../misc/utils';


const Price = ({ 
    value
}) => (
    <React.Fragment>
        { currencyFormat( value ) }
    </React.Fragment>
)

// Example.propTypes = {
//     onClick: PropTypes.func.isRequired,
//     data: PropTypes.object
// }

export default Price
