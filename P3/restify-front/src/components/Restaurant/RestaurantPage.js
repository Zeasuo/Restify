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
            <div className = "row flex-nowrap">
                <div className="col-3 px-sm-2 px-0 bg-light md-auto">
                    <RestaurantSideBar/>
                </div>
                <div className="col-6 pt-5 md-auto">
                    <Menu />    
                </div>
            </div>
        </Container>
    </>
};

export default RestaurantPage;
