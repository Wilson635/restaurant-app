import * as React from 'react';
import {Link} from "react-router-dom";
import {MdAdd} from "react-icons/md";
import {BiCamera, BiGame, BiHome, BiKey, BiMailSend, BiUser, BsCameraVideo, FiSettings} from "react-icons/all";


export const FloatButton = () => {
    return (
        <div className="menu">
            <div className="toggle"> <MdAdd /> </div>
            <Link to="" className="" style={"-i:0"}> <BiHome /> </Link>
            <Link to="" className="" style={"-i:1"}> <BiUser /> </Link>
            <Link to="" className="" style={"-i:2"}> <FiSettings /> </Link>
            <Link to="" className="" style={"-i:3"}> <BiMailSend /> </Link>
            <Link to="" className="" style={"-i:4"}> <BiKey /> </Link>
            <Link to="" className="" style={"-i:5"}> <BsCameraVideo /> </Link>
            <Link to="" className="" style={"-i:6"}> <BiGame /> </Link>
            <Link to="" className="" style={"-i:7"}> <BiCamera /> </Link>
        </div>
    );
};