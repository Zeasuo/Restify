import React from 'react';
import {Link} from "react-router-dom";

const NotLogInPage= () => {
    return <>
        <h1>You need to Log In before accessing this page!</h1>
        <Link to="/signIn">Click Here to Log In</Link>
    </>
}

export default NotLogInPage