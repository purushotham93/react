import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import Posts from "./Posts";
import RegistrationForm from "./RegistrationForm";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Hello></Hello>}></Route>
            <Route path="/posts" element={<Posts></Posts>}></Route>
            <Route path="/registration" element={<RegistrationForm></RegistrationForm>}></Route>
        </Routes>
    )
}

export default AppRoutes;
