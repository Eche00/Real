import {
  AddToPhotosOutlined,
  Delete,
  DeleteOutline,
} from "@mui/icons-material";
import React, { useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

function Listingpage() {
  const [files, setFiles] = useState([]);
  const [formD, setFormD] = useState({ imageUrls: [] });
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  console.log(formD);

  const handleImageSubmit = (e) => {
    if (files.length > 0 && files.length + formD.imageUrls.length < 7) {
      setUploading(true);
      setImageUploadError(false);
      const promises = [];
      for (let i = 0; i < files.length; i++) {
        promises.push(storageImage(files[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          setFormD({ ...formD, imageUrls: formD.imageUrls.concat(urls) });
          setImageUploadError(false);
          setUploading(false);
        })
        .catch((err) => {
          setImageUploadError("Image upload failed (2mb max per image)");
          setUploading(false);
        });
    } else {
      setImageUploadError("You can only upload 6 images per listing");
      setUploading(false);
    }
  };
  const storageImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`upload ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };
  const handleRemoveImage = (index) => {
    setFormD({
      ...formD,
      imageUrls: formD.imageUrls.filter((_, i) => i !== index),
    });
  };
  return (
    <main className=" max-w-4xl mx-auto sm:p-0 p-5">
      <h1 className=" text-3xl font-semibold text-center my-7">
        Create Listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-5">
        <div className=" flex flex-col gap-5 flex-1 ">
          <input
            type="text"
            placeholder="Name"
            id="name"
            maxLength="62"
            minLength="10"
            required
            className=" rounded-md border border-blue-500 border-solid p-3   w-[100%] shadow-md shadow-gray-400 outline-none mx-auto"
          />
          <textarea
            placeholder="Description"
            id="description"
            cols="25"
            rows="10"
            className=" rounded-md border border-blue-500 border-solid p-3   w-[100%] shadow-md shadow-gray-400 outline-none mx-auto"
            required></textarea>
          <input
            type="text"
            placeholder="Address"
            id="address"
            required
            className=" rounded-md border border-blue-500 border-solid p-3   w-[100%] shadow-md shadow-gray-400 outline-none mx-auto"
          />

          <div className=" flex flex-wrap gap-5">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="" id="sale" className="w-5" />
              <span className=" text-sm font-bold">Sale</span>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="" id="rent" className="w-5" />
              <span className=" text-sm font-bold">Rent</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="" id="parking" className="w-5" />
              <span className=" text-sm font-bold">Parking Spot</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="" id="furnished" className="w-5" />
              <span className=" text-sm font-bold">Furnished</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="" id="offer" className="w-5" />
              <span className=" text-sm font-bold">Offer</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 ">
              <input
                type="number"
                id="bedrooms"
                min={"1"}
                max={"10"}
                required
                className="p-3 border border-blue-500 rounded-lg"
              />
              <p className=" text-sm font-bold">: Beds</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bathrooms"
                min={"1"}
                max={"10"}
                required
                className="p-3 border border-blue-500 rounded-lg"
              />
              <p className=" text-sm font-bold">: Bath</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="regularPrice"
                min={"1"}
                max={"10"}
                required
                className="p-3 border border-blue-500 rounded-lg"
              />
              <div>
                <p className=" text-sm font-bold">: Regular</p>
                <span className=" text-xs text-gray-500 font-semibold">
                  ($ / month)
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="discountPrice"
                min={"1"}
                max={"10"}
                required
                className="p-3 border border-blue-500 rounded-lg"
              />
              <div>
                <p className=" text-sm font-bold">: Discount</p>
                <span className=" text-xs text-gray-500 font-semibold">
                  ($ / month)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col flex-1">
          <p className=" text-sm font-bold font-serif ">
            Images:{" "}
            <span className=" text-xs font-sans text-gray-700 font-semibold">
              The first image will be the cover (max 6)
            </span>
          </p>
          <div className=" flex items-center border border-blue-500 py-5 px-2 rounded-md my-5">
            <input
              type="file"
              name=""
              id="images"
              accept="images/*"
              multiple
              onChange={(e) => setFiles(e.target.files)}
              className=" w-full"
            />
            <button
              onClick={handleImageSubmit}
              disabled={uploading}
              type="button"
              className=" w-fit  text-2xl  py-2 px-5 rounded-full shadow-md shadow-gray-600  text-white bg-blue-500 hover:opacity-90 active:opacity-[50%] uppercase self-center object-center ">
              {uploading ? "loading.." : "Upload"}
            </button>
          </div>
          <p className=" text-red-700 text-sm font-semibold text-center">
            {imageUploadError && imageUploadError}
          </p>
          <div className=" flex flex-wrap gap-2">
            {formD.imageUrls.length > 0 &&
              formD.imageUrls.map((url, index) => (
                <div key={url} className=" w-fit relative">
                  <img
                    src={url}
                    alt="listing img"
                    className=" w-20 h-20  object-cover rounded-lg "
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className=" absolute bottom-0 right-0 text-red-600  cursor-pointer  ">
                    <Delete />
                  </button>
                </div>
              ))}
          </div>
          <button
            to="/listing"
            className=" w-full  text-2xl  py-2 px-10 rounded-full shadow-md shadow-gray-600  text-white bg-blue-500 hover:opacity-90 active:opacity-[50%] uppercase self-center object-center my-5">
            Create listing <AddToPhotosOutlined />
          </button>
        </div>
      </form>
    </main>
  );
}

export default Listingpage;
