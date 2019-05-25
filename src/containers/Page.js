import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Example from '../components/Example'
import {loadCartSummary} from '../actions/api'
import { Link } from "react-router-dom";

class Page extends Component {
    static propTypes = {
        loadCartSummary: PropTypes.func.isRequired,
        data: PropTypes.object.isRequired,
    }

    componentDidMount() {
        // this.props.getDummyPosts();
    }

    render() {
        return (
            <div>
                <Example 
                    onClick={this.props.loadCartSummary}
                    data={this.props.data} 
                    // onClick2={this.props.getDummyPosts}
                    data2={this.props.data2} 
                />
                <Link to="/page2">Page 2</Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.api.data,
    data2: state.api.data2
})

export default connect(mapStateToProps, {
    loadCartSummary,
    // getDummyPosts
})(Page)
