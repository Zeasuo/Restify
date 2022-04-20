import React, {useContext, useEffect, useState} from 'react';
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import {notificationAPIContext} from "../../context/notificationAPIContext";

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
        <ListGroup>
            {notifications.map(notification => (
                <ListGroupItem key={notification.id}>
                    {notification.action==="like" ?
                        `${notification.name} Liked your ${notification.Target}` : notification.action==="comment" ?
                            `${notification.name} Commented your ${notification.Target}`: notification.action==="follow" ?
                                `${notification.name} followed your ${notification.Target}` : notification.action==="make" ?
                                    `${notification.name} made a ${notification.Target}` : `${notification.name}  updated their ${notification.Target}`}
                </ListGroupItem>
            ))}
        </ListGroup>

        {query > 1 ? <Button value="prev" update={() => setQuery(query-1)} /> : <></>}
        {query < totalPages ? <Button value="next" update={() => setQuery(query+1)}/> : <></>}
    </>
}

export default Notification
