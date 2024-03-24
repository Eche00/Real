import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className=" max-w-full mx-auto">
      <h1 className=" text-center text-3xl font-semibold my-7">Profile</h1>

      <form className=" flex flex-col gap-5 w-[60%] mx-auto ">
        <img
          className=" rounded-full cursor-pointer self-center"
          src={currentUser.avatar}
          alt="profile"
        />

        <input
          id="useername"
          type="text"
          placeholder="username"
          className=" rounded-full border border-blue-500 border-solid p-3   w-[100%] shadow-md shadow-gray-400 outline-none mx-auto"
        />
        <input
          id="email"
          type="email"
          placeholder="email"
          className=" rounded-full border border-blue-500 border-solid p-3 w-[100%] shadow-md shadow-gray-400 outline-none mx-auto"
        />
        <input
          id="password"
          type="text"
          placeholder="password"
          className=" rounded-full border border-blue-500 border-solid p-3  w-[100%] shadow-md shadow-gray-400 outline-none mx-auto"
        />
        <button className=" w-fit bg-blue-500 text-2xl text-white py-2 px-10 rounded-full shadow-md shadow-gray-600  hover:opacity-[90%] uppercase self-center">
          Update
        </button>
      </form>
      <div className=" max-w-lg mx-auto flex justify-between mt-5 sm:px-0 px-16">
        <span className=" text-sm font-semibold text-red-700  cursor-pointer">
          Delete account
        </span>
        <span className=" text-sm font-semibold text-red-700  cursor-pointer">
          Sign out
        </span>
      </div>
    </div>
  );
}

export default Profile;
