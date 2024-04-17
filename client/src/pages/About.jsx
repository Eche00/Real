import React, { useState } from "react";
import { dev, heroimg1, heroimg3, heroimg4 } from "../assets";
import { GitHub, Instagram, LinkOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

function About() {
  const [message, setMessage] = useState("");
  const onChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div>
      {/*top*/}
      <div className=" relative">
        <img
          className=" h-[250px] object-cover w-full opacity-70"
          src={heroimg1}
          alt=""
        />
        <h1 className=" text-4xl sm:text-6xl text-blue-600 font-bold my-5 absolute -bottom-10 sm:left-[10%] left-5 stroke stroke-black font-serif">
          About Us
          <span className=" text-slate-700 "> 𝕏_State</span>
        </h1>
      </div>
      {/*7 xl*/}
      <div className=" max-w-[1500px] mx-auto p-5 ">
        {/*detail*/}
        <div className=" my-20 flex sm:flex-row flex-col sm:gap-0 gap-10">
          <article className=" sm:text-3xl sm:p-10 text-xl shadow-md shadow-blue-500 rounded-xl   sm:rounded-tr-full sm:rounded-bl-full text-center overflow-scroll hover:scale-[102%] transition-scale duration-300">
            {" "}
            <h1 className=" text-blue-500 text-2xl font-bold">Home / About</h1>
            <p className=" p-2 text-slate-600 font-semibold text-sm text-start">
              Livingstone Estates is the main agency in Estepona, specialising
              in high-end properties and beachfront apartments. With 24 years of
              experience, we cater to clients from all over the world seeking
              their dream homes, profitable investments, and exceptional
              rentals.
            </p>
          </article>
          <article className=" sm:text-3xl sm:p-10 text-xl shadow-md shadow-blue-500 rounded-xl   sm:rounded-tr-full sm:rounded-bl-full text-center  overflow-scroll hover:scale-[102%] transition-scale duration-300">
            {" "}
            <h1 className=" text-blue-500 text-2xl font-bold">
              Property Agents
            </h1>
            <p className=" p-2 text-slate-600 font-semibold text-sm text-start  ">
              By prioritising professionalism, teamwork, and a client-centric
              approach, Livingstone Estates builds lasting partnerships based on
              trust and exceeding expectations with an excellent marketing
              strategy, we showcase properties effectively, standing out in a
              competitive market.
            </p>
          </article>
        </div>
        {/*opt*/}
        <div className=" flex flex-col gap-20">
          <div className="  flex-1 flex sm:flex-row flex-col   gap-10">
            <img
              className="sm:w-[20%] w-full h-[400px] object-cover sm:rounded-t-full  rounded-md hover:scale-[102%] translate-scale duration-300"
              src={heroimg3}
              alt=""
            />
            <div className=" flex-1 flex-col h-fit my-auto">
              <h1 className=" text-2xl  text-blue-500 font-bold my-5  font-serif">
                WHY BUY WITH{" "}
                <span className=" text-slate-600 text-2xl sm:text-6xl">US</span>
              </h1>
              <div>
                <p className="  text-slate-600 font-semibold text-sm text-start flex  flex-wrap  sm:w-[400px]">
                  Livingstone Estates is your trusted source for an extensive
                  range of premium Estepona real estate listings, offering both
                  sales and rentals. Our privileged access to many
                  exclusively-contracted properties reflects the trusted
                  position we hold in the Estepona property market, thanks to
                  our deep local knowledge and real estate expertise.
                </p>
              </div>
            </div>
          </div>
          {/* opt 2 */}
          <div className="  flex-1 flex sm:flex-row  gap-10 flex-col">
            <img
              className="sm:w-[20%] w-full h-[400px] object-cover sm:rounded-t-full  rounded-md hover:scale-[102%] translate-scale duration-300"
              src={heroimg4}
              alt=""
            />
            <div className=" flex-1 flex-col h-fit my-auto">
              <h1 className=" text-2xl  text-blue-500 font-bold my-5  font-serif">
                OUR MARKETING{" "}
                <span className=" text-slate-600 text-2xl sm:text-6xl">
                  STRA..
                </span>
              </h1>
              <div>
                <p className="  text-slate-600 font-semibold text-sm text-start flex  flex-wrap  sm:w-[400px]">
                  Livingstone Estates stands as a beacon in Estepona’s luxury
                  real estate sector, boasting unmatched expertise and a global
                  reach. Our legacy is anchored in innovative marketing
                  strategies, driven by a team of industry experts. We excel in
                  connecting with potential buyers, whether through broad
                  marketing campaigns or discreet off-market sales. Trust
                  Livingstone Estates to elevate the sale of your Estepona
                  property, consistently surpassing industry expectations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*programmer*/}
        <div className=" w-full flex flex-col items-center justify-center my-20">
          <h1 className=" text-4xl  text-blue-500 font-bold my-10  font-serif text-center">
            Developer
          </h1>
          <div className=" flex flex-col shadow-md hover:shadow-lg  translate-shadow overflow-hidden gap-4 rounded-lg w-full sm:w-[330px] ">
            <img
              className=" h-[320px] sm:h-[220px] w-full object-cover hover:scale-[105%] translate-scale duration-300"
              src={dev}
              alt=""
            />
            <div className=" p-2">
              <div className=" py-3 flex flex-col gap-2 mt-5">
                <h2 className=" text-lg font-bold text-slate-700 truncate">
                  𝕏 Eche_codes
                </h2>
                <p className=" text-sm font-semibold text-slate-700  font-sans">
                  Front end Developer with a taste of Back end, HTML, CSS, JS,
                  REACT, TAILWIND, FIREBASE, NODE.JS
                </p>
              </div>
              <ul className=" text-xs text-white bg-blue-500 p-2 rounded-md font-semibold flex items-center justify-between gap-4">
                <li className=" text-xl">
                  <a href="https://x.com/Eche_codes?t=Wab7izpdS7-ewMqBV6TsVA&s=09">
                    𝕏
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Eche00">
                    <GitHub fontSize="small" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://portfolio-two-liard-34.vercel.app/">
                    <LinkOutlined fontSize="small" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://www.instagram.com/xeche_codes?igsh=dHdhdm80MWRsdTd2">
                    <Instagram fontSize="small" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*contact programmer*/}
        <div className=" sm:w-[70%] mx-auto">
          <p className=" text-2xl text-gray-600 text-[20px]">
            <span className="  font-semibold text-black">Contact -</span>{" "}
            <span className="  font-bold">Developer</span>
          </p>
          <textarea
            className=" rounded-md border border-blue-500 border-solid p-2 w-[100%] shadow-md shadow-gray-400 outline-none mx-auto"
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChange}
            placeholder="Message"></textarea>
          <Link
            to={`mailto:echeeze956@gmail.com?subject=RegardingRealestateProject&body=${message}`}
            type="button"
            className=" w-full  text-2xl  py-2 px-5 rounded-md  shadow-md shadow-gray-600  text-white bg-blue-500 hover:opacity-90 active:opacity-[50%] uppercase self-center object-center  text-center">
            send message
          </Link>
        </div>
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

export default About;
