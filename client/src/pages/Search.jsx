import React from "react";

function Search() {
  return (
    <div className=" flex  flex-col md:flex-row">
      <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
        <form className=" flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <label className=" whitespace-nowrap font-bold">Search Term:</label>
            <input
              className=" rounded-md border border-blue-500 border-solid p-1   w-[100%] shadow-md shadow-gray-400 outline-none mx-auto"
              type="text"
              id="searchterm"
              placeholder="Search..."
            />
          </div>
          <div className="flex flex-wrap gap-2 items-center ">
            <label className=" whitespace-nowrap font-bold">Type:</label>
            <div className="flex gap-2 items-center text-sm font-semibold">
              <input className="w-5" id="all" type="checkbox" />
              <span>Rent & Sale</span>
            </div>
            <div className="flex gap-2 items-center text-sm font-semibold">
              <input className="w-5" id="rent" type="checkbox" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2 items-center text-sm font-semibold">
              <input className="w-5" id="sale" type="checkbox" />
              <span>Sale</span>
            </div>
            <div className="flex gap-2 items-center text-sm font-semibold">
              <input className="w-5" id="offer" type="checkbox" />
              <span>Offer</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 items-center ">
            <label className=" whitespace-nowrap font-bold">Amenities:</label>
            <div className="flex gap-2 items-center text-sm font-semibold">
              <input className="w-5" id="parking" type="checkbox" />
              <span>Parking</span>
            </div>
            <div className="flex gap-2 items-center text-sm font-semibold">
              <input className="w-5" id="furnished" type="checkbox" />
              <span>Furnished</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center ">
            <label className=" whitespace-nowrap font-bold">Sort:</label>
            <select
              id="sort_order"
              className=" bg-blue-500 text-white p-1 rounded-md outline-none px-2 text-sm font-semibold">
              <option value="">Price high to low</option>
              <option value="">Price low to high</option>
              <option value="">Latest</option>
              <option value="">Oldest</option>
            </select>
          </div>
          <button
            type="button"
            className=" w-full  text-2xl  py-2 px-5 rounded-md shadow-md shadow-gray-600  text-white bg-blue-500 hover:opacity-90 active:opacity-[50%] uppercase self-center object-center ">
            Search
          </button>
        </form>
      </div>
      <div>
        <h1 className="text-3xl font-semibold border-b p-3 text-slate-700 mt-5">
          Listing result:
        </h1>
      </div>
    </div>
  );
}

export default Search;
