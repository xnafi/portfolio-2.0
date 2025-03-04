import React from "react";

const Experience = () => {
  return (
    <div className="w-full md:w-1/2 mb-20 pb-2">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 border border-green-500 dark:border-green-500 p-2 inline-block">
        My Experience
      </h2>
      <div className="relative border-l-2 border-green-500 pl-6 space-y-6">
        {/* Experience Item 1 */}
        <div className="relative">
          <div className="absolute -left-8 top-14 w-4 h-4 bg-green-500 rounded-full"></div>
          <div className="p-5 bg-green-100 dark:bg-green-900 rounded-lg shadow-md">
            <p className="text-sm text-green-600 dark:text-green-300">
              Dec 2023 - Current
            </p>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
              Web Designer Wordpress - Creativemela
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-3">
              Design and development of 30+ websites.
            </p>
            <span className="text-xs px-2 py-1 bg-green-600 text-white rounded mt-2 inline-block">
              Remote
            </span>
          </div>
        </div>

        {/* Experience Item 2 */}
        <div className="relative">
          <div className="absolute -left-8 top-14 w-4 h-4 bg-green-500 rounded-full"></div>
          <div className="p-5 bg-green-100 dark:bg-green-900 rounded-lg shadow-md">
            <p className="text-sm text-green-600 dark:text-green-300">
              Aug 2022 - Jan 2023
            </p>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
              Webflow Developer & Co-Founder
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-3">
              Developed and designed projects using HTML, CSS, JavaScript, and Figma.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
