import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import {
  updateUserFaliure,
  updateUserStart,
  updateUserSuccess,
} from "../redux/user/userSlice";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePercentage, setFilePercentage] = useState(0);
  const [fileError, setFileError] = useState(false);
  const [formD, setFormD] = useState({});
  const dispatch = useDispatch();
  console.log(formD);

  // file firebase
  //  allow read;
  //  allow write: if request.resource.size < 2 * 1024 * 1024 && request.resource.contentType.matches('image/.*');

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);
  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePercentage(Math.round(progress));
      },
      (error) => {
        setFileError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormD({ ...formD, avatar: downloadURL })
        );
      }
    );
  };

  const handleOnchangeD = (e) => {
    setFormD({ ...formD, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formD),
      });
      const data = await res.json();

      if (data.success === false) {
        dispatch(updateUserFaliure(data.message));
        return;
      }
      dispatch(updateUserSuccess(data));
    } catch (error) {
      dispatch(updateUserFaliure(error.message));
    }
  };
  return (
    <div className=" max-w-full mx-auto">
      <h1 className=" text-center text-3xl font-semibold my-7">Profile</h1>

      <form
        onSubmit={handleSubmit}
        className=" flex flex-col gap-5 w-[60%] mx-auto ">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          className=" rounded-full cursor-pointer self-center w-[120px] h-[120px] object-cover"
          src={formD.avatar || currentUser.avatar}
          alt="profile"
        />
        <p className=" text-sm text-center">
          {fileError ? (
            <span className=" text-red-700">Image upload not successful</span>
          ) : filePercentage > 0 && filePercentage < 100 ? (
            <span className=" text-slate-700">{`Image uploading ${filePercentage}%`}</span>
          ) : filePercentage === 100 ? (
            <span className=" text-green-700">Image uploaded successully!</span>
          ) : (
            ""
          )}
        </p>
        <input
          id="useername"
          type="text"
          defaultValue={currentUser.username}
          placeholder="username"
          className=" rounded-full border border-blue-500 border-solid p-3   w-[100%] shadow-md shadow-gray-400 outline-none mx-auto"
          onChange={handleOnchangeD}
        />
        <input
          id="email"
          type="email"
          defaultValue={currentUser.email}
          placeholder="email"
          className=" rounded-full border border-blue-500 border-solid p-3 w-[100%] shadow-md shadow-gray-400 outline-none mx-auto"
          onChange={handleOnchangeD}
        />
        <input
          id="password"
          type="text"
          placeholder="password"
          className=" rounded-full border border-blue-500 border-solid p-3  w-[100%] shadow-md shadow-gray-400 outline-none mx-auto"
          onChange={handleOnchangeD}
        />
        <button className=" w-fit bg-blue-500 text-2xl text-white py-2 px-10 rounded-full shadow-md shadow-gray-600  hover:opacity-[90%] active:opacity-[50%] uppercase self-center">
          Update
        </button>
      </form>
      <div className=" max-w-lg mx-auto flex justify-between mt-5 sm:px-0 px-16">
        <span className=" text-sm font-semibold text-red-700  cursor-pointer">
          Delete Account
        </span>
        <span className=" text-sm font-semibold text-red-700  cursor-pointer ">
          Sign Out
        </span>
      </div>
    </div>
  );
}

export default Profile;
