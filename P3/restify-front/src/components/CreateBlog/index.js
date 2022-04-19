import { Container } from "react-bootstrap";
import React, {useEffect, useState} from 'react';
import { Form, Button} from 'react-bootstrap';

// https://react-bootstrap.github.io/forms/overview/
// https://stackoverflow.com/questions/51913522/reactjs-multiple-lines-of-input-using-form

const CreateBlog = () =>{
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [check, setCheck] = useState(false)

    return <>
        <Form style={{marginLeft: "30%", marginTop: "10%"}}>
            <Form.Group className="mb-3">
                <Form.Control type="text"
                              style={{width:"50%"}}
                              placeholder="Title" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control as="textarea" rows="5"
                              style={{width:"50%"}}
                              placeholder="Text" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Your blog's title and content must be polite." />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    </>

}

export default CreateBlog