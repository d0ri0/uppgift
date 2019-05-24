//import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from "react-router-dom";

class Page2 extends Component {
    //static propTypes = {
    //}

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <p>Page 2</p>
                <p><Link to="/">Page 1</Link></p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, {
})(Page2)
