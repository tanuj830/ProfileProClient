"use client";
import React from "react";
import Input from "./Input";
import { TiArrowRightThick } from "react-icons/ti";

interface EducationProps {
  setEducationPageCompleted: Function;
  setEducationPageData: Function;
}

const Education: React.FC<EducationProps> = ({
  setEducationPageCompleted,
  setEducationPageData,
}) => {
  const [year, setYear] = React.useState("");
  const [degree, setDegree] = React.useState("");
  const [school, setSchool] = React.useState("");
  const [grade, setGrade] = React.useState("");

  return (
    <div className="h-full  w-full p-10">
      <div className="flex justify-center h-full flex-col gap-5">
        <div>
          <h2 className="text-[1.4rem] lg:text-[1.8rem] font-medium">
            Please enter your{" "}
            <span className="text-[#0000ff]"> Education </span> info
          </h2>
          <small className="text-md text-gray-400 leading-10">
            It allows employers to see how you performed in your acadmeics.
          </small>
        </div>
        <div className="">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEducationPageCompleted(true);
              let data = {
                year,
                degree,
                school,
                grade,
              };
              setEducationPageData(data);
              console.log(data);
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <Input
                label="Start and End Year"
                placeholder="2020-2024"
                setText={setYear}
              />
              <Input label="Degree" placeholder="B-tech" setText={setDegree} />
              <Input
                label="Institute"
                placeholder="Graphic Era Hill University"
                setText={setSchool}
              />
              <Input
                label="CGPA/ Marks"
                placeholder="8.1/ 10"
                setText={setGrade}
              />
            </div>
            <button
              type="submit"
              className="px-10 py-5 mt-5 font-medium w-fit bg-[#0000ff] rounded-full lg:mt-10 flex items-center justify-center gap-2"
            >
              <span>Compile</span>
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

export default Education;
