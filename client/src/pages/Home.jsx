import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import Listingitem from "./Listingitem";
import { heroimg1, heroimg2, HeroImage } from "../assets";
import { HomeOutlined } from "@mui/icons-material";
import ShieldIcon from "@mui/icons-material/Shield";
import SmsIcon from "@mui/icons-material/Sms";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import PersonPinIcon from "@mui/icons-material/PersonPin";
function Home() {
  SwiperCore.use([Navigation]);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // fetching rent data

    const fetchingListing = async () => {
      try {
        const res = await fetch(`/api/listing/get?limit=3`);
        const data = await res.json();
        setListings(data);
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
      <div className=" w-[90%] mx-auto h-fit relative">
        <div className="absolute top-0 w-full bottom-0 bg-gradient-to-b from-[#619DFF91] to-transparent rounded-[23px] overflow-hidden"></div>
        <img
          className=" w-[100%]  md:h-[520px] h-[155px]   sm:object-full rounded-[23px]"
          src={HeroImage}
          alt=""
        />
        <h2 className="md:text-[40px] text-[12px] font-[700] text-center md:left-[500px] left-[70px] tmd:op-[50px] top-[30px] absolute">
          Discover the perfect home that fits your <br /> lifestyle and dreams.
        </h2>
      </div>
      {/* sub hero  */}

      <div className="py-[50px]">
        <section>
          <p className="text-[#00000085] sm:text-[16px] text-[12px] font-[700] sm:py-[10px] text-center">
            Trusted by 185+ countries
          </p>
        </section>
        <section></section>
      </div>
      {/* sec */}
      <div className="flex flex-col mx-auto my-20  p-5  bg-[#D6E6FF]">
        {/* sec 1 */}

        <h1 className=" font-[700] text-[32px] text-[#000000] text-center">
          Why choose us ?
        </h1>
        <p className=" font-[500] text-[13px] text-[#000000] text-center">
          Every design is thoughtfully crafted to reflect unique personalities
          and styles.
        </p>

        <div className="max-w-[1006px] flex justify-between"></div>
      </div>

      {/* listing options */}
      <div className=" max-w-[1500px] mx-auto p-3 flex flex-col gap-8 my-10">
        {listings && listings.length > 0 && (
          <div className="  flex flex-col items-center justify-center">
            <div className=" my-3">
              <h1 className=" font-[700] text-[32px] text-[#000000] text-center">
                Available properties
              </h1>
              <p className=" font-[500] md:text-[13px] text-[10px] text-[#000000] text-center md:w-[697px] w-[90%] mx-auto">
                Explore a range of available properties tailored to various
                needs, offering diverse options for buyers and renters.n is
                thoughtfully crafted to reflect unique personalities and styles.
              </p>
            </div>
            <div className=" flex flex-wrap w-[90%]   justify-center my-[50px] gap-[50px]">
              {listings.map((listing) => (
                <Listingitem listing={listing} key={listing._id} />
              ))}
            </div>

            <Link
              to={`/search`}
              className=" text-sm text-[#0061FF] font-bold hover:underline text-center underline mx-auto w-[90%]">
              see more available properties
            </Link>
          </div>
        )}
      </div>
      {/* listing options */}

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
