import React from 'react'
// import PropTypes from 'prop-types'
import {
    Spinner
} from 'reactstrap';

const PageLoader = () => (
    <div className="pageLoader">
        <Spinner color="dark" />
    </div>
)

export default PageLoader
