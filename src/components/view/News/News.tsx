"use client";

import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "Portrait of adult male working from home at night",
    author: "Towam",
    category: "Graphic",
    date: "09 March 2024",
    image: "https://i.postimg.cc/VsXNFFF2/news1.jpg",
  },
  {
    id: 2,
    title: "Portrait of adult male working from home at night",
    author: "Towam",
    category: "Graphic",
    date: "09 March 2024",
    image: "https://i.postimg.cc/jdKS3Jg2/worker-reading-news-with-tablet-1162-83.avif",
  },
];

const News = () => {
  return (
    <section className="py-10 px-4 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
        
        {/* Left: Text Content */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-black dark:text-white leading-tight">
            My News & <br /> Latest Blogs
          </h2>
          <p className="para-text mt-4 max-w-md mx-auto lg:mx-0">
            Eget malesuada tortor ut sed. Tincidunt viverra nisl vehicula vestibulum.
            Ut blandit fermentum, nulla neque mi convallis quis interdum sagittis.
          </p>
          <button className="mt-6 px-6 py-2 btn-dark rounded-lg font-semibold">
            ALL BLOGS
          </button>

          {/* Dotted Pattern */}
          <div className="w-44 h-24 grid grid-cols-6 gap-2 pt-10 lg:pt-32 mx-auto lg:mx-0">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} className="w-2 h-2 bg-green-500 rounded-full"></span>
            ))}
          </div>
        </div>

        {/* Right: Blog Cards */}
        <div className="lg:w-2/3 flex flex-col md:grid md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group flex-1 rounded-lg overflow-hidden transition-all duration-300"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-[220px] sm:h-[250px] md:h-[270px] lg:h-[300px] object-cover group-hover:opacity-80"
              />
              <div className="p-5">
                <p className="para-text">
                  by <span className="text-green-500">{blog.author}</span> | {blog.category} | 🗓 {blog.date}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-black dark:text-white">
                  {blog.title}
                </h3>
                <button className="mt-3 flex items-center text-green-500">
                  Read More <FaArrowRight className="ml-2 text-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default News;
