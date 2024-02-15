"use client";
import Contact from "@/components/resume builder/Contact";
import Experience from "@/components/resume builder/Experience";
import Preview from "@/components/resume builder/Preview";
import React from "react";

const page = () => {
  const [contactPageCompleted, setContactPageCompleted] = React.useState(false);
  const [contactPageData, setContactPageData] = React.useState({
    name: "Tanuj Bhatt",
    address: "Sunshine Enclave, Clement Town",
    city: "Dehradun",
    postalcode: "248002",
    phone: "7668088539",
    email: "tanujbhatt65@gmail.com",
    linkedin: "https://tanujbhatt.in/",
  });
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-5">
      <div className="flex  lg:flex-col w-full lg:w-[50%]">
        <Contact
          setContactPageCompleted={setContactPageCompleted}
          setContactPageData={setContactPageData}
        />
      </div>
      <div className="w-full lg:w-[50%]">
        <Preview contactPageData={contactPageData} />
      </div>
    </div>
  );
};

export default page;
