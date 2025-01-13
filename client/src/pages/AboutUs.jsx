import React from "react";
import { HeroImage } from "../assets";

function AboutUs() {
  return (
    <div className=" bg-[#D6E6FF]">
      <section className=" md:w-[95%] w-[70%] mx-auto py-[40px] flex gap-[30px] md:flex-row flex-col">
        <h1 className=" md:text-[40px] text-[24px] font-[700] flex flex-col gap-[20px] text-center md:hidden ">
          About us
        </h1>
        <img
          className="md:w-[600px] md:h-[600px] h-[235px] object-cover md:rounded-[20px] rounded-[8px]"
          src={HeroImage}
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                vitae ipsa esse, quis illum, omnis libero dolorum dicta quos
                maxime, atque saepe suscipit porro eligendi molestiae sapiente
                vel vero. Similique?
              </p>
            </section>
            <section className="flex flex-col gap-[10px] items-start ">
              <h2 className=" md:text-[28px] text-[20px] font-[700] flex flex-col gap-[20px] items-center ">
                Our vission
              </h2>
              <p className=" md:text-[20px] text-[16px] font-[500] flex flex-col gap-[20px] items-center  md:w-[500px] text-center md:text-start">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                vitae ipsa esse, quis illum, omnis libero dolorum dicta quos
                maxime, atque saepe suscipit porro eligendi molestiae sapiente
                vel vero. Similique?
              </p>
            </section>
          </section>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
