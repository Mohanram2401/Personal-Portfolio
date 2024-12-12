import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Technologies from './Technologies';
import Project1 from '../assets/Projects/Research_Project.webp';
import Project2 from '../assets/Projects/E-Commerce.jpg';
import Project3 from '../assets/Projects/Portfolio.png';
import Project4 from '../assets/Projects/Notes.png';
import Project5 from '../assets/Projects/restorant.png';
import Project6 from '../assets/Projects/Smart Medicine.jpg';

const Work = () => {
  const [Ref, titleInView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.2 
  });

  const projects = [
    {
      id: 1,
      title: "Dementia Prediction using Ensemble Methods",
      description: "A machine learning project using ensemble methods to predict the onset of dementia. The model integrates various algorithms to improve prediction accuracy and optimize healthcare data analysis for early diagnosis.",
      image: Project1,
      link: "#"
    },
    {
      id: 2,
      title: "Ecommerce Website for Maruthi Super Market",
      description: "A dynamic eCommerce solution for a local supermarket built with ReactJS and Firebase, enabling online sales and inventory management.",
      image: Project2,
      link: "https://maruthi-supermarket.vercel.app/"
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description: "A visually appealing personal portfolio showcasing skills, projects, and certifications. Built using ReactJS, Tailwind CSS, and Framer Motion.",
      image: Project3,
      link: "#"
    },
    {
      id: 4,
      title: "Book Buddy",
      description: "An interactive online book club and organizer, allowing users to track, review, and recommend books. Built with HTML, CSS, and JavaScript.",
      image: Project4,
      link: "https://booksnoter.vercel.app/"
    },
    {
      id: 5,
      title: "Online Shopping Website (eCart)",
      description: "A simple yet dynamic eCart website built with HTML, CSS, JavaScript, and MongoDB, allowing users to add, remove, and calculate total amounts for products in the cart, with a responsive and interactive user interface.",
      image: Project5,
      link: "https://mohanram2401.github.io/Restaurant-website-using-HTML-Javascript-CSS/"
    },
    {
      id: 6,
      title: "Smart Medicine Pick and Place Robot",
      description: "A prototype pick-and-place robot built using Microcontroller 8060, C++, and IR sensors for handling medicine containers. The system features Bluetooth integration for remote control and precise robotic movements for enhanced reliability.",
      image: Project6,
      link: "#"
    }
  ];

  return (
    <div id="work" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={Ref}
          initial={{ opacity: 0, y: 100 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl text-white underline font-bold text-center mb-12"
        >
          My Work
        </motion.h2>
        <motion.p
          ref={Ref}
          initial={{ opacity: 0, y: 100 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-12 text-gray-400 text-center"
        >
          Showcasing my innovative projects that turn ideas into functional solutions.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
            return (
              <motion.div
                ref={ref}
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-gray-900 shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={`${project.title} Thumbnail`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition"
                  >
                    Demo
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <Technologies />
    </div>
  );
};

export default Work;
