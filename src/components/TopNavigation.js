import React from 'react';
// import { Link } from "react-router-dom";
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        isOpen: false
    };
  }
  toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                    Arbetsprov
                    <span className='d-none d-sm-inline'>
                        { ' ' } - Produktlistning samt varukorg
                    </span>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            {/* <NavLink href="/components/">Components</NavLink> */}
                            {/* <NavLink to="/products">Produkter</NavLink> */}
                            {/* <Link to="/products" as={NavLink}>Produkter</Link> */}
                            <NavLink tag={RRNavLink} to="/products" activeClassName="active">Produkter</NavLink>
                        </NavItem>
                        <NavItem>
                            {/* <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink> */}
                            <NavLink tag={RRNavLink} to="/cart">Varukorg</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
      </div>
    );
  }
}
