import React from "react";
import { AbtImg } from "../assets";

function AboutUs() {
  return (
    <div className=" bg-[#D6E6FF] quicksand">
      <section className=" md:w-[95%] w-[70%] mx-auto py-[40px] flex gap-[30px] md:flex-row flex-col">
        <h1 className=" md:text-[40px] text-[24px] font-[700] flex flex-col gap-[20px] text-center md:hidden ">
          About us
        </h1>
        <img
          className="md:w-[600px] md:h-[600px] h-[235px] object-cover md:rounded-[20px] rounded-[8px]"
          src={AbtImg}
          alt=""
        />

        <div>
          <h1 className=" md:text-[40px] text-[24px] font-[700] md:flex flex-col gap-[20px] text-center hidden  w-full py-[20px]">
            About us
          </h1>
          <section className=" flex flex-col justify-between md:gap-[70px] gap-[20px]">
            <section className="flex flex-col gap-[10px] items-start">
              <h2 className=" md:text-[28px] text-[20px] font-[700] flex flex-col gap-[20px] items-center ">
                Our mission
              </h2>
              <p className=" md:text-[20px] text-[16px] font-[500] flex flex-col gap-[20px] items-center  md:w-[500px] text-center md:text-start">
                Our mission is to empower individuals, families, and businesses
                to find their perfect property and achieve their real estate
                dreams. We are committed to providing exceptional service,
                unmatched expertise, and innovative solutions.
              </p>
            </section>
            <section className="flex flex-col gap-[10px] items-start ">
              <h2 className=" md:text-[28px] text-[20px] font-[700] flex flex-col gap-[20px] items-center ">
                Our vission
              </h2>
              <p className=" md:text-[20px] text-[16px] font-[500] flex flex-col gap-[20px] items-center  md:w-[500px] text-center md:text-start">
                Our vision is to redefine the real estate experience by setting
                new standards of excellence, innovation, and sustainability. We
                aspire to be the trusted partner for our clients and the leading
                name in the real estate industry.
              </p>
            </section>
          </section>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
