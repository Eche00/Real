import React from "react";
import { Search } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";

function Header() {
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
        <button className="sm:hidden text-3xl">&#9776;</button>
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
          <Link to="/signup">
            <button className="  bg-blue-500  mr-2  px-5 py-2  rounded-full text-white cursor-pointer">
              SignUp
            </button>
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
