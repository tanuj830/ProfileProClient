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
}

const Preview: React.FC<PreviewProps> = ({ contactPageData }) => {
  const { toPDF, targetRef } = usePDF({ filename: "resume.pdf" });
  return (
    <div className="w-full h-full relative">
      <div ref={targetRef} className="bg-white text-black w-full h-screen p-5">
        {Object.keys(contactPageData) ? (
          <div>
            {/* contact preview */}
            <div className="flex flex-col ">
              <span className="text-md">{contactPageData.name}</span>
              <div>
                <span className="text-xs">{contactPageData.address}</span>
                <span className="text-xs">{contactPageData.city}</span>
                <span className="text-xs">{contactPageData.postalcode}</span>
              </div>
              <span className="text-xs">{contactPageData.phone}</span>
              <span className="text-xs">{contactPageData.email}</span>
              <a href={contactPageData.linkedin} className="text-xs">
                {contactPageData.linkedin}
              </a>
            </div>
            {/* Education preview */}
            <>
              <div className="mt-2">
                <h2 className="bg-gray-200 py-1 rounded-sm text-xs w-full text-center font-bold uppercase">
                  Education
                </h2>
              </div>
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
            </>
          </div>
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
