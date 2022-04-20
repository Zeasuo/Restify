import Form from 'react-bootstrap/Form'
import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Tooltip } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";

// https://reactnavigation.org/docs/params/

const SearchResult = () =>{
    const navigate = useNavigate();
    var data = localStorage.getItem("searchResults")
    const [notification, setNotification] = useState("")

    useEffect(() => {
        if (!('searchResults' in localStorage)){
            setNotification("You should not be here!");
        }
        else if (data === ''){
            setNotification("No results. (You can search through restaurants by their name, foods, or address)")
        }
        else{
            setNotification("Search Results:")
        }
    }, [notification])

    return <>
        <div> {notification} </div>

    </>
}


export default SearchResult