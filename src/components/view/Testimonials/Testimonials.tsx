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
    image: "https://i.postimg.cc/gjXKLThS/premium-photo-1689977927774-401b12d137d6.jpg",
  },
  {
    name: "John Doe",
    role: "CTO",
    company: "TechFlow",
    companyName: "Alizer",
    feedback:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
    image: "https://i.postimg.cc/gjXKLThS/premium-photo-1689977927774-401b12d137d6.jpg",
  },
  {
    name: "Jane Smith",
    role: "Manager",
    company: "InnovateX",
    companyName: "Alizer",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: "https://i.postimg.cc/gjXKLThS/premium-photo-1689977927774-401b12d137d6.jpg",
  },
  {
    name: "Alice Johnson",
    role: "Designer",
    company: "CreativeStudio",
    companyName: "Alizer",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://i.postimg.cc/gjXKLThS/premium-photo-1689977927774-401b12d137d6.jpg",
  },
  {
    name: "Robert Brown",
    role: "Founder",
    company: "Capsule",
    companyName: "Alizer",
    feedback: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    image: "https://i.postimg.cc/gjXKLThS/premium-photo-1689977927774-401b12d137d6.jpg",
  },
  {
    name: "Emily Wilson",
    role: "CEO",
    company: "TA",
    companyName: "Alizer",
    feedback: "Excepteur sint occaecat cupidatat non proident.",
    image: "https://i.postimg.cc/gjXKLThS/premium-photo-1689977927774-401b12d137d6.jpg",
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
          <h5 className="text-green-500 text-base font-semibold">
            Our Testimonials
          </h5>
          <h2 className="text-5xl font-bold dark:text-white">
            What Clients Say?
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden w-full">
          {/* Slides Wrapper */}
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${(currentIndex / testimonialsPerPage) * 100}%)`,
            }}
          >
            {/* Each Group of Testimonials */}
            {Array.from({ length: totalSlides }).map((_, groupIndex) => (
              <div key={groupIndex} className="flex w-full flex-shrink-0">
                {testimonialsData
                  .slice(
                    groupIndex * testimonialsPerPage,
                    (groupIndex + 1) * testimonialsPerPage
                  )
                  .map((testimonial, index) => (
                    <div key={index} className="w-1/3 px-2">
                      <div className="p-6 rounded-2xl border border-green-500 transition-all min-h-[280px] flex flex-col justify-between hover:bg-green-500">
                        <div>
                          <h3 className="text-green-700 font-semibold flex items-center gap-2 hover:text-gray-700">
                            {testimonial.company}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 hover:dark:text-gray-600 text-sm  mt-2 ">
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
                              <h4 className="font-semibold text-gray-700 hover:text-gray-700">
                                {testimonial.name}
                              </h4>
                              <p className="text-sm text-gray-500 hover:text-gray-700">
                                {testimonial.role},{" "}
                                <span className="text-green-700 hover:text-gray-700">
                                  {testimonial.companyName}
                                </span>
                              </p>
                            </div>
                          </div>
                          <FaQuoteRight className="text-green-700 text-2xl hover:text-gray-700" />
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
