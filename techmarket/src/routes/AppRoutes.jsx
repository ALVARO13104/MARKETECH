import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Favorites from "../pages/Favorites";
import CreatePublication from "../pages/CreatePublication";

function AppRoutes() {

    return (

        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/gallery" element={<Gallery />} />

            <Route path="/detail/:id" element={<Detail />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/profile" element={<Profile />} />

            <Route path="/favorites" element={<Favorites />} />

            <Route path="/create" element={<CreatePublication />} />

        </Routes>

    );

}

export default AppRoutes;