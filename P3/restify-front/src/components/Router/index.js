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
import Restaurant from "../Restaurant/RestaurantPage";
import Notification from "../Notification";
import BlogPage from "../BlogPage";
import Menu from "../Restaurant/MenuPage";
import RestaurantSideBar from '../Restaurant/RestaurantSideBar';

/**
 *
 */
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" >
                    <Route index element={<LoginForm />} />
                    <Route path="signIn" element={<LoginForm />} />
                    <Route path="signUp" element={<SignUpForm />} />

                    <Route path="profile" element={<RenderNavbar />}>
                        <Route index element={<Profile />} />
                        <Route path="edit" element={<EditProfile />} />
                    </Route>


                    <Route exact path="restaurant" element={<RenderNavbar />}>
                        <Route path="register" element={<AddRestaurant />}/>
                        <Route path="followup" element={<Description />} />
                        <Route exact path=":restaurantName">
                            <Route index element={<Restaurant />} />
                            <Route path="menu" element={<Menu />}/>
                            <Route path="gallery" />
                            <Route path="edit" />
                            <Route path='blog' element={<BlogPage />} />
                        </Route>
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
                    <Route path='feed' element={<FeedPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router