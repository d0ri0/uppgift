// import React from 'react';
// // import { Link } from "react-router-dom";
// import { connect } from 'react-redux';
// import { NavLink as RRNavLink } from 'react-router-dom';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink } from 'reactstrap';
// export default class Example extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//         isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//         isOpen: !this.state.isOpen
//     });
//   }
//   render() {
//     return (
//         <div>
//             <Navbar color="light" light expand="md">
//                 <NavbarBrand href="/">
//                     Arbetsprov
//                     <span className='d-none d-sm-inline'>
//                         { ' ' } - Produktlistning samt varukorg
//                     </span>
//             </NavbarBrand>
//             <NavbarToggler onClick={this.toggle} />
//                 <Collapse isOpen={this.state.isOpen} navbar>
//                     <Nav className="ml-auto" navbar>
//                         <NavItem>
//                             {/* <NavLink href="/components/">Components</NavLink> */}
//                             {/* <NavLink to="/products">Produkter</NavLink> */}
//                             {/* <Link to="/products" as={NavLink}>Produkter</Link> */}
//                             {/* <NavLink tag={RRNavLink} to="/products" activeClassName="active">Produkter</NavLink> */}
//                             <NavLink tag={RRNavLink} to="/products">Produkter</NavLink>
//                         </NavItem>
//                         <NavItem>
//                             {/* <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink> */}
//                             <NavLink tag={RRNavLink} to="/cart">Varukorg</NavLink>
//                         </NavItem>
//                     </Nav>
//                 </Collapse>
//             </Navbar>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({

// });

// export default connect(
//     mapStateToProps,
//     {

//     }
// )(Example);

import React from 'react';
import { connect } from 'react-redux';
import { getCartTotalPrice, getCartTotalItems } from '../reducers';
import { NavLink as RRNavLink, withRouter } from 'react-router-dom';
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
import Price from './Price';

class TopNavigation extends React.Component {

    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState( state => ({
            isOpen: !state.isOpen
        }));
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href={routes.home}>
                        Arbetsprov
                        <span className='d-none d-sm-inline'>
                            { ' ' } - Produktlistning samt varukorg
                        </span>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink
                                    // Pass in custom element to use
                                    tag={RRNavLink} 
                                    to={routes.products}
                                >
                                    Produkter
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    // Pass in custom element to use
                                    tag={RRNavLink} 
                                    to={routes.cart}
                                >
                                    Varukorg ({this.props.totalItems}) <Price value={ this.props.totalPrice } />
                                    
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
    totalPrice: getCartTotalPrice( state ),
    totalItems: getCartTotalItems( state )
});

// withRouter is needed to correctly highlight the active link
// See: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
export default withRouter(connect(
    mapStateToProps,
    {
        getCartTotalPrice,
        getCartTotalItems
    }
)(TopNavigation));
