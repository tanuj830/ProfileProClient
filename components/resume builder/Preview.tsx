"use client";
import React from "react";
import { usePDF } from "react-to-pdf";

interface PreviewProps {
  contactPageData: {
    name: string;
    address: string;
    city: string;
    postalcode: string;
    phone: string;
    email: string;
    linkedin: string;
  };
  educationPageData: Array<{
    year: string;
    degree: string;
    school: string;
    grade: string;
  }>;
  experiencePageData: {
    title: string;
    employer: string;
    startDate: string;
    endDate: string;
    city: string;
    disp: string;
  };
}

const Preview: React.FC<PreviewProps> = ({
  contactPageData,
  educationPageData,
  experiencePageData,
}) => {
  const { toPDF, targetRef } = usePDF({ filename: "resume.pdf" });
  console.log(educationPageData);
  return (
    <div className="w-full h-full relative ">
      <div ref={targetRef} className="bg-white text-black w-full h-screen p-5">
        {Object.keys(contactPageData) ? (
          <>
            <div>
              {/* contact preview */}
              <div className="flex flex-col ">
                <span className="text-md">{contactPageData.name}</span>
                <div>
                  <span className="text-xs">{contactPageData.address}, </span>
                  <span className="text-xs">{contactPageData.city}, </span>
                  <span className="text-xs">{contactPageData.postalcode}</span>
                </div>
                <span className="text-xs">{contactPageData.phone}</span>
                <span className="text-xs">{contactPageData.email}</span>
                <a href={contactPageData.linkedin} className="text-xs">
                  {contactPageData.linkedin}
                </a>
              </div>
            </div>
            {/* Education preview */}
            <div>
              <div className="mt-2">
                <h2 className="bg-gray-200 py-1 rounded-sm text-xs w-full text-center font-bold uppercase">
                  Education
                </h2>
              </div>
              {educationPageData.length > 0
                ? educationPageData.map((data) => (
                    <div className="flex items-center justify-between">
                      <span className="text-xs">{data.year}</span>
                      <span className="text-xs">{data.degree}</span>
                      <span className="text-xs">{data.school}</span>
                      <span className="text-xs">{data.grade}</span>
                    </div>
                  ))
                : null}
            </div>
            {/* Experience preview */}
            <div>
              <div className="mt-2">
                <h2 className="bg-gray-200 py-1 rounded-sm text-xs w-full text-center font-bold uppercase">
                  Experience
                </h2>
              </div>
              <div className="">
                <div className="text-xs flex justify-between">
                  <span className="font-semibold text-sm">
                    {experiencePageData.employer}
                  </span>
                  <span className="font-semibold text-sm">
                    {experiencePageData.startDate}
                    {" - "}
                    {experiencePageData.endDate}
                  </span>
                </div>
                <div className="text-xs flex justify-between">
                  <span className="italic text-xs">
                    {experiencePageData.title}
                  </span>
                  <span className="italic text-xs">
                    {experiencePageData.city}
                  </span>
                </div>

                <span className="text-xs">{experiencePageData.disp}</span>
              </div>
            </div>
          </>
        ) : null}
      </div>
      <button
        onClick={() => toPDF()}
        className="px-10 py-5 font-medium w-fit bg-[#0000ff] rounded-full mt-4 absolute bottom-5 right-5"
      >
        Download Resume
      </button>
    </div>
  );
};

export default Preview;
