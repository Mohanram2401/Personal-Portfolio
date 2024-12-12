import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h13a7a5', 'template_tncrypp', form.current, 'nfJeg8UUJ_7RXU06G')
      .then((result) => {
        alert('Message sent successfully!');
        console.log(result.text);
      }, (error) => {
        alert('Failed to send the message, please try again.');
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <div id='contact'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12'>
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='text-white font-bold text-4xl'>
          Let's Discuss Your <span className='text-purple-500'>Project</span>
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='text-slate-400 mt-4'>
          Let's make something new, different, and more meaningful or make things more visual or conceptual.
        </motion.p>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='space-y-6'>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className='flex items-center space-x-4'>
            <div className='bg-purple-500 p-4 rounded-full'>
              <FaPhone className='text-white w-6 h-6' />
            </div>
            <div>
              <p className='text-lg font-medium text-purple-500'>Call Me</p>
              <p className='text-white'>+91 93446 11806</p>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className='flex items-center space-x-4'>
            <div className='bg-purple-500 p-4 rounded-full'>
              <FaEnvelope className='text-white w-6 h-6' />
            </div>
            <div>
              <p className='text-lg font-medium text-purple-500'>Email</p>
              <p className='text-white'>mohanrammurugesan1@gmail.com</p>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className='flex items-center space-x-4'>
            <div className='bg-purple-500 p-4 rounded-full'>
              <FaMapMarkerAlt className='text-white w-6 h-6' />
            </div>
            <div>
              <p className='text-lg font-medium text-purple-500'>Address</p>
              <p className='text-white'>Erode, Tamilnadu, India</p>
            </div>
          </motion.div>
        </div>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.3 }}
          className='space-y-4 text-white'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <input name="user_name" type="text" placeholder='Fullname' className='border border-purple-500 bg-gray-900 p-4 rounded-md w-full' required />
            <input name="user_email" type="email" placeholder='Your Email' className='border border-purple-500 bg-gray-900 p-4 rounded-md w-full' required />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <input name="user_phone" type="text" placeholder='Phone number' className='border border-purple-500 bg-gray-900 p-4 rounded-md w-full' />
            <input name="user_subject" type="text" placeholder='Subject' className='border border-purple-500 bg-gray-900 p-4 rounded-md w-full' />
          </div>
          <textarea name="message" placeholder='Message' className='border border-purple-500 bg-gray-900 p-4 rounded-md w-full' required></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type='submit'
            className='bg-purple-500 text-white px-6 py-3 rounded-md bg-purple-500 hover:bg-purple-600 transition duration-200'>
            Submit Message
          </motion.button>
        </motion.form>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.2 }}
        className='mt-12 md:mt-48 flex flex-col md:flex-row justify-between items-center p-5 text-white border-t-2 border-purple-500'>
        <p>&copy; 2024. All Rights Reserved</p>
        <p>Mohanram ❤️</p>
        <div className='flex justify-center space-x-4 text-white mt-4 md:mt-0'>
          <a href="#" className='hover:text-purple-500'><FaFacebook className='w-6 h-6' /></a>
          <a href="https://www.linkedin.com/in/mohanram-murugesan/" className='hover:text-purple-500'><FaLinkedin className='w-6 h-6' /></a>
          <a href="#" className='hover:text-purple-500'><FaTwitter className='w-6 h-6' /></a>
          <a href="#" className='hover:text-purple-500'><FaInstagram className='w-6 h-6' /></a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;