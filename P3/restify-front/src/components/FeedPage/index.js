import { Container } from "react-bootstrap";
import RenderNavbar from "../Navbar";
import React from 'react';
import Feed from "../Feed"


const FeedPage = () =>{
    

    return <>
        <Container style={{marginLeft: "58px"}}>
            <RenderNavbar>
            </RenderNavbar>
        </Container>
        <Feed>
        </Feed>
    </>

}

export default FeedPage;