import Form from 'react-bootstrap/Form'
import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Tooltip } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

const Notification = () =>{
    const [notifications, setNotifications] = useState([])

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/socials/get_notification", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Token " + localStorage.getItem("restifyToken"),
            }
        })
            .then(response => response.json())
            .then(json=> setNotifications(json.results))
    }, [notifications])

    // const getNotification = (n) => {
    //     if (n.action == 'like' || n.action == 'comment' || n.action == 'follow')
    //         return n.user.username + " " + n.get_action_display() + " your " + n.get_Target_display() + "!"
    //     else if (n.action == 'make')
    //         return n.user.restaurant.restaurant_name + " " + n.get_action_display() + " a " + n.get_Target_display() + "!"
    //     else
    //         return n.user.restaurant.restaurant_name + " " + n.get_action_display() + " their " + n.get_Target_display() + "!"
    // }

    return <>

    </>
}


export default Notification