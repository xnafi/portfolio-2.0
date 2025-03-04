"use client";

import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const services = [
  {
    title: "Website Design",
    projects: "80+ Projects",
    image:
      "https://i.postimg.cc/0ywscHJr/web-design-technology-browsing-programming-concept.jpg",
  },
  {
    title: "Mobile App Design",
    projects: "50+ Projects",
    image: "https://i.postimg.cc/QMJvzLNN/mobile-app-design.png",
  },
  {
    title: "WireFrame Design",
    projects: "30+ Projects",
    image: "https://i.postimg.cc/nrC5MC4M/Wire-Frame-Design.jpg",
  },
];

const AwesomeService = () => {
  return (
    <div id="AwesomeService" className="py-10 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Left Section (Text) */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white leading-tight">
            My Awesome <br className="hidden sm:block" /> Service
          </h2>
          <p className="para-text mt-3 sm:mt-4 text-sm sm:text-base max-w-xs sm:max-w-md mx-auto md:mx-0">
            Eget malesuada tortor ut sed. Tincidunt viverra nisl vehicula
            vestibulum. Ut blandit fermentum, nulla neque mi convallis quis
            interdum sagittis.
          </p>
          <button className="mt-5 sm:mt-6 px-5 sm:px-6 py-2 btn-dark rounded-lg font-semibold">
            ALL SERVICE
          </button>

          {/* Dotted Pattern Below Button */}
          <div className="mt-10 sm:mt-16 w-36 sm:w-40 h-16 sm:h-20 grid grid-cols-6 gap-2 mx-auto md:mx-0">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} className="w-2 h-2 bg-green-500 rounded-full"></span>
            ))}
          </div>
        </div>

        {/* Right Section (Service Cards) */}
        <div className="w-full md:w-1/2 space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 sm:p-5 rounded-lg border border-green-300 dark:border-green-700 transition-all"
            >
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-black dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-green-600 dark:text-green-400 text-xs sm:text-sm md:text-base">
                    {service.projects}
                  </p>
                </div>
              </div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-xl sm:text-2xl flex items-center justify-center rounded-full bg-green-200 dark:bg-green-600 text-green-700 dark:text-green-200">
                <GoArrowUpRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwesomeService;
