import React from "react";
import Lines from "./Lines";
import ConvertToPDF from "./resume builder/ConvertToPDF";

const Hero = () => {
  return (
    <div className="relative  cont py-10">
      <div className="flex flex-col lg:flex-row-reverse justify-between">
        <div className="p-7 lg:p-0">
          <img
            className="object-contain"
            src="https://assets-global.website-files.com/655dd78870c51459319f6bbb/655df71ede1029cae5386583_geo-3-p-500.png"
            alt=""
          />
        </div>
        <div className="flex justify-center  flex-col items-center lg:items-start">
          <h1 className=" text-center  font-[600] leading-8 lg:leading-[70px] md:text-[4rem] text-[2.1rem] ">
            Empower{" "}
          </h1>
          <h1 className="text-[#0000ff] font-[600] text-center text-[2rem] lg:pl-20 md:text-[4rem]">
            Your Carrer
          </h1>
          <h1 className="font-[600] leading-8 lg:leading-[70px] text-center text-[2.1rem] md:text-[4rem]">
            with ProfilePro.
          </h1>
          <p className="py-10 text-[1.3rem] lg:text-[1.5rem] text-center lg:text-start text-gray-400 font-medium">
            <span className="text-white">Build</span> ATS-Friendly Resumes, Get
            Insights, and Code Together!
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
