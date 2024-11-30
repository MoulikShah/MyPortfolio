import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

function ExperienceCard({ experience, theme }) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background:
          theme !== "dark"
            ? "linear-gradient(90deg, rgba(224,234,240,1) 0%, rgba(232,239,243,1) 50%, rgba(224,234,240,1) 100%)"
            : "linear-gradient(90deg, rgba(33,33,52,1) 0%, rgba(39,39,61,1) 50%, rgba(33,33,52,1) 100%)",
        color: theme !== "dark" ? "#7e8c9f" : "#e5e6e9",
        boxShadow: "0 1px 2px 0 rgb(128, 77, 238)",
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${theme !== "dark" ? "#e0eaf0" : "#2b2b42"}`,
      }}
      style={{
        boxShadow: "0 1px 2px 0 rgb(128, 77, 238 / 0.05)",
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, backgroundColor: "#e0eaf0" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <div className="w-[60%] h-[60%] relative">
            <Image
              src={experience.icon}
              alt={experience.company_name}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
            />
          </div>
        </div>
      }
    >
      <div>
        <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight text-[24px] font-bold">
          {experience.title}
        </h3>
        <a 
          href={experience.company_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary text-[16px] font-semibold hover:text-white transition-colors"
        >
          {experience.company_name}
        </a>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="dark:text-ctnPrimaryDark text-ctnPrimaryLight text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

function Experience() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full mt-32">
      <div>
        <p className="sm:text-[18px] text-[14px] uppercase tracking-wider text-center font-medium dark:text-[#804dee] text-[#804dee]">
          What I have done so far
        </p>
        <h2 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center dark:text-white text-black">
          Work Experience.
        </h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor={theme === "dark" ? "#7e8c9f" : "#8c9db1"}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              theme={theme}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default SectionWrapper(Experience, "work");
