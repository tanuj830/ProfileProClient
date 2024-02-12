import React, { Fragment } from "react";
import { MdSupportAgent } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { MdInsights } from "react-icons/md";
import { SiFuturelearn } from "react-icons/si";
import { FcSupport } from "react-icons/fc";
import { IconBase } from "react-icons";

const WhyUs = () => {
  const whyus = [
    {
      Icon: MdSupportAgent,
      title: "Expert Guidance",
      disp: "Benefit from expert guidance every step of the way, ensuring that you present yourself in the best possible light to prospective employers.",
    },
    {
      Icon: GrTechnology,
      title: "Cutting-Edge Technology",
      disp: "Harness the power of cutting-edge technology to optimize your resume for Applicant Tracking Systems, giving you a competitive edge in the job market.",
    },
    {
      Icon: MdInsights,
      title: "Actionable Insights",
      disp: "Gain actionable insights into your resume's performance, helping you identify areas for improvement and tailor your application for success.",
    },
    {
      Icon: SiFuturelearn,
      title: "Interactive Learning",
      disp: "Engage in interactive coding sessions with real-time chat features, fostering a dynamic learning environment where users can collaborate and learn from one another.",
    },
    {
      Icon: FcSupport,
      title: "Community Support",
      disp: "Join a supportive community of like-minded individuals who are passionate about professional growth and development, providing encouragement, feedback, and camaraderie along the way.",
    },
  ];

  return (
    <div className="cont mt-20">
      <div className="flex justify-center ">
        <div>
          <h2 className="text-[1.3rem] lg:text-[1.5rem] text-gray-400 font-medium text-center">
            Why Choose <span className="text-white">ProfilePro </span>and not
            others?
          </h2>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
              {whyus.map((rs) => {
                const { Icon } = rs;
                return (
                  <div className="p-6 rounded-3xl bg-[#1A1A1C]">
                    <Icon className="text-[4rem] text-[#0000ff] text-center w-full" />
                    <h6 className="text-white font-medium text-[1.5rem] text-center py-5">
                      {rs.title}
                    </h6
                    <p className="text-gray-400 font-medium text-[1rem] text-center">
                      {rs.disp}
                    </p>
                    <div />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
