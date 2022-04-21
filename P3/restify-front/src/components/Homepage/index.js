import {
    Form,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Pagination,
    Carousel,
    OverlayTrigger,
    Tooltip,
    Card, CardGroup
} from 'react-bootstrap'
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

    // useEffect(() => {
    //     fetch(`http://127.0.0.1:8000/restaurants/search/?search=${input}&page=${page}`, {
    //         method: "GET",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             "Authorization": "Token " + localStorage.getItem("restifyToken"),
    //         }
    //     })
    //         .then((response) => {
    //             if (response.ok){
    //                 response.json().then((data) =>{
    //                     setResult(data.results)
    //                     if (data.next === null){
    //                         setNext(false)
    //                     }
    //                     else{
    //                         setNext(true)
    //                     }
    //
    //                     if (data.previous === null){
    //                         setPrev(false)
    //                     }
    //                     else{
    //                         setPrev(true)
    //                     }
    //
    //                     if (data.count === 0){
    //                         setNotification("Nothing found! Try something else!")
    //                     }
    //                     else{
    //                         setNotification("")
    //                     }
    //                 })
    //             }})
    // }, [page, next, prev, input, notification])


    return <>

        <MDBContainer fluid style={{height: "100%", backgroundColor: "#e9ebed"}}>
            <Container className="justify-content-center" style={{paddingTop: "3%", paddingBottom: "5%", width: "60%"}}>
                <OverlayTrigger
                    key='bottom'
                    placement='bottom'
                    overlay={
                        <Tooltip>
                            <div>Hey! How's going!</div>
                        </Tooltip>
                    }
                >
                    <h1 style={{textAlign:"center", fontSize:"500%", marginBottom:"4%"}}>Restify</h1>
                </OverlayTrigger>
                <Carousel fade style={{width:"60%", marginLeft:"auto", marginRight:"auto"}}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={welcome}
                            alt="Something goes wrong here..."
                        />
                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={welcome}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
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

            <Container className="justify-content-center" style={{paddingBottom: "5%"}}>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Container>
        </MDBContainer>
    </>
}

export default HomePage