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
    const [follow, setFollow] = useState(false)

    useEffect(() => {
        fetch("http://127.0.0.1:8000/accounts/user/" + localStorage.getItem("username") + "/details/", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Token " + localStorage.getItem("restifyToken"),
            }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then(json => setRest(json.followed_restaurant));
    }, [])

    const unfollow = (e, rest_name) =>{
        e.preventDefault()
        fetch('http://127.0.0.1:8000/socials/unfollow/' + rest_name, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Token " + localStorage.getItem("restifyToken"),
            }
        }).then((response) =>{
            if (response.ok){
                setFollow(true)
            }
        })
    }

    return <>
        <MDBContainer fluid style={{height: "100%", backgroundColor: "#e9ebed"}}>
            <Container className="justify-content-center" style={{paddingTop: "3%", paddingBottom: "10%", width: "60%"}}>
                {rest.map(r => {
                    fetch("http://127.0.0.1:8000/restaurants/get/" + r, {
                        method: "GET",
                        headers: {
                            'Content-Type': 'application/json',
                            "Authorization": "Token " + localStorage.getItem("restifyToken"),
                        }
                    })
                        .then((response) => {
                            if (response.ok) {
                                return response.json()
                            }
                        })
                        .then(json => setInfo(json));
                    return <>
                        <Card key={info.id} style={{
                            width: '100%',
                            marginBottom: "3%",
                            marginTop: "3%",
                            marginRight: "auto",
                            marginLeft: "auto"
                        }}>
                            <Card.Img variant="top" src={info.logo}/>
                            <Card.Body>
                                <Card.Title>Name: {info.restaurant_name} </Card.Title>
                                <Card.Text> Description: {info.description} </Card.Text>
                                <Card.Text> Address: {info.address} {info.postal_code}</Card.Text>
                                <Card.Text> Phone Number: {info.phone_number} </Card.Text>
                                <Button href={"../restaurant/" + info.restaurant_name} variant="light">Click to see more
                                    information!</Button>
                                <Button variant="danger" disabled={follow} onClick={(e) => unfollow(e, info.restaurant_name)}>Unfollow</Button>
                            </Card.Body>
                        </Card>
                    </>
                })}
            </Container>
        </MDBContainer>
    </>
}

export default FavouritePage