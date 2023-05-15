import React, { useState } from "react";
import {
  MdShoppingBasket,
  MdAdd,
  MdLogout,
  MdHome,
  MdList,
  MdSupervisedUserCircle,
  MdRoomService,
  MdContacts, MdPersonPinCircle, MdAccountCircle
} from "react-icons/md";
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        // eslint-disable-next-line
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold"> RestShop </p>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-20 "
          >
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              <Link to="/"> Home </Link>
            </li>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              <Link to="/menu"> Menu </Link>
            </li>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              <Link to="/about"> About Us </Link>
            </li>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              <Link to="/service"> Service </Link>
            </li>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              <Link to="/contact"> Contact </Link>
            </li>
          </motion.ul>

          <div
            className="relative flex items-center justify-center"
            onClick={showCart}
          >
            <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
            {cartItems && cartItems.length > 0 && (
              <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="min-w-210 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
              >
                <p className="flex m-2 p-2  flex items-center justify-center gap-3 transition-all duration-100 ease-in-out text-textColor text-base">
                  <img src={user ? user.photoURL : Avatar} alt="" className="w-10 min-w-[40px] h-10 min-h-[40px] rounded-full shadow-2xl"/>
                  <div className="flex flex-col">
                    <span> {user ? user.displayName : Avatar} </span>
                    <p className="justify-center items-center font-light text-xs"> {user ? user.email : Avatar} </p>
                  </div>
                </p>
                <hr className="border-dashed"/>
                {user && user.email === "ngahemeniw@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                      onClick={() => setIsMenu(false)}
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}

                <Link to={"/profile"}>
                  <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                      onClick={() => setIsMenu(false)}
                  >
                    Profile <MdAccountCircle />
                  </p>
                </Link>
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full ">
        <div
          className="relative flex items-center justify-center"
          onClick={showCart}
        >
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
          {cartItems && cartItems.length > 0 && (
            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
          )}
        </div>

        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold"> RestShop</p>
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="min-w-210 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
            >


              <ul className="flex flex-col ">
                <p className="flex m-2 p-2  flex items-center justify-center gap-3 transition-all duration-100 ease-in-out text-textColor text-base">
                  <img src={user ? user.photoURL : Avatar} alt="" className="w-10 min-w-[40px] h-10 min-h-[40px] rounded-full shadow-2xl"/>
                  <div className="flex flex-col">
                    <span> {user ? user.displayName : Avatar} </span>
                    <p className="justify-center items-center font-light text-xs"> {user ? user.email : Avatar} </p>
                  </div>
                </p>
                <hr className="border-dashed px-2"/>
                <Link to="/"
                      onClick={() => setIsMenu(false)}
                      className="p-3 flex items-center hover:text-headingColor gap-3 cursor-pointer transition-all duration-100 ease-in-out hover:bg-slate-100 text-textColor text-base"
                > <MdHome /> Home </Link>
                <Link to="/menu"
                      onClick={() => setIsMenu(false)}
                      className="p-3 flex items-center hover:text-headingColor gap-3 cursor-pointer transition-all duration-100 ease-in-out hover:bg-slate-100 text-textColor text-base"
                > <MdList /> Menu </Link>
                <Link to="/about"
                      onClick={() => setIsMenu(false)}
                      className="p-3 flex items-center hover:text-headingColor gap-3 cursor-pointer transition-all duration-100 ease-in-out hover:bg-slate-100 text-textColor text-base"
                > <MdSupervisedUserCircle /> About Us </Link>
                <Link to="/services"
                      onClick={() => setIsMenu(false)}
                      className="p-3 flex items-center hover:text-headingColor gap-3 cursor-pointer transition-all duration-100 ease-in-out hover:bg-slate-100 text-textColor text-base"
                > <MdRoomService /> Service </Link>
                <Link to="/services"
                      onClick={() => setIsMenu(false)}
                      className="p-3 flex items-center hover:text-headingColor gap-3 cursor-pointer transition-all duration-100 ease-in-out hover:bg-slate-100 text-textColor text-base"
                > <MdContacts /> Contact </Link>
              </ul>

              {user && user.email === "ngahemeniw@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                      New Item <MdAdd />
                    </p>
                  </Link>
              )}

              <p
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
