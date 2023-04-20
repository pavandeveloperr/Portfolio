import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center absolute px-6 py-3 justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-4 shadow-dark cursor-pointer dark:bg-yellow-500 dark:text-dark"
          whileHover={{ scale: 1.05 }}
          initial={{ x: 0, y: 0 }}
        >
          WEB
        </motion.div>
        <Skill name="REACT" x="30vw" y="0vw" />
        <Skill name="TAILWINDCSS" x="0vw" y="10vw" />
        <Skill name="CSS" x="0vw" y="20vw" />
        <Skill name="REDUX" x="-30vw" y="0vw" />
        <Skill name="NODE.JS" x="0vw" y="-10vw" />
        <Skill name="JAVASCRIPT" x="25vw" y="20vw" />
        <Skill name="HTML" x="-25vw" y="20vw" />
        <Skill name="EXPRESS.JS" x="0vw" y="-20vw" />
        <Skill name="GIT" x="25vw" y="-10vw" />
        <Skill name="NEXT.JS" x="-22vw" y="-10vw" />
        <Skill name="GITHUB" x="-25vw" y="10vw" />
        <Skill name="MONGODB" x="29vw" y="10vw" />
        <Skill name="NPM" x="-25vw" y="-20vw" />
        <Skill name="JQUERY" x="25vw" y="-20vw" />
      </div>
    </>
  );
};

export default Skills;
