import PropTypes from 'prop-types';

export const productType = PropTypes.shape({
    Description: PropTypes.string,
    Id:          PropTypes.number.isRequired,
    Name:        PropTypes.string.isRequired,
    Pic:         PropTypes.string,
});
