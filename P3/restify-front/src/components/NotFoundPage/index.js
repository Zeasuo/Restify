import React from 'react';
import {Link} from "react-router-dom";
import {Container} from "@material-ui/core";
import {MDBContainer} from "mdb-react-ui-kit";

const NotFoundPage= () => {
    return <>
        <MDBContainer fluid style={{height: "100%", backgroundColor: "#e9ebed"}}>
            <Container className="justify-content-center" style={{paddingTop: "3%", paddingBottom: "10%", width: "60%"}}>
                <h1> 404 Not Found </h1>
                <Link to="../../../home"> Back to Home Page</Link>
            </Container>
        </MDBContainer>
    </>
}

export default NotFoundPage