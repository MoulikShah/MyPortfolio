import { motion } from "framer-motion";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import Image from 'next/image';

const EducationCard = ({ education, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="p-6 rounded-2xl sm:w-[360px] w-full"
  >
    <div className="relative w-full">
      <Image
        src={education.icon}
        alt={education.school_name}
        width={60}
        height={60}
        className="w-[60px] h-[60px] object-contain"
      />
      
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <p className="text-white font-medium text-[16px]">
            {education.date}
          </p>
          <p className="text-purple-400 font-semibold text-[14px]">
            {education.grade}
          </p>
        </div>
        
        <h3 className="text-white font-bold text-[24px] mt-2">
          {education.degree}
        </h3>
        
        <a 
          href={education.school_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 text-[18px] mt-1 hover:text-purple-400 transition-all duration-200 inline-block"
        >
          {education.school_name}
        </a>
      </div>
    </div>

    <div className="mt-4 border-t border-purple-800 pt-4">
      <ul className="list-none space-y-2">
        {education.points.map((point, pointIndex) => (
          <li
            key={`education-point-${pointIndex}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider hover:text-purple-400 transition-all duration-200 flex items-start"
          >
            <span className="text-cyan-300 mr-2">•</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText text-center">What I have learned so far</p>
        <h2 className="sectionHeadText text-center">Education.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
        >
          My academic journey has equipped me with both theoretical knowledge and practical skills,
          preparing me for real-world challenges in technology and innovation.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {education.map((education, index) => (
          <EducationCard
            key={`education-${index}`}
            index={index}
            education={education}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");