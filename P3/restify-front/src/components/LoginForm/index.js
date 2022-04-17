
import Form from 'react-bootstrap/Form'
import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button'
import {Link, Outlet} from "react-router-dom";
import logo from "../images/Resify-logo-new.png";

const LoginForm = () => {
    //TODO Need to add Ajax request for submit button.
    const [errorMessages, setErrorMessages] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [token, setToken] = useState();
    const [username, setUsername] = useState("")

    const renderErrorMessage = () => errorMessages && (
        <div className="error" style={{color:'red'}}>{errorMessages}</div>
    );

    function handleSubmit(e){
        e.preventDefault();
        var {username, password} = document.forms[0]
        fetch('http://127.0.0.1:8000/accounts/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": username.value,
                "password": password.value
            })
        })
        .then(response=>response.json())
        .then(json => {
            if (json.token){
                setToken(json.token)
                setUsername(json.username)
            }
            else{
                setErrorMessages(json)
            }
        })
        
        if (token){
            localStorage.setItem('restifyToken', token);
            localStorage.setItem('username', username.value);
            setIsSubmitted(true);
        }

    }

    const renderForm = (
        <div id = "Signin-form" className = "col-md-5 mx-auto col-lg-5">
            <Form className = "p-4 p-md-5 border rounded-3 bg-light" onSubmit={handleSubmit}>
                {renderErrorMessage("LoginError")}
                <Form.Group className="floating mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" />
                </Form.Group>
            
                <Form.Group className="floating mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="checkbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Signin
                </Button>
                <nav>
                    <Link to = "/signUp"> SignUp </Link>
                </nav>
                <Outlet />

                <Form.Group>
                    <Form.Text className="text-muted">
                        By clicking Sign In, you agree to the terms of use
                    </Form.Text>
                </Form.Group>
            </Form>
        </div>
    )

    return <>
        <div className='container'>
            <div className="row align-items-center g-lg-5 py-5">
                <div className='col-md-3'>
                    <img src = {logo} id = "logo-image"></img>
                </div>
            </div>
            <div className="row align-items-center g-lg-5 py-5">
                {isSubmitted?<div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    </>
}

export default LoginForm