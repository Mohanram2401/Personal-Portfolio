import React from 'react'
import Pic from '../assets/picofme.png'

import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

const About = () => {

    const {ref, inView} = useInView({
        triggerOnce:true,
        threshold: 0.2,

    })

  return (
    <div id='about' className='text-white px-16'>
        <div className='container mx-auto px-4 text-center'>
            <motion.h2
            ref={ref}
            initial={{opacity:0, y:100}}
            animate={inView ? {opacity:1, y:0} : {}}
            transition={{delay:0.3, duration:0.5}}
            className='text-3xl md:text-4xl font-bold mb-8 underline'>
                About me
            </motion.h2>
            <motion.p 
            ref={ref}
            initial={{opacity:0, y:100}}
            animate={inView ? {opacity:1, y:0} : {}}
            transition={{delay:0.5, duration:0.5}}
            className='mb-12 text-gray-400 text-center'>
                Crafting innovative solutions through code, blending creativity and technology to solve real-world challenges.
            </motion.p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-4">
  {/* Image Section */}
  <motion.div
    ref={ref}
    initial={{ opacity: 0, x: -100 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ delay: 0.6, duration: 0.5 }}
    className="flex justify-center w-full md:w-1/2"
  >
    <img
      className="w-2/3 sm:w-1/2 md:w-10/12 max-h-64 object-contain"
      src={Pic}
      alt="About Image"
    />
  </motion.div>

  {/* Paragraph Section */}
  <motion.p
    ref={ref}
    initial={{ opacity: 0, x: 100 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ delay: 0.6, duration: 0.5 }}
    className="text-center md:text-left text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed w-full md:w-1/2"
  >
    Hey there, I'm Mohanram! As a software engineer, I thrive on transforming ideas into efficient, scalable solutions. With a strong background in web development using technologies like ReactJS, Tailwind CSS, and NodeJS, as well as experience in machine learning, I’m always looking to tackle new challenges and push the boundaries of what’s possible. I believe in the power of technology to solve real-world problems and am excited to contribute my skills to create impactful software solutions.
  </motion.p>
</div>


            {/* <div className='flex flex-col sm:flex-row justify-around items-center mt-12 space-y-6 sm:space-y-0 '>
                <motion.div 
                ref={ref}
                initial={{opacity:0}}
                animate={inView ? {opacity:1} : {}}
                transition={{delay:1.2, duration:0.3}}
                className='text-center'>
                    <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>5+</h3>
                    <motion.p 
                    ref={ref}
                    initial={{opacity:0, y:100}}
                    animate={inView ? {opacity:1, y:0} : {}}
                    transition={{delay:1.7, duration:0.5}}
                    className='text-sm sm:text-base text-gray-300'>
                        Years of Experience
                    </motion.p>
                </motion.div>
        
                <motion.div 
                ref={ref}
                initial={{opacity:0}}
                animate={inView ? {opacity:1} : {}}
                transition={{delay:1.4, duration:0.3}}>
                    <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>3+</h3>
                    <motion.p 
                    ref={ref}
                    initial={{opacity:0, y:100}}
                    animate={inView ? {opacity:1, y:0} : {}}
                    transition={{delay:1.8, duration:0.5}}
                    className='text-sm sm:text-base text-gray-300'>
                        Projects
                    </motion.p>
                </motion.div>
            
                <motion.div
                ref={ref}
                initial={{opacity:0}}
                animate={inView ? {opacity:1} : {}}
                transition={{delay:1.6, duration:0.3}}>
                    <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>5+</h3>
                    <motion.p
                    ref={ref}
                    initial={{opacity:0, y:100}}
                    animate={inView ? {opacity:1, y:0} : {}}
                    transition={{delay:1.9, duration:0.5}}
                    className='text-sm sm:text-base text-gray-300'>
                        Years of Experience
                    </motion.p>
                </motion.div>
            </div> */}
        </div>
    </div>
  )
}

export default About