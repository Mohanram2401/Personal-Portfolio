import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Privacy from "../assets/Certifications/Privacy.jpg";
import Social from "../assets/Certifications/SocialNetwork.jpg";
import Ethical from "../assets/Certifications/Ethical.jpg";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      logo: Privacy,
      course: "Privacy and Security in Online Social Media",
      description:
        "An insightful course covering the fundamentals of online privacy and strategies to enhance social media security.",
      certificateUrl: "../assets/Certifications/Privacy.pdf",
    },
    {
      id: 2,
      logo: Social,
      course: "Cloud Architecting",
      description:
        "A comprehensive course focused on cloud infrastructure, design, and deployment using AWS.",
      certificateUrl: "../assets/Certifications/Cloud.pdf",
    },
    {
      id: 3,
      logo: Ethical,
      course: "Ethical Hacking",
      description:
        "An advanced course on ethical hacking techniques to identify and mitigate security vulnerabilities.",
      certificateUrl: "../assets/Certifications/Ethical.pdf",
    },
  ];

  return (
    <div id="certifications" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-white font-bold text-center mb-12">
          Certifications
        </h2>
        <div className="space-y-8">
          {certifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              logo={certification.logo}
              course={certification.course}
              description={certification.description}
              certificateUrl={certification.certificateUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CertificationCard = ({ logo, course, description, certificateUrl }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.a
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2, duration: 0.6 }}
      href={certificateUrl}
      download
      className="flex items-center bg-gray-900 shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gray-800 lg:w-full
       md:w-80 w-full"
    >
      <img
        src={logo}
        alt={`${course} logo`}
        className="w-32 h-32 object-contain bg-white p-4"
      />
      <div className="p-6">
        <h3 className="text-2xl text-white font-semibold mb-2">{course}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.a>
  );
};

export default Certifications;
