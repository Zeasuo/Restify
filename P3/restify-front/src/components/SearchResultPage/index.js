import Form from 'react-bootstrap/Form'
import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Tooltip } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";

// https://reactnavigation.org/docs/params/

const SearchResult = () =>{
    console.log(localStorage.getItem("searchInput"))
    return <>
        <h1> {localStorage.getItem("searchInput")} </h1>
    </>
}


export default SearchResult