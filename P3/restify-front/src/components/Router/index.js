import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";
import Profile from "../Profile";
import RenderNavbar from "../Navbar";
import HomePage from "../Homepage";
import EditProfile from "../EditProfile";
import CreateBlog from "../CreateBlog";
import React from 'react'
import FeedPage from "../FeedPage";
import AddRestaurant from '../AddRestaurant/index';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="signIn" element={<LoginForm />} />
                    <Route path="signUp" element={<SignUpForm />} />
                    <Route path="profile" >
                        <Route index element={<Profile />} />
                        <Route path="edit" element={<EditProfile />} />
                    </Route>
                    <Route path='feed' element={<FeedPage />} />
                    <Route path="restaurant" element={<RenderNavbar />}>
                        <Route path="register" element={<AddRestaurant />} />
                    </Route>
                </Route>
                <Route path="/home" element={<RenderNavbar />}>
                    <Route index element={<HomePage />} />
                    <Route path="createblog" element={<CreateBlog />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default Router