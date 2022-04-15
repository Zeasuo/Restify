import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";
import Profile from "../Profile";
import RenderNavbar from "../Navbar";
import HomePage from "../Homepage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="signIn" element={<LoginForm />} />
                    <Route path="signUp" element={<SignUpForm />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
                <Route path="/" element={<RenderNavbar />}>
                    <Route path="home" element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router