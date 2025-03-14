"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import {
  FaTwitter,
  FaDribbble,
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { motion } from "framer-motion";
import SmoothLink from "@/components/re-ui/SmoothLink";
import TooltipButton from "@/components/re-ui/TooltipButton ";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY < lastScrollY) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    setLastScrollY(window.scrollY);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  return (
    <nav
      className={`p-5 shadow-md div-dark fixed top-0 w-full transition-transform duration-300  z-50  ${
        visible ? "translate-y-0" : "-translate-y-full"
      } bg-white dark:bg-gray-900`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-2xl flex items-center">
          <span>TA.</span>
        </div>

        {/* Navigation Links */}
        <div className="md:space-x-1 lg:space-x-8 hidden md:flex">
          <SmoothLink to="services" duration={1000} name="Service" />
          <SmoothLink to="project" duration={1000} name="Works" />
          <SmoothLink to="experience" duration={1000} name="Qualifications" />
          <SmoothLink to="skills" duration={1000} name="Skills" />
          <SmoothLink to="contact" duration={1000} name="Contact" />
        </div>

        {/* Social Links */}
        <div className="hidden md:flex items-center space-x-4">
          <TooltipButton
            href="#"
            icon={<FaDribbble size={20} />}
            tooltip={"Dribble"}
          />

          <TooltipButton
            href="#"
            icon={<FaGithub size={20} />}
            tooltip={"Github"}
          />
          <TooltipButton
            href="#"
            icon={<FaTwitter size={20} />}
            tooltip={"Twitter"}
          />
          <TooltipButton
            href="#"
            icon={<FaLinkedin size={20} />}
            tooltip={"LinkedIn"}
          />
        </div>

        {/* Theme Toggle & Hire Me Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 text-xl"
          >
            {theme === "light" ? "🌙" : "🔆"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden justify-between items-center text-left flex space-x-3">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 text-xl"
          >
            {theme === "light" ? "🌙" : "🔆"}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden lg:hidden bg-white dark:bg-gray-900 rounded-md mt-2 "
      >
        <div className="py-3 space-y-3 text-left">
          <SmoothLink
            to="services"
            duration={1000}
            name="Service"
            className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          />
          <SmoothLink
            to="project"
            duration={1000}
            name="Works"
            className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          />
          <SmoothLink
            to="experience"
            duration={1000}
            name="Resume"
            className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          />
          <SmoothLink
            to="skills"
            duration={1000}
            name="Skills"
            className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          />
          <SmoothLink
            to="contact"
            duration={1000}
            name="Contact"
            className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
