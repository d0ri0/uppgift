import React from 'react';
// import PropTypes from 'prop-types';
import {
    CardColumns
} from 'reactstrap';

const ProductGrid = ({ 
	children
}) => {

    return (
        <CardColumns>
            { children }
        </CardColumns>
    )
}

export default ProductGrid;