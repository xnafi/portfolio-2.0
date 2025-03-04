import React from "react";

const Education = () => {
  return (
    <div className="w-full md:w-1/2">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 border border-green-500 dark:border-green-500 p-2 inline-block">
        My Education
      </h2>
      <div className="relative border-l-2 border-green-500 pl-6 space-y-6">
        {/* Education Item 1 */}
        <div className="relative">
          <div className="absolute -left-8 top-14 w-4 h-4 bg-green-500 rounded-full"></div>
          <div className="p-5 bg-green-100 dark:bg-green-900 rounded-lg shadow-md">
            <p className="text-sm text-green-600 dark:text-green-300">
              Sep 2017 - Dec 2021
            </p>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
              Bachelor of Computer Science & Information Systems
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              University of Chicago
            </p>
          </div>
        </div>

        {/* Education Item 2 */}
        <div className="relative">
          <div className="absolute -left-8 top-14 w-4 h-4 bg-green-500 rounded-full"></div>
          <div className="p-5 bg-green-100 dark:bg-green-900 rounded-lg shadow-md">
            <p className="text-sm text-green-600 dark:text-green-300">
              Aug 2022 - Jan 2023
            </p>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
              Structural Programming Language
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              University of California
            </p>
          </div>
        </div>

        {/* Education Item 3 */}
        <div className="relative">
          <div className="absolute -left-8 top-14 w-4 h-4 bg-green-500 rounded-full"></div>
          <div className="p-5 bg-green-100 dark:bg-green-900 rounded-lg shadow-md">
            <p className="text-sm text-green-600 dark:text-green-300">
              Jan 2023 - Running
            </p>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
              Digital Logic
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              University of Oxford
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
