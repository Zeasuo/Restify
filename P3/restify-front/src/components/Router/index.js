import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginForm from "../LoginForm";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="signIn" element={<LoginForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router