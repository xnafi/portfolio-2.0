"use client";

import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import SmoothScroll from "@/components/re-ui/SmoothScroll";
import SmoothLink from "@/components/re-ui/SmoothLink";

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
    <SmoothScroll id="services">
      <div id="AwesomeService" className="py-10 px-4 sm:px-8 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
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
            {/* services button */}

            <div className="w-full md:w-full mt-5">
              <SmoothLink
                to="services"
                duration={1000}
                variant="primary"
                name="ALL SERVICE"
              />
            </div>

            {/* Dotted Pattern Below Button */}
            <div className="mt-10 sm:mt-16 w-36 sm:w-40 h-16 sm:h-20 grid grid-cols-6 gap-2 mx-auto md:mx-0">
              {Array.from({ length: 30 }).map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 bg-green-500 rounded-full"
                ></span>
              ))}
            </div>
          </div>

          {/* Right Section (Service Cards) */}
          <div className="w-full md:w-1/2 space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-lg flex justify-between items-center backdrop-blur-md lg:font-semibold isolation-auto border before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:bg-blue-400 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 z-10 px-6 py-4 overflow-hidden rounded-md group"
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
    </SmoothScroll>
  );
};

export default AwesomeService;
