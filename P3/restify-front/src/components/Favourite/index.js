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
                    response.json().then((data) => {
                        console.log(data.followed_restaurant)
                        data.followed_restaurant.forEach(element => {
                            console.log(element)
                            setRest(state => [...state, element])
                            console.log(rest)
                        });
                        console.log(rest)
                    })
                }
            });}, [])

    return <>
        <MDBContainer fluid style={{height: "100%", backgroundColor: "#e9ebed"}}>
            <Container className="justify-content-center" style={{paddingTop: "3%", paddingBottom: "10%", width: "60%"}}>
                {notification}
            </Container>
        </MDBContainer>
    </>
}

export default FavouritePage