import React, { useState } from "react";
import { ArrowBack } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFaliure,
} from "../redux/user/userSlice";

function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnchange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleOnsubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFaliure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFaliure(error.message));
    }
  };
  console.log(formData);
  return (
    <div className=" h-screen flex  items-center justify-center">
      <div className="  flex flex-col p-5 sm:w-[70%] w-[95%] h-[50%] rounded-md">
        <Link to="/" className=" absolute left-2 top-1">
          {" "}
          <ArrowBack />
        </Link>
        <form
          onSubmit={handleOnsubmit}
          action=""
          className=" flex flex-col items-center justify-center gap-5 h-[100%]">
          <h1 className="text-center text-3xl font-extrabold py-5">Signin</h1>

          <input
            onChange={handleOnchange}
            id="email"
            type="email"
            className=" rounded-full border border-blue-500 border-solid p-3 sm:w-[60%]  w-[80%] shadow-md shadow-gray-400 outline-none"
            placeholder="Email"
          />
          <input
            onChange={handleOnchange}
            id="password"
            type="password"
            className=" rounded-full border border-blue-500 border-solid p-3 sm:w-[60%]  w-[80%] shadow-md shadow-gray-400 outline-none"
            placeholder="Password"
          />
          <button className="bg-blue-500 text-2xl text-white py-2 px-20 rounded-full shadow-md shadow-gray-600 my-5 hover:opacity-[90%] uppercase">
            <p>{loading ? "Loading..." : "sign in"}</p>
          </button>
          {error && (
            <p className=" text-sm text-red-500 font-bold text-center">
              {error}
            </p>
          )}
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
