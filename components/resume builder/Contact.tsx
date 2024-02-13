import React from "react";
import Input from "./Input";
import { TiArrowRightThick } from "react-icons/ti";

const Contact = () => {
  return (
    <div className="h-screen w-[40%] cont">
      <div className="flex justify-center h-full flex-col gap-5">
        <div>
          <h2 className="text-[1.4rem] lg:text-[1.8rem] font-medium">
            Please enter your <span className="text-[#0000ff]"> contact </span>{" "}
            info
          </h2>
          <small className="text-md text-gray-400 leading-10">
            It allows employers to see how they contact you.
          </small>
        </div>
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <Input label="Fullname" placeholder="Tanuj" />
            <Input label="Address" placeholder="Enter a Location" />
            <Input label="City" placeholder="Dehradun" />
            <Input label="Postal Code" placeholder="248002" />
            <Input label="Phone" placeholder="987-654-3210" />
            <Input label="Email" placeholder="e.g. mail@example.com" />
            <Input label="Postal Code" placeholder="248002" />
          </div>
          <button className="px-10 py-5 font-medium w-fit bg-[#0000ff] rounded-full lg:mt-10 flex items-center justify-center gap-2">
            <span>Next to Experience</span>
            <span className="text-2xl">
              <TiArrowRightThick />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
