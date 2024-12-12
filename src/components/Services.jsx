import React from 'react'
import { FaAppStore, FaShoppingCart, FaRegEye, FaDatabase, FaCloud } from 'react-icons/fa'
import { IoIosLaptop } from 'react-icons/io'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

const Services = () => {

    const {ref, inView} = useInView({
        triggerOnce:true,
        threshold: 0.2,
    });

    const servicesData = [
        {
            title : "Web Development",
            description : "Creating dynamic, responsive, and user-friendly websites using the latest technologies like ReactJS, Tailwind CSS, and NodeJS.",
            icon: <IoIosLaptop className='text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto'/>
        },
        
        {
            title : "E-commerce Development",
            description : "Designing and developing fully-functional eCommerce platforms tailored to your business needs, optimized for performance and scalability.",
            icon: <FaShoppingCart className='text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto'/>
        },
        
        {
            title : "UI/UX Designing",
            description : "Crafting intuitive and engaging user interfaces with a focus on seamless user experiences and interactive designs.",
            icon: <FaRegEye className='text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto'/>
        },
        
        {
            title : "Database Management",
            description : "Designing and managing secure, high-performance databases with MongoDB, MySQL, and other technologies.",
            icon: <FaDatabase className='text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto'/>
        },
        
        {
            title : "IoT Solutions Development",
            description : "Design and develop IoT systems integrating hardware and software to create smart, connected devices and networks for real-time data collection and analysis.",
            icon: <FaAppStore className='text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto'/>
        },
        
        {
            title : "Cloud Architecture and Deployment",
            description : "I design and deploy scalable cloud architectures using AWS services (EC2, S3) and ensure secure, high-performance solutions. I also deploy websites on platforms like Vercel and Netlify for efficient hosting and delivery.",
            icon: <FaCloud className='text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto'/>
        },
    ]
  return (
    <div id='services' className='text-white py-16'>
        <motion.div 
        ref={ref}
        initial={{opacity:0, y:50}}
        animate={inView ? {opacity:1, y:0 } : {}}
        transition={{duration:0.5}}
        className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold underline mb-8'>Services</h2>
            <p className='mb-12 text-gray-400'>These are the services I offer to help bring your ideas to life.</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {servicesData.map((service, index) => (
                    <motion.div 
                    ref={ref}
                    initial={{opacity:0, scale:0.8}}
                    animate={inView ? {opacity:1, scale:1 } : {opacity:0, scale:0.8}}
                    transition={{duration:0.5, delay: index * 0.2}}
                    className='bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-500 transition-shadow duration-300 ' key={index}>
                        {service.icon}
                        <h3 className='text-lg sm:text-lg lg:text-2xl font-semibold mb-2'>{service.title}</h3>
                        <p className='text-sm sm:text-base lg:text-lg text-gray-400'>{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    </div>
  )
}

export default Services
