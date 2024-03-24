import React, { useState } from "react";
import { ArrowBack, ExitToApp, Search } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { imageListClasses } from "@mui/material";

function Header() {
  let [dropDown, setDropDown] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className=" w-[100%] shadow-sm shadow-blue-500 py-3 sm:px-0 px-5">
      <header className="  max-w-7xl mx-auto flex justify-between items-center">
        <div className=" text-3xl text-blue-500 font-extrabold flex  items-baseline">
          𝕏
          <span className=" decoration-slice text-lg  font-bold text-black sm:inline-block hidden ">
            State
          </span>
        </div>
        <div className=" flex justify-center items-end w-[100%]">
          <section className=" sm:w-[60%] w-[80%]  border border-blue-500 flex items-center rounded-full  overflow-hidden  py-2">
            {" "}
            <input
              type="text"
              className="  flex-grow py-2 w-[100%] outline-none px-5"
            />{" "}
            <button className="  bg-blue-500  sm:mr-2 mr-3 px-5 sm:py-1 py-2 rounded-full  cursor-pointer text-white">
              <Search />
            </button>
          </section>
        </div>
        <button
          className="sm:hidden text-3xl relative"
          onClick={() => setDropDown(!dropDown)}>
          &#9776;
        </button>
        {dropDown && (
          <div className=" absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-[80%] sm:hidden flex">
            <div className=" absolute right-0 top-0 bottom-0 w-[40%] bg-slate-200">
              <nav className=" flex flex-col py-0 justify-center text-sm  font-bold ">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : ""
                  }>
                  <p
                    className=" border border-y border-x-0 border-gray-400 cursor-pointer   w-[100%] p-3 "
                    onClick={() => setDropDown(!dropDown)}>
                    Home
                  </p>
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : ""
                  }>
                  <p
                    className=" cursor-pointer   w-[100%] p-3"
                    onClick={() => setDropDown(!dropDown)}>
                    About
                  </p>
                </NavLink>
                <Link to="/profile">
                  {currentUser ? (
                    <div className="flex  justify-between items-center border  border-x-0 border-gray-400 cursor-pointer   w-[100%] p-3">
                      <p>Profile</p>
                      <img
                        className=" rounded-full h-5 w-[20px] object-cover"
                        src={currentUser.avatar}
                        alt="profile"
                      />{" "}
                    </div>
                  ) : (
                    <p className=" border  border-x-0 border-gray-400 cursor-pointer   w-[100%] p-3">
                      SignUp
                    </p>
                  )}
                </Link>
              </nav>
              <button
                onClick={() => setDropDown(!dropDown)}
                className=" absolute bottom-2 right-2">
                <ExitToApp />
              </button>
            </div>
          </div>
        )}

        <nav className=" sm:flex items-center text-sm gap-3 font-bold hidden">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}>
            <p className="  hover:border-b  border-blue-500  cursor-pointer">
              Home
            </p>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}>
            <p className="  hover:border-b  border-blue-500  cursor-pointer">
              About
            </p>
          </NavLink>
          <Link to="/profile">
            {currentUser ? (
              <img
                className=" rounded-full h-10 w-[60px] object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <button className="  bg-blue-500  mr-2  px-5 py-2  rounded-full text-white cursor-pointer">
                SignUp
              </button>
            )}
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
