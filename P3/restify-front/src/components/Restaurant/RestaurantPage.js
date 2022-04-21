import React from "react";
import { Route, useParams } from "react-router-dom";
import Menu from "../Menu";

const RestaurantPage = () => {
    let { restaurantName } = useParams();
    const restaurant_name = JSON.stringify(restaurantName);
    return (
        <div>
            <Menu />
            <h1>{restaurant_name}</h1>
        </div>
    );
};

export default RestaurantPage;
