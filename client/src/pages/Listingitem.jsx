import { LocationOn } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

function Listingitem({ listing }) {
  return (
    <div className=" flex flex-col shadow-md hover:shadow-lg  translate-shadow overflow-hidden gap-4 rounded-lg w-full sm:w-[330px]">
      <Link to={`/listingcreated/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            "https://assets-global.website-files.com/63d44c419a1c6e6917394dc3/650365ee090280c45a4a692a_house-g60ddee039_1280.jpg"
          }
          alt="listing cover"
          className=" h-[320px] sm:h-[220px] w-full object-cover hover:scale-[105%] translate-scale duration-300"
        />
        <div className="px-3 py-3 flex flex-col gap-2 mt-5">
          <p className=" text-lg font-semibold text-slate-700 truncate">
            {listing.name}
          </p>
          <div>
            <p className=" flex items-center  gap-1 text-slate-600 truncate  text-sm">
              <span className=" text-blue-500">
                <LocationOn fontSize="small" />
              </span>
              <span>{listing.address}</span>
            </p>
          </div>
          <p className=" text-sm text-gray-600 line-clamp-2 font-semibold ">
            {listing.description}
          </p>
          <p className=" text-slate-500 mt-2 font-semibold text-sm  flex items-center">
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" && (
              <span className=" text-slate-700 text-xs"> / month</span>
            )}
          </p>
          <p className=" text-xs text-white bg-blue-500 p-2 rounded-md font-semibold flex items-center gap-4">
            <span>
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Beds`
                : `${listing.bedrooms} Bed`}
            </span>{" "}
            <span>
              {" "}
              {listing.bathrooms > 1
                ? `${listing.bathrooms} Baths`
                : `${listing.bathrooms} Bath`}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Listingitem;
