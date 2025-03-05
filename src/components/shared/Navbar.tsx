"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Link as SLink } from "react-scroll";
import { FaFacebookF, FaTwitter, FaDribbble, FaBehance, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="p-5 shadow-md div-dark">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-xl flex items-center">
          <SLink to="banner" smooth={true} duration={1000}>
            <span className="text-green-500 text-2xl mr-1 cursor-pointer">
              ●
            </span>
            <span className="cursor-pointer">TA.</span>
          </SLink>
        </div>

        {/* Navigation Links (Hidden on Small Screens) */}
        <div className="space-x-8 hidden md:flex">
          <SLink
            to="services"
            smooth={true}
            duration={1000}
            className="hover:text-green-500 transition"
          >
            Service
          </SLink>
          <SLink
            to="project"
            smooth={true}
            duration={1000}
            className="hover:text-green-500 transition"
          >
            Works
          </SLink>
          <SLink
            to="experience"
            smooth={true}
            duration={1000}
            className="hover:text-green-500 transition"
          >
            Qualifications
          </SLink>
          <SLink
            to="skills"
            smooth={true}
            duration={1000}
            className="hover:text-green-500 transition"
          >
            Skills
          </SLink>
          <SLink
            to="contact"
            smooth={true}
            duration={1000}
            className="hover:text-green-500 transition"
          >
            Contact
          </SLink>
        </div>

        {/* Social Links (Hidden on Small Screens) */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-500 hover:text-green-500 transition">
            <FaDribbble size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-green-500 transition">
            <FaBehance size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-green-500 transition">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-green-500 transition">
            <FaTwitter size={20} />
          </a>
        </div>

        {/* Theme Toggle & Hire Me Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 text-xl"
          >
            {theme === "light" ? "🌙" : "🔆"}
          </button>
          <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition">
            Hire Me!
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-900 text-white rounded-md py-3 space-y-3 text-center">
          <a
            href="#AwesomeService"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            Service
          </a>
          <a
            href="#Project"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            Works
          </a>
          <a
            href="#resume"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
          <a
            href="#Skills"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#Contact"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
