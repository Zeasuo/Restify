import React from "react";
import { Route, useParams } from "react-router-dom";
import Menu from "../Menu";
import Container from 'react-bootstrap/Container'
import RestaurantSideBar from "./RestaurantSideBar";

const RestaurantPage = () => {
    let { restaurantName } = useParams();
    const restaurant_name = JSON.stringify(restaurantName);
    return <>
        <Container fluid>
            <div className = "row p-0 flex-nowrap" >
                <div className="col-3" style={{"paddingLeft": 0}}>
                    <RestaurantSideBar/>
                </div>
                <div className="col-9 pt-5 md-auto">
                    
                </div>
            </div>
        </Container>
    </>
};

export default RestaurantPage;
