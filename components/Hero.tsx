import React from "react";
import Lines from "./Lines";

const Hero = () => {
  return (
    <div className="relative  cont py-10">
      <div className="flex flex-col md:flex-row-reverse justify-between">
        <div className="p-7 lg:p-0">
          <img
            className="object-contain"
            src="https://assets-global.website-files.com/655dd78870c51459319f6bbb/655df71ede1029cae5386583_geo-3-p-500.png"
            alt=""
          />
        </div>
        <div className="flex justify-center  flex-col items-center lg:items-start">
          <h1 className=" text-center  font-[600] leading-8 lg:leading-[70px] lg:text-[4rem] text-[2.1rem] ">
            Develop{" "}
          </h1>
          <h1 className="text-[#0000ff] font-[600] text-center text-[2rem] lg:pl-20 lg:text-[4rem]">
            cutting-edge
          </h1>
          <h1 className="font-[600] leading-8 lg:leading-[70px] text-center text-[2.1rem] lg:text-[4rem]">
            tech websites.
          </h1>
          <p className="py-10 text-[1.3rem] lg:text-[1.5rem] text-center lg:text-start text-gray-400 font-medium">
            Kickstart your startup's success with the Startub <br />
            Webflow template.
          </p>
          <button className="px-10 py-5 font-medium w-fit bg-[#0000ff] rounded-full lg:mt-10">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
