import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const userRegis = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5001/users", {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword,
            });
            navigate("/login");
        } catch (error) {
            if (error) {
                setMsg(error.response.data.msg);
            }
            console.log(error.response.data);
        }
    };

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={userRegis} className="box">
                                <div className="field mt-5">
                                    <p className="has-text-centered">{msg}</p>
                                    <label className="label">Name</label>
                                    <div className="controls">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(a) =>
                                                setName(a.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input
                                            type="email"
                                            className="input"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(a) =>
                                                setEmail(a.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input
                                            type="password"
                                            className="input"
                                            placeholder="*****"
                                            value={password}
                                            onChange={(a) =>
                                                setPassword(a.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">
                                        Confirm Password
                                    </label>
                                    <div className="controls">
                                        <input
                                            type="password"
                                            className="input"
                                            placeholder="*****"
                                            value={confPassword}
                                            onChange={(a) =>
                                                setConfPassword(a.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
