import * as React from 'react'
import './auth.css'
import {Link} from "react-router-dom";


const Register = () => {

    const focusFunc = () => {
        const inputs = document.querySelectorAll(".input");

        const handleInputs = (e) => {
            let parent = e.target.parentNode;
            parent.classList.add("focus");
        }

        inputs.forEach((input) => {
            input.addEventListener("focus", handleInputs);
        })
    }

    return (
        <div className="contain">
            <div className="form">
                <div className="container-info"></div>
                <div className="container-form">
                    <span className="circle one"></span>
                    <span className="circle two"></span>

                    <form className="form-control" onClick={focusFunc}>
                        <h3 className="title">Sign Up</h3>
                        <div className="input-container">
                            <input type="text" className="input" />
                            <label style={{ display: "flex", alignItems: "center", color: "#808080" }}>
                                <i className="ri-lg ri-user-6-fill"></i>
                                Full name
                            </label>
                            <span style={{ display: "flex", alignItems: "center" }}> <i className="ri-lg ri-user-6-fill"></i> Full name </span>
                        </div>
                        <div className="input-container">
                            <input type="email" className="input" />
                            <label style={{ display: "flex", alignItems: "center", color: "#808080" }}>
                                <i className="ri-lg ri-mail-send-fill"></i>
                                Email address
                            </label>
                            <span style={{ display: "flex", alignItems: "center" }}> <i className="ri-lg ri-mail-send-fill"></i> Email address </span>
                        </div>
                        <div className="input-container">
                            <input type="password" className="input" />
                            <label style={{ display: "flex", alignItems: "center", color: "#808080" }}>
                                <i className="ri-lg ri-lock-fill"></i>
                                Password
                            </label>
                            <span style={{ display: "flex", alignItems: "center" }}> <i className="ri-lg ri-lock-fill"></i> Password </span>
                        </div>
                        <div className="input-container">
                            <input type="password" className="input" />
                            <label style={{ display: "flex", alignItems: "center", color: "#808080" }}>
                                <i className="ri-lg ri-lock-fill"></i>
                                Confirm Password
                            </label>
                            <span style={{ display: "flex", alignItems: "center" }}> <i className="ri-lg ri-lock-fill"></i> Confirm Password </span>
                        </div>

                        <br/>
                        <button className="btn">
                            <i className="ri-send-plane-fill ri-1x"></i> Send
                        </button>
                        <span style={{ textAlign: "center" }}>
                            <h4> Already have an account ? please <Link to="/login" className="link"> Sign In </Link> </h4>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;