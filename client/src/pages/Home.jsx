import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import Listingitem from "./Listingitem";

function Home() {
  SwiperCore.use([Navigation]);
  const [offerListings, setOfferListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  console.log(saleListings);

  useEffect(() => {
    // fetching rent data

    const fetchingListing = async () => {
      try {
        const res = await fetch(`/api/listing/get?offer=true&limit=4`);
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    // fetching rent data

    const fetchRentListings = async () => {
      try {
        const res = await fetch(`/api/listing/get?type=rent&limit=4`);
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    // fetchingsale data

    const fetchSaleListings = async () => {
      try {
        const res = await fetch(`/api/listing/get?type=sale&limit=4`);
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchingListing();
  }, []);

  return (
    <div>
      {/* top */}
      {/* slider */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 1 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <img
                className=" h-[500px] object-cover w-full"
                src={listing.imageUrls[0]}
                alt=""
              />
            </SwiperSlide>
          ))}
      </Swiper>
      {/* listing options */}
      <div className=" max-w-[1500px] mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div>
            <div className=" my-3">
              <h2 className=" text-2xl text-slate-600 font-semibold">
                Recent offers
              </h2>
              <Link
                to={`/search?offer=true`}
                className=" text-sm text-blue-500 font-bold hover:underline">
                Show more offers
              </Link>
            </div>
            <div className=" flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <Listingitem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
      {/* listing options */}

      <div className=" max-w-[1500px] mx-auto p-3 flex flex-col gap-8 my-10">
        {rentListings && rentListings.length > 0 && (
          <div>
            <div className=" my-3">
              <h2 className=" text-2xl text-slate-600 font-semibold">
                Recent places to rent
              </h2>
              <Link
                to={`/search?type=rent`}
                className=" text-sm text-blue-500 font-bold hover:underline">
                Show more offers
              </Link>
            </div>
            <div className=" flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <Listingitem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
      {/* listing options */}

      <div className=" max-w-[1500px] mx-auto p-3 flex flex-col gap-8 my-10">
        {saleListings && saleListings.length > 0 && (
          <div>
            <div className=" my-3">
              <h2 className=" text-2xl text-slate-600 font-semibold">
                Recent places for sale
              </h2>
              <Link
                to={`/search?type=sale`}
                className=" text-sm text-blue-500 font-bold hover:underline">
                Show more offers
              </Link>
            </div>
            <div className=" flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <Listingitem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
