/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { FaGithub, FaDribbble } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import SmoothScroll from "@/components/re-ui/smoothScroll";
import SmoothLink from "@/components/re-ui/smoothLink";

const Banner: React.FC = () => {
  return (
    <SmoothScroll id="banner">
      <section className="flex items-center justify-center px-6 pt-24 lg:pt-32 lg:h-screen">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 lg:gap-16 mx-auto">
          {/* Left - Profile Image & Social Links */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <div className="relative">
              {/* Profile Image */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-64 md:w-80 md:h-72 lg:w-96 lg:h-80">
                <Image
                  src="https://i.postimg.cc/7Z7yy9b4/5556468.png"
                  alt="Profile"
                  fill
                  className="object-cover rounded-xl border-4 border-green-400 shadow-lg"
                  priority
                />
              </div>
              {/* Overlay Box */}
              <div className="absolute inset-0 border-2 border-green-400 rounded-xl transform translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4"></div>
            </div>

            {/* Social Links - Column on mobile, Row on larger screens */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10">
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 btn-dark rounded-lg"
              >
                <FaGithub className="text-lg sm:text-xl" /> GitHub
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 btn-dark rounded-lg"
              >
                <FaDribbble className="text-lg sm:text-xl" /> Dribbble
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 btn-dark rounded-lg"
              >
                <IoDocumentText className="text-lg sm:text-xl" /> CV
              </a>
            </div>
          </div>

          {/* Right - Text Content & Experience Box */}
          <div className="flex-1 text-center md:text-left flex flex-col justify-between h-full">
            <div>
              <p className="text-xs sm:text-sm text-green-400">
                Mail: tawam@gmail.com
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mt-2">
                Hello, I'm Alexa, a <br />
                UI/UX <span className="text-green-400">Designer.</span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base para-text mt-4">
                I'm a passionate UI/UX designer with a mission to create
                delightful and intuitive digital experiences. With a strong
                foundation in design principles and a keen eye for detail, I
                specialize in translating complex ideas.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6">
                <SmoothLink
                  to="contact"
                  duration={1000}
                  link="Hire Me"
                  className="bg-black text-white py-2 px-10 text-center"
                />

                <button className="btn-dark px-5 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md">
                  VIEW WORK
                </button>
              </div>
            </div>

            {/* Experience Box */}
            <div className="flex justify-center md:justify-end mt-8 sm:mt-10">
              <div className="btn-dark px-4 py-2 sm:px-5 sm:py-3 rounded-lg shadow-md text-center w-32 sm:w-40">
                <p className="text-xs sm:text-sm">Years of Experience</p>
                <p className="text-2xl sm:text-3xl font-bold">3+</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SmoothScroll>
  );
};

export default Banner;
