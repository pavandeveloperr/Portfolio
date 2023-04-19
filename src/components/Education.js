import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-3xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-primaryDark/75 xs:text-sm">
          {time}|{place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div classNme="my-64">
      <h2 className="font-bold text-8xl mb-20 w-full text-center pt-40">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-[100vh] bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Full Stack Web Development"
            time="July 2022 - Jan 2023"
            place="AlmaBetter, Bangalore"
            info="Completed 6 months of CourseWork Certification"
          />
          <Details
            type="Bachelor of Computer Applications"
            time="2019 - 2022"
            place="LVD College"
            info="Raichur, karnataka, India"
          />

          <Details
            type="12th board"
            time="2017 - 2019"
            place="VidyaBharati PU College of Science"
            info="Raichur, karnataka, India"
          />

          <Details
            type="High School"
            time="2007 - 2017"
            place="Mother's Education Trust"
            info="Raichur, karnataka, India"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
