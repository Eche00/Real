import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePercentage, setFilePercentage] = useState(0);
  const [fileError, setFileError] = useState(false);
  const [formD, setFormD] = useState({});

  console.log(file);
  console.log(filePercentage);

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
  return (
    <div className=" max-w-full mx-auto">
      <h1 className=" text-center text-3xl font-semibold my-7">Profile</h1>

      <form className=" flex flex-col gap-5 w-[60%] mx-auto ">
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
            <p className=" text-red-700">Image upload not successful</p>
          ) : filePercentage > 0 && filePercentage < 100 ? (
            <p className=" text-slate-700">{`Image uploading ${filePercentage}%`}</p>
          ) : filePercentage === 100 ? (
            <p className=" text-green-700">Image uploaded successully!</p>
          ) : (
            ""
          )}
        </p>
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
