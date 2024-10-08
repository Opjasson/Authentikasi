import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt, { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [name, setName] = useState("");
    const [token, setToken] = useState("");
    const [expire, setExpire] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        refreshToken();
    }, []);
    const refreshToken = async () => {
        try {
            const response = await axios.get("http://localhost:5001/token");
            setToken(response.data.accessToken);
            const decoded = jwtDecode(response.data.accessToken);
            console.log(token)
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                console.log(error);
                navigate("/");
            }
        }
    };

    const axiosJwt = axios.create();
    axiosJwt.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get("http://localhost:5001/token");
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwtDecode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error)=>{
        return Promise.reject(error)});

    const getUsers = async () => {
        const response = await axiosJwt.get("http://localhost:5001/users", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data);
    };

    return (
        <div className="container mt-5">
            <h1>Welcome Back : {name}</h1>
            <button onClick={getUsers} className="button is-info">
                Get Users
            </button>
        </div>
    );
}

export default Dashboard;
