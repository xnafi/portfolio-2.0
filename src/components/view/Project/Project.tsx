"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import SmoothScroll from "@/components/re-ui/smoothScroll";

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
    title: "Logo Design",
    category: "Design",
    image:
      "https://i.postimg.cc/YC45gMYj/home-care-service-app-design-tubik.jpg",
  },
  {
    id: 3,
    title: "Brand Identity",
    category: "Branding",
    image:
      "https://i.postimg.cc/YC45gMYj/home-care-service-app-design-tubik.jpg",
  },
  {
    id: 4,
    title: "Mobile App Design",
    category: "UX/UI",
    image:
      "https://i.postimg.cc/YC45gMYj/home-care-service-app-design-tubik.jpg",
  },
  {
    id: 5,
    title: "Brand Strategy",
    category: "Branding",
    image:
      "https://i.postimg.cc/YC45gMYj/home-care-service-app-design-tubik.jpg",
  },
  {
    id: 6,
    title: "Web Design",
    category: "Design",
    image:
      "https://i.postimg.cc/YC45gMYj/home-care-service-app-design-tubik.jpg",
  },
];

const Project: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All Design");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeCategory === "All Design"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <SmoothScroll id="project">
      {" "}
      <section
        id="Project"
        className="py-10 px-4 sm:px-8 md:px-16 transition-all"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Header */}
          <p className="text-green-500 font-medium text-sm sm:text-base">
            Best Of Our Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mt-2">
            Latest Project
          </h2>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setShowAll(false);
                }}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:bg-green-500 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {visibleProjects.map((project) => (
              <div key={project.id} className="relative group">
                <div className="relative w-full h-52 sm:h-60 md:h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg flex justify-between items-center mt-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 text-start">
                      APP CASE STUDY
                    </p>
                  </div>
                  <div className="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center bg-green-500 text-white rounded-full">
                    <GoArrowUpRight />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View Portfolio Button */}
          {filteredProjects.length > 3 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-8 px-5 sm:px-6 py-3 bg-green-500 text-white rounded-full text-sm sm:text-lg font-medium hover:bg-green-600 transition-all"
            >
              {showAll ? "View Less" : "View All Portfolio"}
            </button>
          )}
        </div>
      </section>
    </SmoothScroll>
  );
};

export default Project;
