import React from 'react';
import { motion } from 'framer-motion';

const SoftSkills = () => {
  const SoftSkill = [
    "Figma",
    "ReactJS",
    "Tailwind CSS",
    "JavaScript",
    "Framer",
    "NodeJS",
    "MongoDB",
    "Firebase",
    "AWS",
    "Git",
  ];

  const ScrollVariant1 = {
    animate: {
      x: [0, -2000],
      transition: {
        x: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" },
      },
    },
  };

  const ScrollVariant2 = {
    animate: {
      x: [-2000, 0],
      transition: {
        x: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" },
      },
    },
  };

  const SoftSkillList = [...SoftSkill, ...SoftSkill]

  return (
    <div className="text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Technologies I Know</h2>

        <div className="overflow-hidden relative w-full">
          <motion.div
            variants={ScrollVariant1}
            animate="animate"
            className="whitespace-nowrap flex space-x-10"
          >
            {SoftSkillList.map((Skill, index) => (
              <div
                key={index}
                className="text-lg bg-gray-800 px-6 py-3 rounded-full inline-block"
              >
                {Skill}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="overflow-hidden relative w-full mt-5">
          <motion.div
            variants={ScrollVariant2}
            animate="animate"
            className="whitespace-nowrap flex space-x-10"
          >
            {SoftSkillList.map((Skill, index) => (
              <div
                key={index}
                className="text-lg bg-gray-800 px-6 py-3 rounded-full inline-block"
              >
                {Skill}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
