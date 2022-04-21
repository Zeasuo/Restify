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
    const [rest, setRest] = useState([])
    const [blog, setBlog] = useState([])
    const [notification, setNotification] = useState("")
    const [notification1, setNotification1] = useState("")

    useEffect(() => {
        fetch("http://127.0.0.1:8000/restaurants/get_random_blogs/", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Token " + localStorage.getItem("restifyToken"),
            }
        })
            .then((response) => {
                if (response.ok){
                    response.json().then((data) =>{
                        setRest(data.results)
                        if (data.count === 0){
                            setNotification("Waiting for more restaurants...")
                        }
                        else{
                            setNotification("")
                        }})}})},[])


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

            <h4> Recommend restaurants for you: </h4>

            <Container className="justify-content-center" style={{paddingBottom: "5%"}}>
                <CardGroup>
                    {rest.map(r =>(
                        <Card key={r.id}>
                            <Card.Img variant="top" src={r.logo} />
                            <Card.Body>
                                <Card.Title>Name: {r.restaurant_name} </Card.Title>
                                <Card.Text> Description: {r.description} </Card.Text>
                                <Card.Text> Address: {r.address} {r.postal_code}</Card.Text>
                                <Card.Text> Phone Number: {r.phone_number} </Card.Text>
                                <Button href={"../restaurant/" + r.restaurant_name}>Click to see more information!</Button>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated {r.update_at} mins ago</small>
                            </Card.Footer>
                        </Card>
                    ))}
                </CardGroup>
            </Container>
        </MDBContainer>
    </>
}

export default HomePage