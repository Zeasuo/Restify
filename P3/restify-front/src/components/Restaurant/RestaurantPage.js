import React, {useState, useEffect} from "react";
import { Route, useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import RestaurantSideBar from "./RestaurantSideBar";
import Header from "./RestaurantMain/Header.jsx";
import RestaurantLike from "../LikeBtn/restaurantLike";
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {MDBContainer} from "mdb-react-ui-kit";
import {useNavigate} from "react-router-dom";

const RestaurantPage = () => {
    const navigate = useNavigate()
    let { restaurantName } = useParams();
    const [address, setAddress] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [description, setDescription] = useState("");
    const [logo, setLogo] = useState("");
    const [numFollower, setNumFollower] = useState(0);
    const [numLike, setNumLike] = useState(0);
    const [liked_users, setLikedUsers] = useState([]);
    const [numBlogs, setNumBlogs] = useState(0);
    const [phoneNumber, setPhoneNumber] = useState("")
    const [follow, setFollow] = useState(false)
    const [followed_users, setFollowedUsers] = useState([])




    function getData() {
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
                        setNumBlogs(data.num_blog);
                        setPhoneNumber(data.phone_number)
                        setFollowedUsers(data.followed_users)
                        if (data.followed_users.indexOf(localStorage.getItem("username"))>-1){
                            setFollow(false)
                        }
                        else{
                            setFollow(true)
                        }
                    });
                }
                else {
                    navigate("../../../notFound")
                }
            })
            .then(()=>{
                console.log(liked_users)
                console.log(numLike)
                 })
        }

    useEffect(() => {
        getData()
    }, []);

    const followunfollow = (e) =>{
        e.preventDefault()
        if (follow){
            fetch('http://127.0.0.1:8000/socials/follow/' + restaurantName +"/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Token " + localStorage.getItem("restifyToken"),
                }
            }).then((response) =>{
                if (response.ok){
                    setFollow(false)
                }
            })
        }
        else{
            fetch('http://127.0.0.1:8000/socials/unfollow/' + restaurantName +"/", {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Token " + localStorage.getItem("restifyToken"),
                }
            }).then((response) =>{
                if (response.ok){
                    setFollow(true)
                }
            })
        }
    }


    return <>
        <Container fluid>
            <div className = "row p-0 flex-nowrap" >
                <div className="col-3" style={{"paddingLeft": 0, "backgroundColor": "#415973"}}>
                    <RestaurantSideBar/>
                </div>

                <MDBContainer fluid style={{height: "100%", backgroundColor: "#e9ebed"}}>
                    <div className="col-9 md-auto">
                        <Header restaurantName={restaurantName} pass_logo={logo}/>
                        <RestaurantLike restaurantName={restaurantName} numLikes={numLike} initState={liked_users.values(localStorage.getItem("username")) > -1?true:false}/>
                    </div>

                    <Container className="justify-content-center" style={{paddingTop: "2%", paddingBottom: "10%", width: "60%"}}>
                        <Card.Body> <h1> Number of Followers: {numFollower}  |  Number of Likes: {numLike} </h1></Card.Body>
                        <Card.Body> <h2> Address: {address} </h2> </Card.Body>
                        <Card.Body> <h2> Phone Number: {phoneNumber} </h2> </Card.Body>
                        <Card.Body> <h2> Postal Code: {postalCode} </h2> </Card.Body>
                        <Card.Body> <h2> Number of Blogs: {numBlogs} </h2> </Card.Body>
                        <Card.Body> <h2> Description: {description} </h2> </Card.Body>
                        <Button variant="danger"
                                onClick={(e) => followunfollow(e)}>{follow? "Follow" : "Unfollow"}</Button>
                    </Container>
                </MDBContainer>
            </div>
        </Container>
    </>
};

export default RestaurantPage;
