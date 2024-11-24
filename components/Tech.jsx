import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { technologies } from '../constants';
import { textVariant } from '../utils/motion';
import Link from 'next/link';
import Image from 'next/image';
import { useGLTF, useAnimations, useFBX } from '@react-three/fiber';

function Tech() {
  return (
    <section className="xl:my-36 md:mx-36 p-8" id="skills">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={"sectionSubText"}>My skills</p>
        <h2 className={"sectionHeadText"}>Technologies.</h2>
      </motion.div>

      {Object.entries(technologies).map(([category, techList]) => (
        <div key={category} className="mt-10">
          <h3 className="text-xl font-bold mb-4 dark:text-ctnPrimaryDark text-ctnPrimaryLight">
            {category}
          </h3>
          <div className='flex flex-row flex-wrap justify-center gap-10'>
            {techList.map((tech) => (
              <Link 
                href={tech.link}
                key={tech.name}
                target="_blank"
                className="w-20 h-20 relative group"
              >
                <Image 
                  src={tech.icon}
                  alt={tech.name}
                  width={100}
                  height={100}
                  className="w-20 h-20 object-contain"
                />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm dark:text-ctnSecondaryDark text-ctnSecondaryLight">
                  {tech.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Tech;
