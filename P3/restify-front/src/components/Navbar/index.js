import { Link, Outlet, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import React, { useEffect, useState } from 'react';
import logo from "../images/Resify-logo-new.png";
import { Navbar, NavDropdown, Button, Container, FormControl, Nav} from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';
import {Modal, ModalDialog, ModalHeader, ModalFooter, ModalBody} from "react-bootstrap";

// https://react-bootstrap.github.io/components/navbar/
// https://stackoverflow.com/questions/51235582/how-to-add-req-user-to-fetch-request
// https://stackoverflow.com/questions/50664632/remove-an-item-from-local-storage-in-reactjs
// https://react-bootstrap.github.io/components/modal/

const RenderNavbar = () => {
    const [input, setInput] = useState("")
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const SearchInput = (e) => {
        e.preventDefault()
        var regex = /^(?=.*\S).{1,100}$/
        if(regex.test(input)){
            fetch('http://127.0.0.1:8000/restaurants/search/?search=' + input, {
                method: 'GET'
            })
                .then((response) => response.json())
                .then(json => {
                    localStorage.setItem("searchResults", json.results)
                    navigate("../socials/searchResult")
                })
        }
        else{
            handleShow()
        }
    }

    const LogOut = (e) => {
        e.preventDefault()
        localStorage.removeItem('restifyToken')
        localStorage.removeItem('username')
        navigate("/signIn");
    }

    return <>
    <Navbar bg="light" expand="lg" sticky="top">
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
                        value = {input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button variant="outline-info" onClick={event => SearchInput(event)}>Search</Button>
                </Form>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" style={{marginLeft: "8%"}}>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="../../home">Home</Nav.Link>
                        <Nav.Link><Plus size={25}></Plus></Nav.Link>
                        <Nav.Link href="/notifications">Notifications</Nav.Link>
                        <Nav.Link href="feed">Feed</Nav.Link>
                        <Nav.Link href="favourite">Favourite</Nav.Link>
                        <NavDropdown title="Account" id="account">
                            <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/profile/edit">Edit Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={event => LogOut(event)}>Log Out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Oops!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Your search input cannot be empty or only spaces!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    OK!
                </Button>
            </Modal.Footer>
        </Modal>

        <Outlet />
    </>
}

export default RenderNavbar