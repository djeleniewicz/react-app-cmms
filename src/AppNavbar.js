import React, {Component} from 'react';
import {Collapse, Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return <Navbar color="dark" dark expand="md">
            <div><NavbarBrand tag={Link} to="/">Home</NavbarBrand></div>
            <div><NavbarBrand tag={Link} to="/login">Login</NavbarBrand></div>
            <div><NavbarBrand tag={Link} to="/faq">FAQ</NavbarBrand></div>
            {/*<NavbarToggler onClick={this.toggle}/>*/}
            <Collapse isOpen={this.state.isOpen} navbar>
                {/*<Nav className="ml-auto" navbar>*/}
                {/*    <NavItem>*/}
                {/*        <NavLink href="https://github.com/djeleniewicz">Help</NavLink>*/}
                {/*    </NavItem>*/}
                {/*</Nav>*/}
            </Collapse>
        </Navbar>;
    }
}