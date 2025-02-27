"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaFacebookF, FaTwitter, FaDribbble, FaBehance } from "react-icons/fa"; // Import FontAwesome Icons

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="flex justify-between items-center p-5 div-dark shadow-md">
      {/* Logo */}
      <div className="font-bold text-xl flex items-center">
        <span className="text-green-500 text-2xl mr-1">●</span> TA.
      </div>

      {/* Navigation Links */}
      <div className="space-x-8 hidden md:flex">
        <a href="#service" className="hover:text-green-500 transition">Service</a>
        <a href="#works" className="hover:text-green-500 transition">Works</a>
        <a href="#resume" className="hover:text-green-500 transition">Resume</a>
        <a href="#skills" className="hover:text-green-500 transition">Skills</a>
        <a href="#contact" className="hover:text-green-500 transition">Contact</a>
      </div>

      {/* Social Icons & Theme Toggle */}
      <div className="flex items-center space-x-4">
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
          className="p-2 text-xl "
        >
          {theme === "light" ? "🌙" : "🔆"}
        </button>

        <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-400 transition">
          Hire Me!
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
