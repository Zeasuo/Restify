import { Container } from "react-bootstrap";
import React, {useEffect, useState} from 'react';


const CreateBlog = () =>{
    const [blog, setblog] = useState([])

    var currentUser = localStorage.getItem("currentUser");

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

export default CreateBlog