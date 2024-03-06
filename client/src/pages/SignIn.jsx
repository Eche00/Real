import React from "react";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className=" h-screen flex  items-center justify-center">
      <div className="  flex flex-col p-5 sm:w-[70%] w-[95%] h-[50%] rounded-md">
        <Link to="/" className=" absolute left-2 top-1">
          {" "}
          <ArrowBack />
        </Link>
        <form
          action=""
          className=" flex flex-col items-center justify-center gap-5 h-[100%]">
          <h1 className="text-center text-3xl font-extrabold py-5">Signin</h1>

          <input
            type="email"
            className=" rounded-full border border-blue-500 border-solid p-3 sm:w-[60%]  w-[80%] shadow-md shadow-gray-400 outline-none"
            placeholder="Email"
          />
          <input
            type="password"
            className=" rounded-full border border-blue-500 border-solid p-3 sm:w-[60%]  w-[80%] shadow-md shadow-gray-400 outline-none"
            placeholder="Password"
          />
          <button className="bg-blue-500 text-2xl text-white py-2 px-20 rounded-full shadow-md shadow-gray-600 my-5 hover:opacity-[90%] uppercase">
            Sign in
          </button>
          <p className=" gap-3 flex items-center justify-center font-serif text-gray-400">
            <span>Already have an account? </span>{" "}
            <Link
              to="/signup"
              className=" text-blue-500 hover:underline text-sm">
              SignIn
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
