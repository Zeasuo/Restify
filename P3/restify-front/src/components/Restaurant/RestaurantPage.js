import React, {useState, useEffect} from "react";
import { Route, useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import RestaurantSideBar from "./RestaurantSideBar";
import Header from "./RestaurantMain/Header.jsx";
import { Heart, HeartFill} from "react-bootstrap-icons";
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {MDBContainer} from "mdb-react-ui-kit";
import {useNavigate} from "react-router-dom";


const RestaurantLike = ({restaurantName, numLikes, initState}) =>{
    const [liked, setLiked] = useState(initState)
    const [num_likes, setNumLikes] = useState(numLikes)

    const handleClick = () =>{
        if (liked === true){
            setLiked(false)
            fetch("http://localhost:8000/socials/unlike_restaurant/"+restaurantName+"/", {
                method:"DELETE",
                headers:{
                    'Authorization': "Token "+localStorage.getItem("restifyToken"),
                    'Content-Type': 'application/json',
                }
            })
            .then(response =>{
                if (response.ok){
                    setNumLikes((liked)=>liked-1)
                    return response.json()
                }
                else{
                    throw new Error("oops, Something went wrong")
                }
            })
            .catch((error)=>{
                alert("You have not liked this restaurant yet")
            })
        }
        else if(liked === false){
            setLiked(true)
            fetch("http://localhost:8000/socials/like_restaurant/"+restaurantName+"/", {
                method:"POST",
                headers:{
                    'Authorization': "Token "+localStorage.getItem("restifyToken"),
                    'Content-Type': 'application/json',
                }
            })
            .then(response =>{
                if (response.ok){
                    return response.json()
                }
                else{
                    throw new Error("oops, Something went wrong")
                }
            })
            .then(json=>{
                setNumLikes(json.num_likes)
            })
            .then(()=>console.log(num_likes))
            .catch((error)=>{
                alert("You Liked this restaurant")
            })
        }
    }

    return 
}

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
    const [fetched, setFetched] = useState(false)
    const [liked, setLiked] = useState(false)
    
    const [info, setInfo] = useState()




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
                        console.log(data)
                        setFetched(true)
                        setAddress(data.address);
                        setPostalCode(data.postal_code);
                        setDescription(data.description);
                        setLogo(data.logo);
                        setNumFollower(data.num_follower);
                        setNumLike(data.num_like);
                        setLikedUsers(()=>[...data.liked_users]);
                        setNumBlogs(data.num_blog);
                        setPhoneNumber(data.phone_number)
                        setFollowedUsers(data.followed_users)
                        if (data.followed_users.indexOf(localStorage.getItem("username"))>-1){
                            setFollow(false)
                        }
                        if (data.liked_users.indexOf(localStorage.getItem("username"))>-1){
                            setLiked(true)
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

    const handleClick = () =>{
        if (liked === true){
            setLiked(false)
            fetch("http://localhost:8000/socials/unlike_restaurant/"+restaurantName+"/", {
                method:"DELETE",
                headers:{
                    'Authorization': "Token "+localStorage.getItem("restifyToken"),
                    'Content-Type': 'application/json',
                }
            })
            .then(response =>{
                if (response.ok){
                    setNumLike((liked)=>liked-1)
                    return response.json()
                }
                else{
                    throw new Error("oops, Something went wrong")
                }
            })
            .catch((error)=>{
                alert("You have not liked this restaurant yet")
            })
        }
        else if(liked === false){
            setLiked(true)
            fetch("http://localhost:8000/socials/like_restaurant/"+restaurantName+"/", {
                method:"POST",
                headers:{
                    'Authorization': "Token "+localStorage.getItem("restifyToken"),
                    'Content-Type': 'application/json',
                }
            })
            .then(response =>{
                if (response.ok){
                    return response.json()
                }
                else{
                    throw new Error("oops, Something went wrong")
                }
            })
            .then(json=>{
                setNumLike((liked)=>liked+1)
            })
            .catch((error)=>{
                alert("You Liked this restaurant")
            })
        }
    }


    const render = (
        <Container fluid>
            <div className = "row p-0 flex-nowrap" >
                <div className="col-3" style={{"paddingLeft": 0, "backgroundColor": "#415973"}}>
                    <RestaurantSideBar/>
                </div>

                <MDBContainer fluid style={{height: "100%", backgroundColor: "#e9ebed"}}>
                    <div className="col-9 md-auto">
                        <Header restaurantName={restaurantName} pass_logo={logo}/>
<<<<<<< HEAD
                        <Button variant="light" onClick={handleClick}>
                            {liked?<HeartFill></HeartFill>:<Heart></Heart>} {numLike} Likes
                        </Button>
=======
                        <RestaurantLike restaurantName={restaurantName} numLikes={numLike} initState={liked_users.values(localStorage.getItem("username")) > -1?true:false}/>
>>>>>>> 1d8df8d719aa20d53f2f97f05225c1c9f608ba15
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
    )

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
        {fetched?render:<div>Still loading</div>}
    </>
};

export default RestaurantPage;
