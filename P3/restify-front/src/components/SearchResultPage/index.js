import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import {Grid, Input, TextField, Container, Button} from "@material-ui/core";
import {MDBContainer} from "mdb-react-ui-kit";

// https://reactnavigation.org/docs/params/

const Search = () =>{
    const navigate = useNavigate();
    var data = localStorage.getItem("searchResults")
    const [notification, setNotification] = useState("")

    // const SearchInput = (e) => {
    //     e.preventDefault()
    //     var regex = /^(?=.*\S).{1,100}$/
    //     if(regex.test(input)){
    //         fetch('http://127.0.0.1:8000/restaurants/search/?search=' + input, {
    //             method: 'GET'
    //         })
    //             .then((response) => response.json())
    //             .then(json => {
    //                 localStorage.setItem("searchResults", json.results)
    //                 navigate("../socials/searchResult")
    //             })
    //     }
    //     else{
    //         handleShow()
    //     }
    // }

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
        <MDBContainer
            fluid
            style={{height: "100%", backgroundColor: "#e9ebed"}}
        >

            <Container
                className="justify-content-center"
                style={{paddingTop: "3%", paddingBottom: "10%", width: "60%"}}
            >
                <h5
                    style={{textAlign: "center", marginBottom: "5%"}}
                ><b></b></h5>

            </Container>
        </MDBContainer>
    </>
}


export default Search