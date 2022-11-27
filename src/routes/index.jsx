import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeView, LoginView, SignUpView } from "../pages";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView/>}/>
                <Route path="/login" element={<LoginView/>}/>
                <Route path="/register" element={<SignUpView/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router