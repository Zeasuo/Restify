import React, {useContext, useEffect, useState} from 'react';
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import {notificationAPIContext} from "../../context/notificationAPIContext";
import {Container, TextField} from "@material-ui/core";
import {MDBContainer} from "mdb-react-ui-kit";

// https://react-bootstrap.github.io/components/list-group/
const Notification = () =>{
    const { notifications } = useContext(notificationAPIContext)
    const { setNotifications } = useContext(notificationAPIContext)
    const [query, setQuery] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/socials/get_notification?page=${query}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Token " + localStorage.getItem("restifyToken"),
            }
        })
            .then(response => response.json())
            .then(json=> setNotifications(json.results))
    }, [query])

    const Button = ({ value, update, isOperator }) => {
        const style = !isOperator ? {backgroundColor: 'lightgray', color: 'black'} : {backgroundColor: 'orange', color: 'white'}
        return <button
            style={{...style, fontSize: '2em'}}
            onClick={() => update(value)}
        >
            {value}
        </button>
    }

    return <>
        <MDBContainer fluid style={{height: "100%", backgroundColor: "#e9ebed"}}>
            <Container className="justify-content-center" style={{paddingTop: "3%", paddingBottom: "10%", width: "60%"}}>
                <h5 style={{textAlign: "center", marginBottom: "3%", marginTop: "3%"}}><b>Your Notifications:</b></h5>
                <ListGroup>
                    {notifications.map(notification => (
                        <ListGroupItem key={notification.id} style={{textAlign: "center"}}>
                            {notification.action==="like" ?
                                `${notification.name} Liked your ${notification.Target} at ${notification.created_at}` : notification.action==="comment" ?
                                    `${notification.name} Commented your ${notification.Target} at ${notification.created_at}`: notification.action==="follow" ?
                                        `${notification.name} followed your ${notification.Target} at ${notification.created_at}` : notification.action==="make" ?
                                            `${notification.name} made a ${notification.Target} at ${notification.created_at}` : `${notification.name}  updated their ${notification.Target} at ${notification.created_at}`}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Container>
        </MDBContainer>
    </>
}

export default Notification
