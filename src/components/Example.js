import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap';


const Example = ({ onClick, onClick2, data, data2 }) => (
    <div>
        <p>
            {data ? data["title"] : ''}
        </p>
        <ul>
            { data2.map( item => <li key={item.id}>{item.title}</li> ) }
        </ul>
        <p>
            <Button color="danger" onClick={onClick2}>Danger!</Button>
            <br />
            <button onClick={onClick}>Call Api</button>
        </p>
    </div>
)

Example.propTypes = {
    onClick: PropTypes.func.isRequired,
    data: PropTypes.object
}

export default Example
