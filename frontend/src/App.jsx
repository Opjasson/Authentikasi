import React, { Fragment } from "react";
import Login from "./component/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./component/Register";
import Navbar from "./component/Navbar";
import Dashboard from "./component/Dashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/dashboard"
                    element={
                        <>
                            {" "}
                            <Navbar /> <Dashboard />
                        </>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
