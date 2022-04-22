import {Row, Col, ListGroup, Card} from 'react-bootstrap'
import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button'
import {Link, Outlet} from "react-router-dom";
import welcome from "../images/welcome.jpeg";
import {MDBContainer} from "mdb-react-ui-kit";
import {Container} from "@material-ui/core";
import Image from "react-bootstrap/Image";
import LikedBtn from "../LikeBtn";
import SimpleImageSlider from "react-simple-image-slider";

const FavouritePage = () => {
    const [rest, setRest] = useState([])
    const [notification, setNotification] = useState("")
    const [info, setInfo] = useState({})

    // useEffect(() => {
    //     fetch("http://127.0.0.1:8000/accounts/user/" + localStorage.getItem("username") + "/details/", {
    //         method: "GET",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             "Authorization": "Token " + localStorage.getItem("restifyToken"),
    //         }
    //     })
    //         .then((response) => {
    //             if (response.ok) {
    //                 return response.json()
    //             }
    //         })
    //         .then(json => setRest(json.followed_restaurant));
    // }, [])

    return <>
        {/*<MDBContainer fluid style={{height: "100%", backgroundColor: "#e9ebed"}}>*/}
        {/*    <Container className="justify-content-center" style={{paddingTop: "3%", paddingBottom: "10%", width: "60%"}}>*/}
        {/*        {rest.map(r => {*/}
        {/*            fetch("http://127.0.0.1:8000/restaurants/get/" + r, {*/}
        {/*                method: "GET",*/}
        {/*                headers: {*/}
        {/*                    'Content-Type': 'application/json',*/}
        {/*                    "Authorization": "Token " + localStorage.getItem("restifyToken"),*/}
        {/*                }*/}
        {/*            })*/}
        {/*                .then((response) => {*/}
        {/*                    if (response.ok) {*/}
        {/*                        return response.json()*/}
        {/*                    }*/}
        {/*                })*/}
        {/*                .then(json => setRest(json.followed_restaurant));*/}
        {/*            return <>*/}
        {/*                <Card key={r} style={{*/}
        {/*                    width: '100%',*/}
        {/*                    marginBottom: "3%",*/}
        {/*                    marginTop: "3%",*/}
        {/*                    marginRight: "auto",*/}
        {/*                    marginLeft: "auto"*/}
        {/*                }}>*/}
        {/*                    <Card.Img variant="top" src={"http://127.0.0.1:8000" + r.logo}/>*/}
        {/*                    <Card.Body>*/}
        {/*                        <Card.Title>Name: {r.restaurant_name} </Card.Title>*/}
        {/*                        <Card.Text> Description: {r.description} </Card.Text>*/}
        {/*                        <Card.Text> Address: {r.address} {r.postal_code}</Card.Text>*/}
        {/*                        <Card.Text> Phone Number: {r.phone_number} </Card.Text>*/}
        {/*                        <Button href={"../restaurant/" + r.restaurant_name} variant="light">Click to see more*/}
        {/*                            information!</Button>*/}
        {/*                    </Card.Body>*/}
        {/*                </Card>*/}
        {/*            </>*/}
        {/*        })}*/}
        {/*    </Container>*/}
        {/*</MDBContainer>*/}
    </>
}

export default FavouritePage