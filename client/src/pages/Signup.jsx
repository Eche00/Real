import React, { useState } from "react";
import { ArrowBack } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleOnchange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleOnsubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setError(null);
      setLoading(false);
      navigate("/signin");
    } catch (error) {
      setLoading(false);
      setError(error.message);
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
          <h1 className="text-center text-3xl font-extrabold py-5">Signup</h1>

          <input
            onChange={handleOnchange}
            id="username"
            type="text"
            className=" rounded-full border border-blue-500 border-solid p-3 sm:w-[60%] w-[80%] shadow-md shadow-gray-400 outline-none"
            placeholder="Name"
          />
          <input
            onChange={handleOnchange}
            id="email"
            type="email"
            className=" rounded-full border border-blue-500 border-solid p-3 sm:w-[60%] w-[80%] shadow-md shadow-gray-400 outline-none"
            placeholder="Email"
          />
          <input
            onChange={handleOnchange}
            id="password"
            type="password"
            className=" rounded-full border border-blue-500 border-solid p-3 sm:w-[60%] w-[80%] shadow-md shadow-gray-400 outline-none"
            placeholder="Password"
          />
          <button
            disabled={loading}
            className="bg-blue-500 text-2xl text-white py-2 px-20 rounded-full shadow-md shadow-gray-600 my-5 hover:bg-blue-400 disabled:opacity-90 uppercase">
            <p>{loading ? "Loading..." : "sign up"}</p>
          </button>
          {error && (
            <p className=" text-sm text-red-500 font-bold text-center">
              {error}
            </p>
          )}
          <p className=" gap-5 flex items-center justify-center font-serif text-gray-400">
            <span>Already have an account? </span>{" "}
            <Link to="/signin" className=" text-blue-500 hover:underline">
              SignIn
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
