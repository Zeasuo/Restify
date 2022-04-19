import React, {useRef, useCallback, useContext, useState, useEffect} from "react"
import Card from 'react-bootstrap/Card'
import { Container, Row, Col, Tooltip, ListGroup } from 'react-bootstrap';
import { feedAPIContext } from "../../context/feedAPIContext";
import Image from 'react-bootstrap/Image'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { Heart } from "react-bootstrap-icons";

const ImageSlide = (blogID) =>{

}

const Table = () =>{
    const { blogs } = useContext(feedAPIContext)

    /** 
    const getBlogImage = (blogID) =>{
        const images = []
        fetch("http://localhost:8000/get_blog_image/"+blogID+"/", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(json=>{
            images = json
        })
    }
    */

    return <Row style= {{marginTop: "8%"}}>
        <Col className="col-12 col-sm-6 col-md-8">
            {blogs.map(blog=>(
                <Card style={{width:"95%", marginTop: "3%", marginLeft: "5%"}} key={blog.id}>
                    <Card.Header key={blog.id + " header"}>
                        <Image src={blog.logo} width={"100"} height="100"></Image>
                        <span style={{marginLeft:"1%", fontSize:"25px"}}>{blog.restaurant}</span>
                        <h3 style={{marginLeft: "50%"}}>{blog.id}</h3>
                    </Card.Header>
                    <ListGroup as="ul" >
                        <ListGroup.Item key={blog.id +" content"}>
                        <h6>{blog.content}</h6>
                        </ListGroup.Item>
                    </ListGroup>
                    <Card.Footer>
                        <ToggleButton >
                        <Heart></Heart> {blog.num_likes} likes
                        </ToggleButton>
                    </Card.Footer>
                </Card>
            ))}
        </Col>
    </Row>
}

const Feed = () => {
    const [hasMore, setHasMore] = useState(true)
    const [start, setStart] = useState(1)
    const [loading, setLoading] = useState(false)

    const { blogs, setBlogs } = useContext(feedAPIContext)

    const loader = useRef(null);

    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore == true && loading==false){
            setLoading(true)
            setStart((prev) => prev + 1);
            console.log(start)
            getBlog()
        }
        setTimeout(()=>{
            setHasMore(false)
        }, 50)
    }, []);

    useEffect(() => {
        const option = {
          root: null,
          rootMargin: "20px",
          threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
      }, [handleObserver]);

    

    const getBlog = () =>{
        fetch("http://localhost:8000/socials/feed/?page="+start, {
            method: "GET",
            headers: {
                'Authorization': "Token "+localStorage.getItem("restifyToken"),
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(json =>{
            setBlogs(blogs=>[...blogs, ...json.results])
            setStart(start+1)
            console.log(blogs)
            if (!json.next){
                setHasMore(false)
            }
        })
    }


    useEffect(()=>{
        getBlog()
    }, [])
    
    return <>
        <Table />
        <div ref={loader} />
    </>
}

export default Feed;