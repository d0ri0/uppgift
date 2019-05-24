import React from 'react'
import PropTypes from 'prop-types'

const Example = ({ onClick, data, }) => (
    <div>
        <p>
            {data ? data["title"] : ''}
        </p>
        <p>
            <button onClick={onClick}>Call Api</button>
        </p>
    </div>
)

Example.propTypes = {
    onClick: PropTypes.func.isRequired,
    data: PropTypes.object
}

export default Example