import * as React from 'react'
import './auth.css'
import {Link} from "react-router-dom";
import * as Yup from "yup";
import {ErrorMessage} from "formik";


const Login = () => {

    const validationSchema = Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
    });

    const initialValues = {
        email: "",
        password: "",
    };

    const renderError = (message) => <p className="alert-danger">{message}</p>;

    const focusFunc = () => {
        const inputs = document.querySelectorAll(".input");

        const handleInputs = (e) => {
            const parent = e.target.parentNode;
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

                    <form
                        className="form-control"
                        onClick={focusFunc}
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={async (values, { resetForm }) => {
                            resetForm();
                        }}
                    >
                        <h3 className="title">Login</h3>
                        <div className="input-container">
                            <input type="email" className="input" name="email" />
                            <label style={{ display: "flex", alignItems: "center", color: "#808080" }}>
                                <i className="ri-lg ri-mail-send-fill"></i>
                                Email address
                            </label>
                            <span style={{ display: "flex", alignItems: "center" }}> <i className="ri-lg ri-mail-send-fill"></i> Email address </span>
                            <ErrorMessage name="email" render={renderError} />
                        </div>
                        <div className="input-container">
                            <input type="password" className="input" name="password" />
                            <label style={{ display: "flex", alignItems: "center", color: "#808080" }}>
                                <i className="ri-lg ri-lock-fill"></i>
                                Password
                            </label>
                            <span style={{ display: "flex", alignItems: "center" }}> <i className="ri-lg ri-lock-fill"></i> Password </span>
                            <ErrorMessage name="password" render={renderError} />
                        </div>

                        <p>
                            <Link to="" className="link">Forgot Password ?</Link>
                        </p>
                        <br/>
                        <button className="btn">
                            <i className="ri-send-plane-fill ri-1x"></i> Send
                        </button>
                        <span style={{ textAlign: "center" }}>
                            <h4> Don't have an account ? please <Link to="/signup" className="link"> Sign Up </Link> </h4>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;