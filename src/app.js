import { useEffect, useState } from "react";

import Navbar from "./components/navbar";
import {
    Routes,
    Route,
} from "react-router-dom";

import Home from "./components/home";
import Users from "./components/users";
//import Login from "./components/login";
import Register from "./components/register";
import User from "./components/user";
import NotFound from "./components/notFound";
import Dashboard from "./components/dashboard";
import Login from "./components/functional/login";
import LogOut from "./components/logout";
import PrivateRoute from "./privateRoute";

export default function App() {
    const [loggedInuser, setLoggedInUser] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const customResponse = {
                data: {
                    user: {
                        name: "Hadi",
                        email: "test@test.com",
                    },
                },
            };
            if (!customResponse.data.user) {
                setLoggedInUser(null);
                return;
            } else {
                setLoggedInUser(customResponse.data.user);
            }

        }

    }, [])

    return (<>
        <Navbar user={loggedInuser} />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<User />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login setUser={setLoggedInUser} />} />
            <Route path="register" element={<Register />} />
            <Route path="logout" element={<LogOut setUser={setLoggedInUser} />} />
            {/* {loggedInuser && <Route path="dashboard" element={<Dashboard setUser={setLoggedInUser} />} />} */}
            <Route path="dashboard" element={
                <PrivateRoute user={loggedInuser}>
                    <Dashboard />
                </PrivateRoute>
            } />
            <Route path='*' element={<NotFound />} />


        </Routes>


    </>
    );
}