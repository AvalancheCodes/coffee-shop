import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from "react-router-dom";
import logo from "../assets/coffee-logo.svg";

const links = [
    {href: '/', label: 'Home'},
    {href: '/about', label: 'About'},
    {href: '/contact', label: 'Contact'},
    {href: '/create-issue', label: 'Create Issue'}
]

const Header = () => {
    return (
        <Navbar bg="light" expand="md">
            <Container>
                <Navbar.Brand href="#home" >
                    <img src={logo} alt="logo"
                         width="50"
                         height="50" className="d-inline-block align-top"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;