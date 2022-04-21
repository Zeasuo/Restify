import {Form, Row, Col, ListGroup, ListGroupItem, Pagination, Carousel, OverlayTrigger, Tooltip} from 'react-bootstrap'
import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button'
import {Link, Outlet} from "react-router-dom";
import welcome from "../images/welcome.jpeg";
import {MDBContainer} from "mdb-react-ui-kit";
import {Container} from "@material-ui/core";

// https://www.sololearn.com/Discuss/226630/how-to-make-font-bigger-than-h1-tag
// https://react-bootstrap.netlify.app/components/carousel/#carousels
// https://react-bootstrap.github.io/components/overlays/

const HomePage = () => {
    return <>

        <MDBContainer fluid style={{height: "100%", backgroundColor: "#e9ebed"}}>
            <Container className="justify-content-center" style={{paddingTop: "3%", paddingBottom: "10%", width: "60%"}}>
                <OverlayTrigger
                    key='bottom'
                    placement='bottom'
                    overlay={
                        <Tooltip>
                            <div>Hello! How's going!</div>
                        </Tooltip>
                    }
                >
                    <h1 style={{textAlign:"center", fontSize:"500%", marginBottom:"4%"}}>Restify</h1>
                </OverlayTrigger>
                <Carousel fade style={{width:"50%", marginLeft:"auto", marginRight:"auto"}}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={welcome}
                            alt="Something goes wrong here..."
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={welcome}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={welcome}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </MDBContainer>
    </>
}

export default HomePage