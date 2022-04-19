import { Container } from "react-bootstrap";
import React, {useEffect, useState} from 'react';
import { Form, Button} from 'react-bootstrap';

// https://react-bootstrap.github.io/forms/overview/
// https://stackoverflow.com/questions/51913522/reactjs-multiple-lines-of-input-using-form

const CreateBlog = () =>{
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [titlenotification, setTitleNotification] = useState("")
    const [contentnotification, setContentNotification] = useState("")
    const [titlecheck, setTitleCheck] = useState(false)
    const [contentcheck, setContentCheck] = useState(false)
    const [check, setCheck] = useState(false)
    const [checkall, setCheckall] = useState(true)
    const [submitnotification, setSubmitNotification] = useState("")

    // https://stackoverflow.com/questions/5599934/regular-expression-that-allows-spaces-in-a-string-but-not-only-blank-spaces
    const Checktitle = (title) => {
        var notification = "Title cannot be empty or only spaces!";
        var regex = /^(?=.*\S).{1,100}$/
        if(regex.test(title)){
            setTitle(title);
            setTitleCheck(true);
            setTitleNotification("");
        }
        else{
            setTitleCheck(false);
            setTitleNotification(notification);
        }
    }

    const Checkcontent = (content) => {
        var notification = "Content cannot be empty or only spaces!";
        var regex = /^(?=.*\S).+$/
        if(regex.test(content)){
            setContent(content);
            setContentCheck(true);
            setContentNotification("");
        }
        else{
            setContentCheck(false);
            setContentNotification(notification);
        }
    }

    const submit = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/socials/add_blog/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "title": title,
                "content": content
            })
        })
            .then((response) => {
                if (response.ok) {
                    setSubmitNotification("You have made a blog successfully! Congrats!");
                }
                throw new Error('Something went wrong');
            })
    }

    useEffect(()=>{
        if (titlecheck && contentcheck && check){
            setCheckall(false);
        }
        else{
            setCheckall(true);
        }
    }, [titlecheck && contentcheck && check])

    return <>
        <Form style={{marginLeft: "30%", marginTop: "5%"}} onSubmit={submit}>
            <div style={{color:"red"}}>{titlenotification}</div>
            <Form.Group className="mb-3">
                <Form.Control type="text"
                              style={{width:"50%"}}
                              placeholder="Title" onChange={(e) => Checktitle(e.target.value)}/>
            </Form.Group>

            <div style={{color:"red"}}>{contentnotification}</div>
            <Form.Group className="mb-3">
                <Form.Control as="textarea" rows="5"
                              style={{width:"50%"}}
                              placeholder="Text" onChange={(e) => Checkcontent(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Your blog's title and content must be polite." onClick={(e)=>setCheck(e.target.checked)}/>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={checkall}>Submit</Button>
            <div style={{color:"red"}}>{submitnotification}</div>
        </Form>
    </>

}

export default CreateBlog