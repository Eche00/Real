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
  deleteUserStart,
  deleteUserSuccess,
  deleteeUserFaliure,
  signOutUserStart,
  signOutUserFaliure,
} from "../redux/user/userSlice";
import { Link } from "react-router-dom";
import { AddToPhotosOutlined, ArrowDownward } from "@mui/icons-material";

function Profile() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePercentage, setFilePercentage] = useState(0);
  const [fileError, setFileError] = useState(false);
  const [listingError, setListingError] = useState(false);
  const [userListing, setUserListing] = useState([]);

  const [formD, setFormD] = useState({});
  const dispatch = useDispatch();
  const [updateSuccess, setUpdateSuccess] = useState(false);

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
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFaliure(error.message));
    }
  };

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.success === false) {
        dispatch(deleteeUserFaliure(data.message));

        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteeUserFaliure(error.message));
    }
  };

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch(`/api/user/signout`);
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteeUserFaliure(data.message));

        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteeUserFaliure(error.message));
    }
  };

  const handleShowListings = async () => {
    try {
      setListingError(false);
      const res = await fetch(`/api/user/listings/${currentUser._id}`);
      const data = await res.json();
      if (data.success === false) {
        setListingError(true);

        return;
      }
      setUserListing(data);
    } catch (error) {
      setListingError(true);
    }
  };
  const handleDeleteListing = async (listingId) => {
    try {
      const res = await fetch(`/api/listing/delete/${listingId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setUserListing((prev) =>
        prev.filter((listing) => listing._id !== listingId)
      );
    } catch (error) {
      console.log(error.message);
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
          id="username"
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
          type="password"
          placeholder="password"
          className=" rounded-full border border-blue-500 border-solid p-3  w-[100%] shadow-md shadow-gray-400 outline-none mx-auto"
          onChange={handleOnchangeD}
        />
        <button
          disabled={loading}
          className=" w-fit bg-blue-500 text-2xl text-white py-2 px-10 rounded-full shadow-md shadow-gray-600  hover:opacity-[90%] active:opacity-[50%] uppercase self-center">
          {loading ? "LOading..." : "Update"}
        </button>

        <p className=" text-sm font-semibold text-red-700  cursor-pointer text-center">
          {error ? error : " "}
        </p>
        <p className=" text-sm font-semibold text-green-700  cursor-pointer text-center">
          {updateSuccess ? "Profile updated successfully!" : " "}
        </p>
      </form>
      <div className="flex justify-center ">
        <Link
          to="/listing"
          className=" w-fit border border-blue-500 text-2xl text-blue-500 py-2 px-10 rounded-full shadow-md shadow-gray-600  hover:text-white hover:bg-blue-500 duration-100 active:opacity-[50%] uppercase self-center object-center">
          Create listing <AddToPhotosOutlined />
        </Link>
      </div>
      <div className=" max-w-lg mx-auto flex justify-between mt-5 sm:px-0 px-16">
        <span
          onClick={handleDeleteUser}
          className=" text-sm font-semibold text-red-700  cursor-pointer">
          Delete Account
        </span>
        <span
          onClick={handleSignOut}
          className=" text-sm font-semibold text-red-700  cursor-pointer ">
          Sign Out
        </span>
      </div>
      <div className=" max-w-4xl   mx-auto flex flex-col items-center mt-5  my-10">
        <button
          onClick={handleShowListings}
          className=" w-fit  text-sm text-green-500 py-2 px-10 rounded-full font-bold  hover:opacity-[90%] active:opacity-[50%] uppercase self-center">
          show listings <ArrowDownward fontSize="" />
        </button>
        <p className=" text-sm font-semibold text-red-700  cursor-pointer text-center">
          {listingError ? "Error showing listing" : " "}
        </p>
        <h3 className=" text-center text-[16px] font-semibold my-2">
          Your Listings{" "}
          <span className=" bg-blue-500 rounded-md p-2 text-white">
            ({userListing.length})
          </span>
        </h3>
        <div className="flex  flex-wrap justify-between gap-y-5 mt-10 sm:px-0 px-10 gap-2">
          {userListing &&
            userListing.length > 0 &&
            userListing.map((listing) => (
              <div key={listing._id} className="">
                <Link to={`/listing/${listing._id}`}>
                  <img
                    className="w-40 h-40  rounded-md object-cover "
                    src={listing.imageUrls[0]}
                    alt="listing cover"
                  />
                </Link>
                <p className=" truncate font-semibold hover:underline mt-1 mb-4 sm:text-center  w-24 overflow-hidden">
                  {listing.name}
                </p>
                <div className="flex flex-wrap justify-between items-start px-2  ">
                  <button
                    onClick={() => handleDeleteListing(listing._id)}
                    className="text-sm w-16 text-white bg-red-600 rounded-md">
                    Delete
                  </button>
                  <button className="text-sm w-16 text-white bg-green-600 rounded-md">
                    Edit
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
