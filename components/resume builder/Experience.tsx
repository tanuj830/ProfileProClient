"use Client";
import React from "react";
import Input from "./Input";
import { TiArrowRightThick } from "react-icons/ti";

const Contact = () => {
  const [name, setName] = React.useState("");
  return (
    <div className="h-full lg:w-[40%] w-full cont">
      <div className="flex justify-center h-full flex-col gap-5">
        <div>
          <h2 className="text-[1.4rem] lg:text-[1.8rem] font-medium">
            <span className="text-[#0000ff]"> Tell us </span> about experience
          </h2>
          <small className="text-md text-gray-400 leading-10">
            Start with your recent job.
          </small>
        </div>
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <Input setText={setName} label="Job title" placeholder="ceo" />
            <Input setText={setName} label="employer" placeholder="Google" />
            <Input
              setText={setName}
              label="start date"
              placeholder="Enter Date"
            />
            <Input
              setText={setName}
              label="end date"
              placeholder="Enter Date"
            />
            <Input setText={setName} label="city" placeholder="Dehradun" />
            <Input
              setText={setName}
              label="Description"
              placeholder="Write your work experience"
            />
          </div>
          <button className="px-10 py-5 font-medium w-fit bg-[#0000ff] rounded-full lg:mt-10 flex items-center justify-center gap-2">
            <span>Next to Education</span>
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
