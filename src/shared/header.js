import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom";
import logo from "../assets/coffee-logo-light.svg";

const links = [
    {href: '/', label: 'Home'},
    {href: '/about', label: 'About'},
    {href: '/contact', label: 'Contact'}
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
                        {links.map((link, index) => (
                            <Nav.Link key={index} >
                                <Link to={link.href} className={"text-success"} >{link.label}</Link>
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;