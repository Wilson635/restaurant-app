/* eslint-disable no-unused-vars */

import * as React from 'react';
import './style/contact.style.css';
import {
    BiBookmark,
    BiChat,
    BiMailSend,
    BiPhoneCall,
    BiSend,
    BiUser
} from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {Helmet} from "./helmet/Helmet";
import { NewsLetter } from './UI/NewsLetter';
import CartContainer from "./CartContainer";
import { useStateValue } from "../context/StateProvider";


export const ContactPage = () => {

    const [{ foodItems, cartShow }, dispatch] = useStateValue();

    const Click = () => {

        const inputs = document.querySelectorAll(".input");

        const handleInputs = (e) => {
            const parent = e.target.parentNode;
            parent.classList.add("focus");
        }

        const blurFunc = (e) => {
            let parent = e.target.parentNode;
            if (e.target.value === "") {
                parent.classList.remove("focus");
            }
        }

        inputs.forEach((input) => {
            input.addEventListener("focus", handleInputs);
            input.addEventListener("blur", blurFunc);
        })

    }


    return (
        <Helmet title="Contact">
            <div className="container">
                <span className="big-circle"></span>
                <div className="form m-0">
                    <div className="contact-info">
                        <h3 className="title">Let's get in touch</h3>
                        <p className="text">
                            The Fastest Delivery in Your City.
                            Come to ask your problem
                        </p>

                        <div className="info">
                            <div className="information gap-3">
                                <span className="p-2 bg-blue-100 rounded-md text-blue-500"> 
                                    <HiOutlineLocationMarker size={25}/> 
                                </span>
                                <p> Douala, Yassa - Yatchika </p>
                            </div>
                            <div className="information gap-3">
                                <span className="p-2 bg-blue-100 rounded-md text-blue-500"> 
                                    <BiMailSend size={25}/> 
                                </span>
                                <p> wngahemeni@gmail.com </p>
                            </div>
                            <div className="information gap-3">
                                <span className="p-2 bg-blue-100 rounded-md text-blue-500"> 
                                    <BiPhoneCall size={25}/> 
                                </span>
                                <p> +237 659 38 96 49 </p>
                            </div>
                            <h4 className="font-semibold text-xl" style={{ color: '#349ebf'}}> Connect with us : </h4>
                            <div className="wrapper">

                                <div className="icon facebook">
                                    <div className="tooltip">
                                        Facebook
                                    </div>
                                    <span><i className="fab fa-facebook-f"></i></span>
                                </div>
                                <div className="icon twitter">
                                    <div className="tooltip">
                                        Twitter
                                    </div>
                                    <span><i className="fab fa-twitter"></i></span>
                                </div>
                                <div className="icon instagram">
                                    <div className="tooltip">
                                        Instagram
                                    </div>
                                    <span><i className="fab fa-instagram"></i></span>
                                </div>
                                <div className="icon github">
                                    <div className="tooltip">
                                        Github
                                    </div>
                                    <span><i className="fab fa-github"></i></span>
                                </div>
                                <div className="icon youtube">
                                    <div className="tooltip">
                                        YouTube
                                    </div>
                                    <span><i className="fab fa-youtube"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <span className="circle one"></span>
                        <span className="circle two"></span>

                        <form action="" onClick={Click}>
                            <h3 className="title"> Contact us </h3>
                            <div className="input-container">
                                <input type="text" name="name" className="input"/>
                                <label htmlFor=""> <BiUser className="w-5 h-5"/> Username </label>
                                <span> Username </span>
                            </div>
                            <div className="input-container">
                                <input type="text" name="name" className="input"/>
                                <label htmlFor=""> <BiMailSend className="w-5 h-5"/> Email Address </label>
                                <span> Email Address </span>
                            </div>
                            <div className="input-container">
                                <input type="text" name="name" className="input"/>
                                <label htmlFor=""> <BiPhoneCall className="w-5 h-5" /> Phone Number </label>
                                <span> Phone Number </span>
                            </div>
                            <div className="input-container">
                                <input type="text" name="name" className="input"/>
                                <label htmlFor=""> <BiBookmark className="w-5 h-5"/> Objet </label>
                                <span> Objet </span>
                            </div>
                            <div className="input-container textarea">
                                <textarea name="message" className="input"></textarea>
                                <label htmlFor=""> <BiChat className="w-5 h-5"/> Message </label>
                                <span> Message </span>
                            </div>
                            <button type="submit" className="btn"> Send <BiSend className="w-5 h-5"/> </button>
                        </form>
                    </div>
                </div>
            </div>
            <NewsLetter />
            {cartShow && <CartContainer />}
        </Helmet>
    );
};