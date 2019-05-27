import React       from 'react';
import PropTypes   from 'prop-types'
import { connect } from 'react-redux';
import { 
    getCartTotalPrice, 
    getCartTotalItems 
} from '../reducers';
import { 
    NavLink as RRNavLink, 
    withRouter 
} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink 
} from 'reactstrap';
import routes from '../misc/routes';
import Price  from './Price';

class TopNavigation extends React.Component {

    static propTypes = {
        totalItems: PropTypes.number.isRequired,
        totalPrice: PropTypes.number.isRequired,
    };

    state = {
        isOpen: false,
    }

    toggle = () => {
        this.setState( state => ({
            isOpen: ! state.isOpen,
        }));
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href={ routes.home} >
                        Arbetsprov
                        <span className='d-none d-sm-inline'>
                            { ' ' } - Produktlistning samt varukorg
                        </span>
                    </NavbarBrand>
                    <NavbarToggler onClick={ this.toggle } />
                    <Collapse isOpen={ this.state.isOpen } navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink
                                    // Pass in custom element to use
                                    tag = { RRNavLink } 
                                    to  = { routes.products }
                                >
                                    Produkter
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    // Pass in custom element to use
                                    tag = { RRNavLink } 
                                    to  = { routes.cart }
                                >
                                    Varukorg ({ this.props.totalItems }) <Price value={ this.props.totalPrice } />
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    totalItems: getCartTotalItems( state ),
    totalPrice: getCartTotalPrice( state ),
});

// withRouter is needed to correctly highlight the active link
// See: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
export default withRouter(connect(
    mapStateToProps,
    {
        getCartTotalPrice,
        getCartTotalItems,
    }
)(TopNavigation));
