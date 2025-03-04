"use client";
import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaFigma, FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiAdobephotoshop,
  SiPhp,
  SiMysql,
  SiAstro,
} from "react-icons/si";

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
    <section id="Skills" className="py-10 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              My Awesome <br /> Skills
            </h2>
            <p className="para-text mt-4 max-w-md">
              Eget malesuada tortor ut sed. Tincidunt viverra nisl vehicula
              vestibulum. Ut blandit fermentum, nulla neque mi convallis quis.
              Ut blandit fermentum, nulla neque mi convallis quis.
            </p>
            {/* Dotted Pattern */}
            <div className="w-44 h-24 grid grid-cols-6 gap-2 pt-36">
              {Array.from({ length: 30 }).map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 bg-green-500 rounded-full"
                ></span>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="grid md:grid-cols-2 gap-4">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-4  rounded-lg p-6  hover:scale-105 transition-transform"
              >
                <div>
                  <div className="border border-green-500 p-2 rounded-full text-green-500">
                    {skill.icon}
                  </div>
                  <p className="text-green-500 font-semibold ml-4 mt-4">
                    {skill.percentage}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                    {skill.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 dark:bg-gray-700 text-sm px-2 py-1 rounded"
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
