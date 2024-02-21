"use client";
import React from "react";
import { usePDF } from "react-to-pdf";
import ProjectPreview from "./project/ProjectPreview";
import ExperiencePreview from "./experience/ExperiencePreview";
import EducationPreview from "./education/EducationPreview";
import ContactPreview from "./contact/ContactPreview";

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
  experiencePageData: Array<{
    title: string;
    employer: string;
    startDate: string;
    endDate: string;
    city: string;
    disp: string;
  }>;
  projectPageData: Array<{
    title: string;
    skills: string;
    startDate: string;
    endDate: string;
    disp: string;
  }>;
}

const Preview: React.FC<PreviewProps> = ({
  contactPageData,
  educationPageData,
  experiencePageData,
  projectPageData,
}) => {
  const { toPDF, targetRef } = usePDF({ filename: "resume.pdf" });
  return (
    <div className="w-full h-full relative ">
      <div
        ref={targetRef}
        className="bg-white text-black w-full h-screen py-5 px-10 flex justify-start flex-col "
      >
        {Object.keys(contactPageData) ? (
          <>
            <ContactPreview contactPageData={contactPageData} />
            <EducationPreview educationPageData={educationPageData} />
            <ExperiencePreview experiencePageData={experiencePageData} />
            <ProjectPreview projectPageData={projectPageData} />
          </>
        ) : null}
      </div>
      <button
        onClick={() => toPDF()}
        className="px-10 py-5 font-medium w-fit btnBg rounded-full mt-4 absolute bottom-5 right-5"
      >
        Download Resume
      </button>
    </div>
  );
};

export default Preview;
