import { Link, Outlet } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import React, { useEffect, useState } from 'react';
import logo from "../images/Resify-logo-new.png";
import { Navbar, NavDropdown, Button, Container, FormControl, Nav} from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';
import Notification from "../Notification";

// https://react-bootstrap.github.io/components/navbar/
// https://stackoverflow.com/questions/51235582/how-to-add-req-user-to-fetch-request

const RenderNavbar = () => {


    return <>
        <Navbar bg="light" expand="lg" fixed="top">
            <Container fluid>
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    style={{marginLeft: "5%"}}
                />
                <Navbar.Brand style={{marginLeft: "1%"}}>Restify</Navbar.Brand>

                <Form className="d-flex" style={{marginLeft: "20%", width:"30%"}}>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-info">Search</Button>
                </Form>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" style={{marginLeft: "8%"}}>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link><Plus size={25}></Plus></Nav.Link>
                        <Nav.Link href="/notifications">Notifications</Nav.Link>
                        <Nav.Link href="feed">Feed</Nav.Link>
                        <Nav.Link href="favourite">Favourite</Nav.Link>
                        <NavDropdown title="Account" id="account">
                            <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/profile/edit">Edit Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Log Out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet />
    </>
}

export default RenderNavbar