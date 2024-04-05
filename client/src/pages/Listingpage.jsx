import { AddToPhotosOutlined } from "@mui/icons-material";
import React from "react";

function Listingpage() {
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
            <input type="file" name="" id="images" accept="images/*" multiple />
            <button className=" w-fit  text-2xl  py-2 px-5 rounded-full shadow-md shadow-gray-600  text-white bg-blue-500 hover:opacity-90 active:opacity-[50%] uppercase self-center object-center ">
              Upload
            </button>
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
