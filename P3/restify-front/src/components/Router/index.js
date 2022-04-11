import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="signIn" element={<LoginForm />} />
                    <Route path="signUp" element={<SignUpForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router