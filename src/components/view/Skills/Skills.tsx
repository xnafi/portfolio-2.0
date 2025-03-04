"use client";
import React from "react";
import { FaHtml5, FaReact, FaFigma } from "react-icons/fa";
import { SiPhp } from "react-icons/si";

const skillsData = [
  {
    icon: <FaHtml5 size={40} />,
    title: "Web Development",
    percentage: "95%",
    items: ["HTML", "CSS", "JavaScript", "Tailwind"],
  },
  {
    icon: <FaReact size={40} />,
    title: "Frameworks",
    percentage: "85%",
    items: ["React", "Astro"],
  },
  {
    icon: <FaFigma size={40} />,
    title: "Design Programs",
    percentage: "75%",
    items: ["Figma", "Photoshop", "Adobe XD"],
  },
  {
    icon: <SiPhp size={40} />,
    title: "Programming",
    percentage: "80%",
    items: ["PHP", "Java", "MySQL"],
  },
];

const Skills = () => {
  return (
    <section id="Skills" className="py-10 px-4 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8">
          {/* Left Side - Centered on small screens, 40% width on large screens */}
          <div className="w-full md:w-2/5 space-y-6 text-center md:text-left mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
              My Awesome <br /> Skills
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base max-w-md mx-auto md:mx-0">
              Eget malesuada tortor ut sed. Tincidunt viverra nisl vehicula
              vestibulum. Ut blandit fermentum, nulla neque mi convallis quis.
            </p>
            {/* Dotted Pattern */}
            <div className="w-44 h-24 grid grid-cols-6 gap-2 pt-12 md:pt-12 mx-auto md:mx-0">
              {Array.from({ length: 30 }).map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 bg-green-500 rounded-full"
                ></span>
              ))}
            </div>
          </div>

          {/* Right Side - 60% width on large screens */}
          <div className="w-full md:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-4  rounded-lg p-4 md:p-6 hover:scale-105 transition-transform"
              >
                <div>
                  <div className="border border-green-500 p-2 rounded-full text-green-500">
                    {skill.icon}
                  </div>
                  <p className="text-green-500 font-semibold mt-2 ml-3">
                    {skill.percentage}
                  </p>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-800 dark:text-gray-100">
                    {skill.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 dark:bg-gray-700 text-xs md:text-sm px-2 py-1 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
