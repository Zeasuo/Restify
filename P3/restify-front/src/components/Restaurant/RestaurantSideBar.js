import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { HouseFill, CameraFill} from 'react-bootstrap-icons';
import React from 'react'
import { Outlet } from 'react-router-dom';



const RestaurantSideBar = () => {    
    return <>
        <div className="align-items-end align-items-sm-end px-4 text-white min-vh-100" sticky="top" 
        style={{"backgroundColor": "#415973", "width": "20em", "paddingTop" : "7em", height: "100%"}}> 
            <Navbar  id='About Us'>
                <Container className='fs-4' bg="primary">
                    <Navbar.Brand href='/profile'> <HouseFill className="text-white"> </HouseFill><span className="ms-1 d-none d-sm-inline text-white"> About Us </span> </Navbar.Brand>
                </Container>
            </Navbar>

            <Navbar id='Menu'>
                <Container className='fs-4'>
                    <Navbar.Brand href='/signUp'> <HouseFill className="text-white"> </HouseFill> <span className="ms-1 d-none d-sm-inline text-white"> Menu </span> </Navbar.Brand>
                </Container>
            </Navbar>

            <Navbar id = 'Gallery'>
                <Container className='fs-4'>
                    <Navbar.Brand href='/signUp'> <CameraFill className="text-white"></CameraFill> <span className ="ms-1 d-none d-sm-inline text-white"> Gallery </span> </Navbar.Brand>
                </Container>
            </Navbar>

            <Navbar id = 'Blogs'>
                <Container className='fs-4'>
                    <Navbar.Brand href='/profile/edit'> <CameraFill className="text-white"></CameraFill> <span className ="ms-1 d-none d-sm-inline text-white"> Our Blogs </span></Navbar.Brand>
                </Container>
            </Navbar>
        </div>
        <Outlet />
    </>
}


export default RestaurantSideBar