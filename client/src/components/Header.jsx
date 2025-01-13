import React, { useEffect, useState } from "react";
import { ArrowBack, ExitToApp, Language, Search } from "@mui/icons-material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { imageListClasses } from "@mui/material";

function Header() {
  let [dropDown, setDropDown] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(
      `/search?searchTerm=&type=sale&parking=false&furnished=false&offer=false&sort=created_at&order=desc`
    );
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermrUrl = urlParams.get("searchTerm");
    if (searchTermrUrl) {
      setSearchTerm(searchTermrUrl);
    }
  }, [location.search]);
  return (
    <div className=" w-[100%] py-5 sm:px-0 px-5  bg-[#FFFFFF]">
      <header className="  max-w-[90%] mx-auto flex justify-between items-center">
        <div className=" text-[24px]  font-[700] text-blue-500 flex  items-baseline gap-[10px]">
          𝕏
          <span className=" decoration-slice  text-black ">State</span>
        </div>

        <div className="flex items-center gap-[40px]">
          <section className=" sm:hidden flex">
            <Language />
          </section>
          <button
            className="sm:hidden text-3xl relative"
            onClick={() => setDropDown(!dropDown)}>
            &#9776;
          </button>
        </div>
        {dropDown && (
          <div className=" absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-[80%] sm:hidden flex z-10">
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
                  to="/search"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : ""
                  }>
                  <p
                    className=" cursor-pointer   w-[100%] p-3"
                    onClick={() => setDropDown(!dropDown)}>
                    Properties
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
                <NavLink onClick={handleSubmit}>
                  <p
                    className=" cursor-pointer   w-[100%] p-3"
                    onClick={() => setDropDown(!dropDown)}>
                    Sales
                  </p>
                </NavLink>
                <Link to="/profile" onClick={() => setDropDown(!dropDown)}>
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

        <nav className=" sm:flex items-center text-[14px] gap-[40px] font-[600] hidden  py-[10px]">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}>
            <p className="  hover:border-b  border-blue-500  cursor-pointer">
              Home
            </p>
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}>
            <p className="  hover:border-b  border-blue-500  cursor-pointer">
              Properties
            </p>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}>
            <p className="  hover:border-b  border-blue-500  cursor-pointer">
              About
            </p>
          </NavLink>
          <NavLink onClick={handleSubmit}>
            <p className="  hover:border-b  border-blue-500  cursor-pointer">
              Sales
            </p>
          </NavLink>

          <div>
            <Language />
          </div>
          <div className=" flex items-center gap-[20px]">
            <Link to="/profile">
              {currentUser ? (
                <img
                  className=" rounded-full h-7 w-14 object-cover"
                  src={currentUser.avatar}
                  alt="profile"
                />
              ) : (
                <button className="    mr-2  px-[17px] py-[12px]  rounded-[9px] text-black cursor-pointer bg-[#D6E6FF] font-bold text-[14px] border-[0.5px] border-[#0061FF]">
                  Register/ sign in
                </button>
              )}
            </Link>
            <button className="    mr-2  px-[17px] py-[12px]  rounded-[9px] text-white cursor-pointer bg-[#0061FF] font-bold">
              Contact us
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
