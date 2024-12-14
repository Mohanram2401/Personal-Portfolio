import React, { useState } from 'react';
import { MdMenuOpen } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';
import CV from '../assets/mohancv.pdf'; // Import the PDF file

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const items = [
        { id: 1, text: "About", to: "about" },
        { id: 2, text: "Services", to: "services" },
        { id: 3, text: "Work", to: "work" },
        { id: 4, text: "Contact", to: "contact" },
        { id: 5, text: "Links", to: "links" },
    ];

    const variants = {
        open: { x: 0 }, // Menu slides in from the left
        closed: {
            x: "-100%", // Menu slides out to the left
            transition: { type: "spring", duration: 0.8 },
        },
    };

    return (
        <div>
            {/* Desktop Navbar */}
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto hidden md:flex justify-between items-center py-6"
            >
                <div className="text-xl lg:text-2xl font-bold flex items-center gap-1">
                    <span className="text-white">Mohanram</span>
                    <span className="text-purple-500">M</span>
                </div>
                <div>
                    <ul className="hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-white hover:cursor-pointer">
                        {items.map(({ id, text, to }) => (
                            <li key={id}>
                                <Link
                                    to={to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                >
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <a
                    href={CV}
                    download="Mohanram_CV.pdf"
                    className="md:text-base lg:text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-full hover:cursor-pointer"
                >
                    Download CV
                </a>
            </motion.div>

            {/* Mobile Navbar */}
            <div className="flex md:hidden justify-between">
                {/* Side Drawer for Mobile */}
                <motion.div
                    animate={menu ? "open" : "closed"}
                    initial="closed"
                    variants={variants}
                    className="fixed top-0 left-0 h-full w-2/3 bg-white z-20 shadow-lg text-black"
                >
                    <div className="px-7 py-6 flex justify-between items-center">
                        <span className="text-xl font-bold text-black">Menu</span>
                        <IoMdClose
                            size={30}
                            className="cursor-pointer"
                            onClick={() => setMenu(false)}
                        />
                    </div>
                    {menu && (
                        <div className="flex flex-col justify-center items-center">
                            <ul className="space-y-6 text-black text-lg">
                                {items.map(({ id, text, to }) => (
                                    <li
                                        key={id}
                                        className="hover:text-purple-500 duration-200 cursor-pointer"
                                    >
                                        <Link
                                            to={to}
                                            duration={500}
                                            smooth={true}
                                            offset={-70}
                                            onClick={() => setMenu(false)} // Close menu when clicking a link
                                        >
                                            {text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={CV}
                                download="Mohanram_CV.pdf"
                                className="text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 mt-6 rounded-full"
                                onClick={() => setMenu(false)} // Close menu when clicking CV download
                            >
                                Download CV
                            </a>
                        </div>
                    )}
                </motion.div>

                {/* Top Bar for Mobile */}
                <div className="flex items-center justify-between w-full px-4 py-6">
                    <div className="text-xl font-bold flex items-center gap-2">
                        <span className="text-white">Mohanram</span>
                        <span className="text-purple-500">M</span>
                    </div>
                    <MdMenuOpen
                        size={30}
                        className="cursor-pointer text-white"
                        onClick={() => setMenu(true)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
