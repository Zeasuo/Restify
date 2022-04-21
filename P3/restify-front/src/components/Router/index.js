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
import AddRestaurant from "../AddRestaurant/AddRestaurant";
import Description from "../AddRestaurant/Description";
import NotLogInPage from "../NotLogInPage";
import Search from "../SearchResultPage";
import Restaurant from "../Restaurant";
import Notification from "../Notification";

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

                    <Route exact path="restaurant" element={<RenderNavbar />}>
                        <Route path="register" element={<AddRestaurant />}/>
                        <Route path="followup" element={<Description />} />
                        <Route path=":restaurantName" element={<Restaurant />} />
                    </Route>

                    <Route path="notLogIn" element={<NotLogInPage/>} />
                </Route>
                <Route path="/home" element={<RenderNavbar />}>
                    <Route index element={<HomePage />} />
                </Route>

                <Route path="socials" element={<RenderNavbar />}>
                    <Route path="createBlog" element={<CreateBlog />} />
                    <Route path="search" element={<Search />} />
                    <Route path="notifications" element={<Notification />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router