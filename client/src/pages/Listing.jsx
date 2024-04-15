import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { Bathtub, Done, LocationOn, Share } from "@mui/icons-material";
import HotelIcon from "@mui/icons-material/Hotel";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import { useSelector } from "react-redux";
import Contact from "./Contact";

function Listing() {
  SwiperCore.use([Navigation]);
  const { currentUser } = useSelector((state) => state.user);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [contact, setContact] = useState(false);

  const params = useParams();
  useEffect(() => {
    const fetchingListing = async () => {
      try {
        setLoading(true);

        const listingId = params.listingId;
        const res = await fetch(`/api/listing/get/${listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);

          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchingListing();
  }, [params.listingId]);
  return (
    <main>
      {loading && (
        <h1 className=" w-fit  text-2xl  py-2 px-5 rounded-full mx-auto my-7 shadow-md shadow-gray-600  text-white bg-blue-500 hover:opacity-90 active:opacity-[50%] uppercase self-center object-center ">
          Loading...
        </h1>
      )}
      {error && (
        <p className=" w-fit  text-2xl  py-2 px-5 rounded-full mx-auto my-7 shadow-md shadow-gray-600  text-white bg-red-600 hover:opacity-90 active:opacity-[50%] uppercase self-center object-center ">
          Something went wrong
        </p>
      )}

      {listing && !loading && !error && (
        <>
          <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <img
                  className=" h-[550px] object-cover w-full "
                  src={url}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className=" fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 2000);
            }}>
            {copied ? <Done /> : <Share />}
          </div>
          <div className="flex flex-col max-w-7xl mx-auto p-3 my-7 gap-6">
            <p className=" text-2xl font-semibold">
              <span className=" uppercase"> {listing.name} </span>- ${""}
              {listing.offer
                ? listing.discountPrice.toLocaleString("en-US")
                : listing.regularPrice.toLocaleString("en-US")}{" "}
              {listing.type === "rent" && "/ month"}
            </p>
            <p className=" flex items-center mt-6 gap-2 text-slate-600 my-2 text-sm">
              <span className=" bg-blue-500 text-sm p-2  rounded-full text-white">
                <LocationOn />
              </span>
              <span>{listing.address}</span>
            </p>
            <div className="flex gap-4">
              <p className=" bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                {listing.type === "rent" ? "For Rent" : "For Sale"}
              </p>

              {listing.offer && (
                <p className=" bg-blue-500 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                  ${+listing.regularPrice - +listing.discountPrice}{" "}
                  <span className=" text-xs">OFF</span>
                </p>
              )}
            </div>
            <div>
              <p className="text-slate800">
                <span className=" font-semibold text-black">Description -</span>
                {listing.description}.
              </p>
              <ul className=" flex flex-wrap gap-2 my-7">
                <li className=" bg-blue-500 w-full max-w-[200px] text-white text-center p-1 rounded-md flex gap-2 justify-center items-center">
                  <Bathtub />
                  <span>
                    {listing.bedrooms > 1
                      ? `${listing.bedrooms} Bedrooms`
                      : `${listing.bedrooms} Bedroom`}
                  </span>
                </li>
                <li className=" bg-blue-500 w-full max-w-[200px] text-white text-center p-1 rounded-md flex gap-2 justify-center items-center">
                  <HotelIcon />
                  <span>
                    {listing.bathrooms > 1
                      ? `${listing.bathrooms} Bathrooms`
                      : `${listing.bathrooms} Bathroom`}
                  </span>
                </li>
                <li className=" bg-blue-500 w-full max-w-[200px] text-white text-center p-1 rounded-md flex gap-2 justify-center items-center">
                  <LocalParkingIcon />
                  <span>{listing.parking ? "Parking" : "No Parking"}</span>
                </li>
                <li className=" bg-blue-500 w-full max-w-[200px] text-white text-center p-1 rounded-md flex gap-2 justify-center items-center ">
                  <AddHomeWorkIcon />
                  <span>
                    {listing.furnished ? "Furnished" : "Not Furnished"}
                  </span>
                </li>
              </ul>
              <div className="my-10 ">
                {currentUser &&
                  listing.userRef !== currentUser._id &&
                  !contact && (
                    <button
                      onClick={() => setContact(true)}
                      type="button"
                      className=" w-full  text-2xl  py-2 px-5 rounded-md  shadow-md shadow-gray-600  text-white bg-blue-500 hover:opacity-90 active:opacity-[50%] uppercase self-center object-center ">
                      Contact Owner
                    </button>
                  )}
                {contact && <Contact listing={listing} />}
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default Listing;
