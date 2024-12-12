import React from 'react';
import { motion } from 'motion/react';
import { FaLinkedin, FaGithub, FaHackerrank, FaCode } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const ProfileButtons = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const profiles = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/mohanram-murugesan/",
      color: "text-blue-500",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/Mohanram2401",
      color: "text-gray-500",
    },
    {
      name: "HackerRank",
      icon: <FaHackerrank />,
      url: "https://www.hackerrank.com/profile/mohanrammuruges1",
      color: "text-green-500",
    },
    {
      name: "LeetCode",
      icon: <FaCode />,
      url: "https://leetcode.com/u/Mohanram_M/",
      color: "text-yellow-500",
    },
  ];

  return (
    <div id='links' className="text-white py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold underline mb-8">
          Connect with Me
        </h2>
        <p className="mb-12 text-gray-400">
          Let's connect on various platforms to share knowledge and collaborate.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile, index) => (
            <motion.a
              ref={ref}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-500 transition-shadow duration-300`}
            >
              <div className="flex justify-center items-center mb-4">
                <div className={`${profile.color} text-4xl sm:text-5xl lg:text-6xl`}>
                  {profile.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-lg lg:text-2xl font-semibold mb-2">
                {profile.name}
              </h3>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileButtons;
