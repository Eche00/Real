import React from "react";
import { googlelogo } from "../assets";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

function Gauth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // google auth handler
  const handleGoogleAuth = async () => {
    // try catch error
    try {
      // importing google provider
      const Gprovider = new GoogleAuthProvider();
      // importing app from firestore config

      const auth = getAuth(app);
      // signing in with google google pop up

      const result = await signInWithPopup(auth, Gprovider);
      // sending response of information needed to the backend

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      // converting data to json and making use of dispatch

      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      // error msg
      console.log("Could not sign in with google auth", error);
    }
  };
  return (
    <div>
      <button type="button">
        <img
          className="  h-16 py-2  px-20 rounded-md shadow-sm shadow-gray-400  hover:bg-blue-50 uppercase"
          onClick={handleGoogleAuth}
          src={googlelogo}
          alt=""
        />
      </button>
    </div>
  );
}

export default Gauth;
