import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGithub, FaAws } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase, SiJavascript } from 'react-icons/si';

const Technologies = () => {
  const techs = [
    { name: "ReactJS", icon: <FaReact className="text-blue-500 text-3xl" /> },
    { name: "NodeJS", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-500 text-3xl" /> },
    { name: "AWS", icon: <FaAws className="text-orange-500 text-3xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-3xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-3xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
  ];

  const ScrollVariant = {
    animate: {
      x: [0, -2000], 
      transition: {
        x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" }, // Adjust the speed here
      },
    },
  };

  const techList = [...techs, ...techs, ...techs];

  return (
    <div className="text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Technologies I Know</h2>

        <div className="relative w-full h-32 overflow-hidden rounded-lg shadow-lg">
          <motion.div
            variants={ScrollVariant}
            animate="animate"
            className="absolute top-0 left-0 w-max flex space-x-8 items-center"
          >
            {techList.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-32 h-28 bg-gray-900 rounded-lg p-4 shadow-md"
              >
                {tech.icon}
                <p className="text-sm font-semibold text-gray-300 mt-2">{tech.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
