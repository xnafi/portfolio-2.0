import React from "react";
// import { FaArrowRight } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const services = [
  {
    title: "Website Design",
    projects: "80+ Project",
    image: "https://i.postimg.cc/0ywscHJr/web-design-technology-browsing-programming-concept.jpg",
  },
  {
    title: "Mobile App Design",
    projects: "50+ Project",
    image: "https://i.postimg.cc/QMJvzLNN/mobile-app-design.png",
  },
  {
    title: "WireFrame Design",
    projects: "30+ Project",
    image: "https://i.postimg.cc/nrC5MC4M/Wire-Frame-Design.jpg",
  },
];

const AwesomeService = () => {
  return (
    <div id="AwesomeService" className="relative  py-10 px-4 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between">
        {/* Left Side - Text Section */}
        <div className="md:w-1/2 relative">
          <h2 className="text-4xl font-bold text-black dark:text-white">
            My Awesome <br /> Service
          </h2>
          <p className="para-text mt-4 max-w-md">
            Eget malesuada tortor ut sed. Tincidunt viverra nisl vehicula
            vestibulum. Ut blandit fermentum, nulla neque mi convallis quis
            interdum sagittis. nulla neque mi convallis quis
            interdum sagittis.
          </p>
          <button className="mt-6 px-6 py-2 btn-dark rounded-lg font-semibold">
            ALL SERVICE
          </button>

          {/* Dotted Pattern Below Button */}
          <div className="mt-16 w-44 h-24 grid grid-cols-6 gap-2">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} className="w-2 h-2 bg-green-500 rounded-full"></span>
            ))}
          </div>
        </div>

        {/* Right Side - Service Cards */}
        <div className="md:w-1/2 mt-10 md:mt-0 space-y-9">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-5 rounded-lg card-dark border transition-all ${
                index === 1
                  ? "bg-transparent border-green-200 dark:border-green-800"
                  : "bg-transparent border-green-200 dark:border-green-800"
              }`}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-green-600 dark:text-green-400">
                    {service.projects}
                  </p>
                </div>
              </div>
              <div
                className={`w-10 h-10 text-3xl flex items-center justify-center rounded-full transition-all ${
                  index === 1
                    ? "bg-green-200 dark:bg-green-600 text-green-700 dark:text-green-200"
                    : "bg-green-200 dark:bg-green-600 text-green-700 dark:text-green-200"
                }`}
              >
                <GoArrowUpRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwesomeService;
