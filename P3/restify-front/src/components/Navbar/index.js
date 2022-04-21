import { Link, Outlet, useNavigate } from "react-router-dom";
import React from 'react';
import logo from "../images/Resify-logo-new.png";
import {Navbar, NavDropdown, Container, Nav, Tooltip, OverlayTrigger} from 'react-bootstrap';
import { Plus, Search, House, Bell, Book, Heart, People} from 'react-bootstrap-icons';

// https://react-bootstrap.github.io/components/navbar/
// https://stackoverflow.com/questions/51235582/how-to-add-req-user-to-fetch-request
// https://stackoverflow.com/questions/50664632/remove-an-item-from-local-storage-in-reactjs
// https://react-bootstrap.github.io/components/modal/

const RenderNavbar = () => {
    const navigate = useNavigate();

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
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    style={{marginLeft: "5%"}}
                />

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" style={{marginLeft: "52%"}}>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip><div>Search</div></Tooltip>}>
                            <Nav.Link><Search size={25}></Search></Nav.Link>
                        </OverlayTrigger>

                        <OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip><div>Home Page</div></Tooltip>}>
                            <Nav.Link href="../../home"><House size={25}></House></Nav.Link>
                        </OverlayTrigger>

                        <OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip><div>Create A Blog</div></Tooltip>}>
                            <Nav.Link href="../../socials/createBlog"><Plus size={25}></Plus></Nav.Link>
                        </OverlayTrigger>

                        <OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip><div>Notifications</div></Tooltip>}>
                            <Nav.Link href="../../notifications"><Bell size={25}></Bell></Nav.Link>
                        </OverlayTrigger>

                        <OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip><div>Feed</div></Tooltip>}>
                            <Nav.Link href="../../socials/feed"><Book size={25}></Book></Nav.Link>
                        </OverlayTrigger>

                        <OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip><div>Favourite</div></Tooltip>}>
                            <Nav.Link href=""><Heart size={25}></Heart></Nav.Link>
                        </OverlayTrigger>

                        <NavDropdown title="Account" id="account">
                            <NavDropdown.Item href="../../profile">My Profile</NavDropdown.Item>
                            <NavDropdown.Item href="../../profile/edit">Edit Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={event => LogOut(event)}>Log Out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <h5 style={{marginTop:"1%"}}><b>Welcome, {localStorage.getItem("username")}</b></h5>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet />
    </>
}

export default RenderNavbar