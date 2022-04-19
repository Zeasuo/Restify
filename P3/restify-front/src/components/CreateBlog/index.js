import { Container } from "react-bootstrap";
import React, {useEffect, useState} from 'react';

// https://react-bootstrap.github.io/forms/overview/

const CreateBlog = () =>{
    return <>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter your blog tile here." />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control type="text" placeholder="Enter your blog content here." />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Your blog's title and content must be polite." />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    </>

}

export default CreateBlog