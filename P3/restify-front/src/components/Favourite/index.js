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
    const [notification, setNotification] = useState("")
    const [infos, setInfos] = useState([])
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
            .then(json =>
            {return json.followed_restaurant})
            .then((rest) => {
                rest.forEach(element => {
                    fetch("http://127.0.0.1:8000/restaurants/get/" + element, {
                        method: "GET",
                        headers: {
                            'Content-Type': 'application/json',
                            "Authorization": "Token " + localStorage.getItem("restifyToken"),
                        }
                    }).then((response) => {
                        if (response.ok) {
                            return response.json()
                        }
                    })
                        .then(json => {setInfos(old => [...old, json])});
                })
            })
    }, [])

    const followunfollow = (e, rest_name) =>{
        e.preventDefault()
        if (follow){
            fetch('http://127.0.0.1:8000/socials/follow/' + rest_name+"/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Token " + localStorage.getItem("restifyToken"),
                }
            }).then((response) =>{
                if (response.ok){
                    setFollow(false)
                }
            })
        }
        else{
            fetch('http://127.0.0.1:8000/socials/unfollow/' + rest_name+"/", {
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
    }



    return <>
        <MDBContainer fluid style={{height: "100%", backgroundColor: "#e9ebed"}}>
            <Container className="justify-content-center" style={{paddingTop: "3%", paddingBottom: "10%", width: "60%"}}>
                {infos.map(info => (
                    <Card key={info.restaurant_name} style={{
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
                            <Button variant="danger"
                                    onClick={(e) => followunfollow(e, info.restaurant_name)}>{follow? "Follow" : "Unfollow"}</Button>
                        </Card.Body>
                    </Card>))}
            </Container>
        </MDBContainer>
    </>
}

export default FavouritePage