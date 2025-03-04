"use client";

import React, { useState } from "react";

import { GoArrowUpRight } from "react-icons/go";

const categories = ["All Design", "UX/UI", "Branding", "Design"];

const projects = [
  {
    id: 1,
    title: "Dashboard Design",
    category: "UX/UI",
    image:
      "https://i.postimg.cc/YC45gMYj/home-care-service-app-design-tubik.jpg",
  },
  {
    id: 2,
    title: "Dashboard Design",
    category: "Design",
    image:
      "https://i.postimg.cc/YC45gMYj/home-care-service-app-design-tubik.jpg",
  },
  {
    id: 3,
    title: "Dashboard Design",
    category: "Branding",
    image:
      "https://i.postimg.cc/YC45gMYj/home-care-service-app-design-tubik.jpg",
  },
];

const Project: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("UX/UI");

  return (
    <section id="Project" className="py-10 px-4 md:px-16 transition-all">
      <div className="max-w-6xl mx-auto  text-center">
        <p className="text-green-500 font-medium">Best Of Our Works</p>
        <h2 className="text-4xl font-bold text-black dark:text-white mt-2">
          Latest Project
        </h2>

        {/* Category Filters */}
        <div className="flex justify-center gap-3 mt-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all 
      ${
        activeCategory === category
          ? "bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:bg-green-500 dark:hover:bg-green-500 hover:text-white"
          : "bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:bg-green-500 dark:hover:bg-green-500 hover:text-white"
      }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {projects.map((project) => (
            <div key={project.id} className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg group-hover:scale-105 transition-transform"
              />
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg flex justify-between items-center  mt-4">
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-start text-gray-500">
                    APP CASE STUDY
                  </p>
                </div>
                <div className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full">
                  <GoArrowUpRight />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Portfolio Button */}
        <button className="mt-8 px-6 py-3 bg-green-500 text-white rounded-full text-lg font-medium hover:bg-green-600 transition-all">
          View All Portfolio
        </button>
      </div>
    </section>
  );
};

export default Project;
