"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
// import { FiArrowRight } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";

const Intro = () => {
  const { theme } = useTheme();

  return (
    <div className="py-10 px-4 md:px-16 flex items-center justify-center mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100">
            HELLO THIS IS
          </h1>
          <h2 className="text-5xl md:text-8xl font-bold text-green-500 mt-2">
            Tawam
          </h2>
          <div className="mt-6 text-gray-700 dark:text-gray-300 space-y-4">
            <p className="flex items-center gap-2 para-text">
              <GoArrowUpRight className="text-green-500 text-4xl" /> I am working as a
              freelancer right now. I could create graphic design projects
              linked to all companies.
            </p>
            <p className="flex items-center gap-2 para-text">
              <GoArrowUpRight className="text-green-500 text-6xl" /> With my graphic
              design skills, I can help you create awesome designs for your firm
              or business. I am constantly trying to improve my abilities to
              support various businesses.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex-1 flex justify-center ">
          <div className="relative">
            {/* Profile Image */}
            <Image
              src="https://i.postimg.cc/7Z7yy9b4/5556468.png" 
              alt="Tawam"
              width={350}
              height={350}
              className="rounded-lg shadow-lg ml-44"
            />

            {/* Background Gradient */}
            {/* <div
              className="absolute inset-0 bg-green-500 rounded-lg blur-2xl opacity-20"
            ></div> */}

            {/* Dotted Pattern */}
            <div className="absolute -top-24 -right-5 w-44 h-24 grid grid-cols-6 gap-2">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} className="w-2 h-2 bg-green-500 rounded-full"></span>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
