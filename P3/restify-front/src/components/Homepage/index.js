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
import Image from "react-bootstrap/Image";
import LikedBtn from "../LikeBtn";
import SimpleImageSlider from "react-simple-image-slider";

// https://www.sololearn.com/Discuss/226630/how-to-make-font-bigger-than-h1-tag
// https://react-bootstrap.netlify.app/components/carousel/#carousels
// https://react-bootstrap.github.io/components/overlays/

const ImageSlide = ({ blogID }) =>{
    const [images, setImages] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8000/socials/get_blog_image/"+blogID+"/", {
            method:"GET",
            headers:{
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(json =>{
                json.map(image=>{
                    var url = image.image
                    setImages(images=>[...images, {url}])
                })
            })

    }, [])

    return <Container className="align-items-center">
        {images.length>0?<SimpleImageSlider
            width={500}
            height={250}
            images = {images}
            showNavs = {true}
            showBullets = {true}
            navStyle = {2}
            style={{marginLeft:"125px"}}>
        </SimpleImageSlider>:<div/>}
    </Container>
}

const HomePage = () => {
    const [rest, setRest] = useState([])
    const [blogs, setBlogs] = useState([])
    const [notification, setNotification] = useState("")
    const [notification1, setNotification1] = useState("")

    useEffect(() => {
        fetch("http://127.0.0.1:8000/restaurants/get_random_rests/", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Token " + localStorage.getItem("restifyToken"),
            }
        })
            .then((response) => {
                if (response.ok) {
                    response.json().then((data) => {
                        setRest(data.results)
                        if (data.count === 0) {
                            setNotification("Waiting for more restaurants...")
                        } else {
                            setNotification("")
                        }
                    })
                }
            });
        fetch("http://127.0.0.1:8000/socials/get_random_blogs/", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Token " + localStorage.getItem("restifyToken"),
            }
        })
            .then((response) => {
                if (response.ok) {
                    response.json().then((data) => {
                        setBlogs(data.results)
                        if (data.count === 0) {
                            setNotification1("Waiting for more blogs...")
                        } else {
                            setNotification1("")
                        }
                    })
                }
            });
    }, [])


    return <>
        <MDBContainer fluid style={{height: "100%", backgroundColor: "#e9ebed"}}>
            <Container className="justify-content-center" style={{paddingTop: "3%", paddingBottom: "5%", width: "60%"}}>
                <OverlayTrigger
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
                            <p></p >
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
                            <p></p >
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
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p >
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>

            <Container className="justify-content-center" style={{width: "100%"}}>
                <h4> Recommend restaurants </h4>
                <h5> {notification} </h5>
                <CardGroup>
                    {rest.map(r =>(
                        <Card key={r.id} id={r.id}>
                            <Card.Img variant="top" src={"http://localhost:8000"+r.logo} style={{ width: '50%', marginBottom: "3%", marginTop: "3%", marginRight: "auto", marginLeft: "auto"}}/>
                            <Card.Body>
                                <Card.Title> Name: {r.restaurant_name} </Card.Title>
                                <Card.Text> Description: {r.description} </Card.Text>
                                <Card.Text> Address: {r.address} {r.postal_code}</Card.Text>
                                <Card.Text> Phone Number: {r.phone_number} </Card.Text>
                                <Button href={"../restaurant/" + r.restaurant_name}>Click to see more information!</Button>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated at {r.update_at}</small>
                            </Card.Footer>
                        </Card>
                    ))}
                </CardGroup>
            </Container>

            <h4> Recommend blogs for you: </h4>
            <h5> {notification1} </h5>
            <Container className="justify-content-center" style={{paddingBottom: "5%"}}>
            </Container>
        </MDBContainer>
    </>
}

export default HomePage