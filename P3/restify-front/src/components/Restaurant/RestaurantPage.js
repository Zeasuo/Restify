import React from "react";
import { Route, useParams } from "react-router-dom";
import Menu from "../Menu";
import Container from 'react-bootstrap/Container'
import RestaurantSideBar from "./RestaurantSideBar";
import Header from "./RestaurantMain/Header.jsx";
import RestaurantLike from "../LikeBtn/restaurantLike";

const RestaurantPage = () => {
    let { restaurantName } = useParams();
    const [address, setAddress] = React.useState("");
    const [postalCode, setPostalCode] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [logo, setLogo] = React.useState("");
    const [numFollower, setNumFollower] = React.useState(0);
    const [numLike, setNumLike] = React.useState(0);
    const [liked_users, setLikedUsers] = React.useState([]);

    // fetch restaurant data
    React.useEffect(() => {
        fetch("http://127.0.0.1:8000/restaurants/get/"+restaurantName+"/", {
            method: "GET",
            headers: {
                'Authorization': "Token "+localStorage.getItem("restifyToken"),
                "Content-Type": "application/json",
                
            },
        })
            .then((response) => {
                if (response.ok) {
                    response.json().then((data) => {
                        setAddress(data.address);
                        setPostalCode(data.postal_code);
                        setDescription(data.description);
                        setLogo(data.logo);
                        setNumFollower(data.num_follower);
                        setNumLike(data.num_like);
                        setLikedUsers(data.liked_users);   
                    });
                }
                else {
                    // return 404 page
                    alert("404");
                }
            });
    }, []);

    
    return <>
        <Container fluid>
            <div className = "row p-0 flex-nowrap" >
                <div className="col-3" style={{"paddingLeft": 0, "backgroundColor": "#415973"}}>
                    <RestaurantSideBar/>
                </div>
                <div className="col-9 md-auto">
                    <Header restaurantName={restaurantName} pass_logo={logo}/>
                    <RestaurantLike restaurantName={restaurantName} numLikes={numLike} initState={liked_users.indexOf(localStorage.getItem("username")) > -1?true:false}/>
                </div>
            </div>
        </Container>
    </>
};

export default RestaurantPage;
