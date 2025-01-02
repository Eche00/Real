import { LocationOn } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

function Listingitem({ listing }) {
  return (
    <div className=" flex flex-col shadow-md hover:shadow-lg  translate-shadow overflow-hidden gap-[9px] rounded-[20px] w-fit sm:w-[330px] bg-[#D6E6FF]">
      <img
        src={
          listing.imageUrls[0] ||
          "https://assets-global.website-files.com/63d44c419a1c6e6917394dc3/650365ee090280c45a4a692a_house-g60ddee039_1280.jpg"
        }
        alt="listing cover"
        className=" h-[220px] sm:h-[220px] w-full object-cover hover:scale-[98%] translate-scale duration-300 rounded-[20px]"
      />
      <div className="px-[20px] pb-[20px] flex flex-col gap-2 mt-5">
        <p className=" md:text-[20px] font-[600] text-[10px]">{listing.name}</p>
        <div>
          {/* <p className=" flex items-center  gap-1 text-slate-600 truncate  text-sm">
              <span className=" text-blue-500">
                <LocationOn fontSize="small" />
              </span>
              <span>{listing.address}</span>
            </p> */}
        </div>
        <p className=" text-[12px] text-[#000000] line-clamp-2 font-[400]  h-[40px]">
          {listing.description}
        </p>
        <div className="flex justify-between">
          <p className=" text-[24px] text-[#000000]   font-[600] text-sm  flex items-center">
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" && (
              <span className=" text-slate-700 text-xs"> / month</span>
            )}
          </p>
          <Link
            to={`/listingcreated/${listing._id}`}
            className=" text-[14px] text-white bg-[#0061FF] py-[10px] px-[30px] rounded-[12px]  font-[600] ">
            <button>See more</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Listingitem;
