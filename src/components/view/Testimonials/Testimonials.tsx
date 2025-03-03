"use client";

import React, { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

const testimonialsData = [
  {
    name: "Thumamah Tawam",
    role: "CEO",
    company: "Sisyphus",
    companyName: "Alizer",
    feedback:
      "Phasellus eros lectus, ultricies ut nisl in, sodales rhoncus. Maecenas sit amet elit at urna sagittis gravida.",
    image: "/images/user1.jpg",
  },
  {
    name: "John Doe",
    role: "CTO",
    company: "TechFlow",
    companyName: "Alizer",
    feedback:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
    image: "/images/user2.jpg",
  },
  {
    name: "Jane Smith",
    role: "Manager",
    company: "InnovateX",
    companyName: "Alizer",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: "/images/user3.jpg",
  },
  {
    name: "Alice Johnson",
    role: "Designer",
    company: "CreativeStudio",
    companyName: "Alizer",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/user4.jpg",
  },
  {
    name: "Robert Brown",
    role: "Founder",
    company: "Capsule",
    companyName: "Alizer",
    feedback: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    image: "/images/user5.jpg",
  },
  {
    name: "Emily Wilson",
    role: "CEO",
    company: "TA",
    companyName: "Alizer",
    feedback: "Excepteur sint occaecat cupidatat non proident.",
    image: "/images/user6.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalSlides = Math.ceil(testimonialsData.length / testimonialsPerPage);

  // Navigate to a specific group of 3
  const handleDotClick = (index: number) => {
    setCurrentIndex(index * testimonialsPerPage);
  };

  return (
    <section className="py-10 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h5 className="text-green-500 text-base font-semibold">Our Testimonials</h5>
        <h2 className="text-4xl font-bold dark:text-white">What Clients Say?</h2>
      </div>

      {/* Slider Container */}
      <div className="relative overflow-hidden w-full ">
        {/* Slides Wrapper */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${(currentIndex / testimonialsPerPage) * 100}%)` }}
        >
          {/* Each Group of Testimonials */}
          {Array.from({ length: totalSlides }).map((_, groupIndex) => (
            <div key={groupIndex} className="flex w-full flex-shrink-0">
              {testimonialsData
                .slice(groupIndex * testimonialsPerPage, (groupIndex + 1) * testimonialsPerPage)
                .map((testimonial, index) => (
                  <div key={index} className="w-1/3 px-2">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 transition-all min-h-[280px] flex flex-col justify-between">
                      <div>
                        <h3 className="text-green-500 font-semibold flex items-center gap-2">
                          {testimonial.company}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                          {testimonial.feedback}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                          <div>
                            <h4 className="font-semibold dark:text-white">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">
                              {testimonial.role},{" "}
                              <span className="text-green-500">{testimonial.companyName}</span>
                            </p>
                          </div>
                        </div>
                        <FaQuoteRight className="text-green-500 text-2xl" />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
        

        {/* Dots / Indicators */}
        <div className="flex justify-center items-center mt-6">
          {Array.from({ length: totalSlides }).map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => handleDotClick(dotIndex)}
              className={`h-3 w-3 rounded-full mx-1 transition-colors ${
                currentIndex / testimonialsPerPage === dotIndex
                  ? "bg-green-500"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
