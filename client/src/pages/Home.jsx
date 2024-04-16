import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import Listingitem from "./Listingitem";
import { heroimg1, heroimg2 } from "../assets";
import { HomeOutlined } from "@mui/icons-material";

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
      <div className=" bg-slate-100 my-1 text-center">
        <span className=" bg-blue-500 text-sm font-bold  p-1 rounded-md">
          {" "}
          𝕏
        </span>
      </div>
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
              <p>
                <h1 className=" text-4xl sm:text-7xl text-blue-500 font-bold my-5 absolute top-40 left-[10%] stroke stroke-black">
                  WELCOME TO <br />
                  <span className=" text-slate-200 text-4xl sm:text-[80px] sm:px-[200px]">
                    𝕏_State
                  </span>
                </h1>
              </p>
            </SwiperSlide>
          ))}
      </Swiper>
      {/* sec */}
      <div className="max-w-[1400px] flex flex-col mx-auto my-20  p-5 gap-10">
        {/* sec 1 */}

        <div className="  flex-1 flex sm:flex-row flex-col  justify-between gap-5">
          <img
            className="sm:w-[40%] w-full h-[600px] object-cover sm:rounded-tr-[50%] rounded-tr-[40%] sm:rounded-bl-[0%] rounded-bl-[40%] rounded-md hover:scale-[102%] translate-scale duration-300"
            src={heroimg1}
            alt=""
          />
          <div className=" flex-1 flex-col h-fit my-auto">
            <h1 className=" text-2xl sm:text-7xl text-blue-500 font-bold my-5 ">
              What we
              <span className=" text-slate-600 text-2xl sm:text-6xl">
                _OFFER
              </span>
            </h1>
            <div className=" sm:text-3xl sm:p-10 text-xl shadow-md shadow-blue-500 rounded-xl   rounded-tl-full rounded-br-full text-center ">
              <p className=" p-2 text-slate-600 font-semibold  ">
                We offers a one-stop shop for all your property needs, from
                finding your dream home to managing your rentals.
              </p>
            </div>
          </div>
        </div>
        {/* sec 2 */}
        <div className="  flex-1 flex sm:flex-row flex-col-reverse  justify-between gap-5">
          <div className=" flex-1 flex-col h-fit my-auto">
            <h1 className=" text-2xl sm:text-7xl text-blue-500 font-bold my-5 ">
              What we{" "}
              <span className=" text-slate-600 text-2xl sm:text-6xl">
                _PROVIDE
              </span>
            </h1>
            <div className=" sm:text-3xl sm:p-10 text-xl shadow-md shadow-blue-500 rounded-xl   rounded-tr-full rounded-bl-full text-center ">
              <p className=" p-2 text-slate-600 font-semibold  ">
                We provides a convenient platform to connect with realtors,
                schedule viewings, and get expert advice on the market trends
                and conditions.
              </p>
            </div>
          </div>
          <img
            className="sm:w-[40%] w-full h-[600px] object-cover sm:rounded-tl-[50%] rounded-tl-[40%] sm:rounded-br-[0%] rounded-br-[40%] rounded-md hover:scale-[102%] translate-scale duration-300"
            src={heroimg2}
            alt=""
          />
        </div>
      </div>

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
            <div className=" flex flex-wrap  gap-4">
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
      {/*footer*/}
      <div>
        <footer className="bg-blue-500 mt-[50px] text-xl py-[100px] ">
          <section className=" max-w-4xl mx-auto py-4 flex flex-col sm:flex-row sm:justify-between font-bold text-white sm:px-0 px-3">
            <address>
              X REAL ESTATE WEB APP, Inc. <br />
              555 Astro Way <br />
              Fairfield, New Jersey 12345-5555 <br />
              <a href="mailto:echeze00@gmail.com">
                Email: Inquires@acemerockets.com
              </a>
              <br />
              <a href="tel:+2347041729402">Phone: (555) 555-5555</a>
            </address>

            <nav
              className="hidden  md:flex md:flex-col md:gap-2 "
              area-aria-label="footer">
              <Link to={`/`} className="hover:opacity-80">
                HOME{" "}
              </Link>
              <Link to={`/about`} className="hover:opacity-80">
                ABOUT US
              </Link>
              <Link to={`/profile`} className="hover:opacity-80">
                PROFILE
              </Link>
            </nav>
            <div className="flex flex-col sm:gap-2">
              <p className="text-right ">Copyright © 2024</p>

              <p className="text-right">All Rights Reserved</p>
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
}

export default Home;
