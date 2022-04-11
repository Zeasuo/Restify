import Form from 'react-bootstrap/Form'
import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button'
import {Link, Outlet} from "react-router-dom";
import logo from "../images/Resify-logo-new.png";

const SignUpForm = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const renderForm = (
        <div id = "Signin-form" className = "col-sm column align-items-center g-lg-5 py-5">
            <Form >
                <div className = "bg-white p-5" style={{margin:"10% 20% 10% -5%"}}> 
                    <Form.Group className="input-group mb-4">
                        <Form.Label controlId= "firstname"></Form.Label>
                        <Form.Control type="text" placeholder="First Name" />

                        <Form.Label controlId= "lastname"></Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>

                    <Form.Group className="input-group mb-4" controlId="username">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>

                    <Form.Group className="input-group mb-4" controlId="email">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" placeholder="Email" />
                    </Form.Group>
                
                    <Form.Group className="input-group mb-4" controlId="password">
                        <Form.Label></Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="input-group mb-4" controlId="password2">
                        <Form.Label></Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>

                    <Form.Group className="input-group mb-4" controlId="checkbox">
                        <Form.Check type="checkbox" label="I agree to the Restify Privacy Policy" />
                    </Form.Group>
                    <nav>
                        <Link to = "/signIn" className='w-100 mb-3 mx-auto'> Sign In Instead</Link>
                        <Button variant="primary" type="submit" className='w-50 btn btn-lg btn-success' style={{"margin-left": "13.5%"}}>
                            Sign up!
                        </Button>
                    </nav>
                    
                </div>
            </Form>
        </div>
    )

    return <>
    <div className='container'>
        <div className="row">
            <div className='col-sm' style={{"margin-left": "7%"}}>
                <div class="row align-items-center g-lg-5 py-5">
                    <div class="col-md-3">
                        <img src = {logo} id = "logo-image"></img>
                    </div>
                    <h1 className='font-weight-bold mt-4' style={{"font-family": "Libre Baskerville, serif", "font-family": "Roboto, sans-serif"}}>
                        <span className='row'>The go-to place for</span>
                        <span className='row'>restaurant owners and foodies</span>
                    </h1>
                </div>
            </div>
            {renderForm}
        </div>
        
    </div>
</>
}

export default SignUpForm
