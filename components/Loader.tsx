import React from "react";
import { LuLoader2 } from "react-icons/lu";
import { RiLoaderLine } from "react-icons/ri";

const Loader = () => {
  return (
    <div className="fixed h-screen w-screen  bg-black z-50">
      <div className="h-full w-full flex justify-center items-center">
        <div className="flex justify-center items-center gap-2">
          <RiLoaderLine className="animate-spin text-3xl font-semibold duration-1000 transition-all" />
          <span className="text-[1.7rem] font-semibold ">
            Profile Pro<span className="font-extrabold text-[#0000ff]">.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
