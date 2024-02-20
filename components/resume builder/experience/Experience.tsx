"use Client";
import React from "react";
import Input from "../Input";
import { TiArrowRightThick } from "react-icons/ti";
import PreviousAddedItems from "./PreviousAddedItems";
import { IoAdd } from "react-icons/io5";

interface ExperienceProps {
  setExperiencePageCompleted: Function;
  setExperiencePageData: Function;
  experiencePageData: Array<any>;
}

const Contact: React.FC<ExperienceProps> = ({
  setExperiencePageCompleted,
  setExperiencePageData,
  experiencePageData,
}) => {
  const [title, setTitle] = React.useState("CEO");
  const [employer, setEmployer] = React.useState("Google");
  const [startDate, setStartDate] = React.useState("Mar 2023");
  const [endDate, setEndDate] = React.useState("Aug 2023");
  const [city, setCity] = React.useState("Dehradun");
  const [disp, setDisp] = React.useState("Write your work experience");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setExperiencePageCompleted(true);
    let data = {
      title,
      employer,
      startDate,
      endDate,
      city,
      disp,
    };
    setExperiencePageData([...experiencePageData, data]);
  };

  return (
    <div className="h-full  w-full p-10">
      <div className="flex justify-center h-full flex-col gap-5">
        <div>
          <h2 className="text-[1.4rem] lg:text-[1.8rem] font-medium">
            <span className="text-[#0000ff]"> Tell us </span> about experience
          </h2>
          <small className="text-md text-gray-400 leading-10">
            Start with your recent job.
          </small>
        </div>
        <div>
          <PreviousAddedItems
            setData={setExperiencePageData}
            data={experiencePageData}
          />
        </div>
        <div className="">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <Input setText={setTitle} label="Job title" placeholder="ceo" />
              <Input
                setText={setEmployer}
                label="employer"
                placeholder="Google"
              />
              <Input
                setText={setStartDate}
                label="start date"
                placeholder="Enter Date"
              />
              <Input
                setText={setEndDate}
                label="end date"
                placeholder="Enter Date"
              />
              <Input setText={setCity} label="city" placeholder="Dehradun" />
              <Input
                setText={setDisp}
                label="Description"
                placeholder="Write your work experience"
              />
            </div>
            <button
              type="submit"
              // onClick={handleAddExperience}
              className="px-10 py-5 mt-5 font-medium w-fit bg-[#0000ff] rounded-full lg:mt-10 flex items-center justify-center gap-2"
            >
              <span className="text-2xl font-bold">
                <IoAdd />
              </span>
              <span>Add more</span>
              {/* <span className="text-2xl">
                <TiArrowRightThick />
              </span> */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
