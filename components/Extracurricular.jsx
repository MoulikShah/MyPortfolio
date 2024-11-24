import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { extracurriculars } from "../constants";

const ExtraCard = ({ title, company_name, company_url, date, points, index, icon, iconBg }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.2 * index, 0.75)}
      className="w-full sm:w-[350px] p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center bg-dimWhite">
          <img src={icon} alt={company_name} className="w-[80%] h-[80%] object-contain" />
        </div>

        <h3 className="text-white text-[24px] font-bold text-center">
          {title}
        </h3>
        <a 
          href={company_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary text-[18px] font-semibold text-center hover:text-white transition-colors"
        >
          {company_name}
        </a>
        <p className="text-secondary text-[14px] italic">
          {date}
        </p>
        
        <ul className="mt-4 list-disc ml-0 space-y-2">
          {points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider text-center list-none"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Extracurricular = () => {
  console.log("Extracurricular component rendering");
  console.log("Extracurriculars data:", extracurriculars);
  
  return (
    <div className="w-full min-h-screen mx-auto relative z-0 mt-32">
      <motion.div variants={textVariant()}> 
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
          What I have done so far
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Extracurricular Activities.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {extracurriculars.map((extracurricular, index) => (
          <ExtraCard 
            key={`extracurricular-${index}`}
            index={index}
            {...extracurricular}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Extracurricular, "extracurricular"); 