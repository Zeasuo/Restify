import Button from 'react-bootstrap/Button'
import { XLg} from "react-bootstrap-icons";
import React, {useState} from 'react'

const LikedBtn = ({blogID}) =>{
    const [deleted, setDeleted] = useState(false)

    const handleClick = () =>{
        setDeleted(True)
        fetch("http://localhost:8000/socials/delete_blog/"+blogID+"/", {
            method:"DELETE",
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
        .catch((error)=>{
            alert(error)
        })
    }

    return <>
    <Button variant="warning" onClick={handleClick}>
        {deleted? <span>Deleted</span>:<XLg></XLg>}
    </Button>
    </>
}

export default LikedBtn