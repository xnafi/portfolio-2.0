"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  FaTwitter,
  FaDribbble,
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import SmoothLink from "../re-ui/SmoothLink";
import TooltipButton from "../re-ui/TooltipButton ";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (!mounted) return null;

  return (
    <nav
      className={`p-5 shadow-md div-dark fixed top-0 w-full transition-transform duration-300 z-50  ${
        visible ? "translate-y-0" : "-translate-y-full"
      } bg-white dark:bg-gray-900`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-xl flex items-center">
          <SmoothLink to="banner" duration={1000} link="TA." />
        </div>

        {/* Navigation Links */}
        <div className="space-x-8 hidden md:flex">
          <SmoothLink to="services" duration={1000} link="Service" />
          <SmoothLink to="project" duration={1000} link="Works" />
          <SmoothLink to="experience" duration={1000} link="Qualifications" />
          <SmoothLink to="skills" duration={1000} link="Skills" />
          <SmoothLink to="contact" duration={1000} link="Contact" />
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
        <div className="md:hidden mt-4 bg-white dark:bg-black dark:text-white text-black rounded-md py-3 space-y-3 text-left">
          <SmoothLink
            to="services"
            duration={1000}
            link="Service"
            className="block hover:text-green-400"
          />
          <SmoothLink
            to="project"
            duration={1000}
            link="Works"
            className="block hover:text-green-400"
          />
          <SmoothLink
            to="experience"
            duration={1000}
            link="Resume"
            className="block hover:text-green-400"
          />
          <SmoothLink
            to="skills"
            duration={1000}
            link="Skills"
            className="block hover:text-green-400"
          />
          <SmoothLink
            to="contact"
            duration={1000}
            link="Contact"
            className="block hover:text-green-400"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
