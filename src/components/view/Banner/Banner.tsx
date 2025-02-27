import React from "react";
import { FaGithub, FaDribbble } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

const Banner: React.FC = () => {
  return (
    <section className="flex items-center justify-center div-dark px-6 ">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 px-4 py-4 mx-auto relative">
        
        {/* Left - Profile Image & Social Links */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="relative">
            {/* Profile Image */}
            <img
              src="https://i.postimg.cc/7Z7yy9b4/5556468.png"
              alt="Profile"
              className="w-72 h-96 object-cover rounded-xl border-4 border-green-400 shadow-lg"
            />
            {/* Overlay Box */}
            <div className="absolute inset-0 border-2 border-green-400 rounded-xl transform translate-x-4 translate-y-4"></div>
          </div>

          {/* Social Links (Below the Image) */}
          <div className="flex gap-4 mt-12">
            <a href="#" className="flex items-center gap-2 px-5 py-2 btn-dark rounded-lg ">
              <FaGithub className="text-xl" /> GitHub
            </a>
            <a href="#" className="flex items-center gap-2 px-5 py-2 rounded-lg btn-dark ">
              <FaDribbble className="text-xl" /> Dribbble
            </a>
            <a href="#" className="flex items-center gap-2 px-5 py-2 btn-dark rounded-lg ">
              <IoDocumentText className="text-xl" /> CV
            </a>
          </div>
        </div>

        {/* Right - Text Content & Experience Box */}
        <div className="flex-1 text-center md:text-left flex flex-col justify-between h-full ">
          <div>
            <p className="text-sm text-green-400">Mail: tawam@gmail.com</p>
            <h1 className="text-5xl font-medium leading-tight mt-2">
              Hello, I'm Alexa, a <br />
              UI/UX <span className="text-green-400">Designer.</span>
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              I'm a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail I specialised in translating complex ideas.
            </p>

            {/* Buttons */}
            <div className="flex gap-6 mt-6">
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700">
                HIRE ME!
              </button>
              <button className="btn-dark  px-6 py-3 rounded-lg shadow-md ">
                VIEW WORK
              </button>
            </div>
          </div>

          {/* Experience Box (Right Aligned) */}
          <div className="flex justify-end mt-10 ">
            <div className="bg-green-500 text-white px-5 py-3 rounded-lg shadow-md text-center w-40">
              <p className="text-sm">Years of Experience</p>
              <p className="text-3xl font-bold">3+</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Banner;
