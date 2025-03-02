import React from "react";

const Education = () => {
  return (
    <div className="w-full md:w-1/2">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        My Education
      </h2>
      <div className="space-y-6">
        {/* Education Item 1 */}
        <div className="p-5 bg-green-100 dark:bg-green-900 rounded-lg border-l-4 border-green-500">
          <p className="text-sm text-green-600 dark:text-green-300">Sep 2017 - Dec 2021</p>
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
            Bachelor of Computer Science & Information Systems
          </h3>
          <p className="text-gray-600 dark:text-gray-400">University of Chicago</p>
        </div>

        {/* Education Item 2 */}
        <div className="p-5 bg-green-100 dark:bg-green-900 rounded-lg border-l-4 border-green-500">
          <p className="text-sm text-green-600 dark:text-green-300">Aug 2022 - Jan 2023</p>
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
            Structural Programming Language
          </h3>
          <p className="text-gray-600 dark:text-gray-400">University of California</p>
        </div>

        {/* Education Item 3 */}
        <div className="p-5 bg-green-100 dark:bg-green-900 rounded-lg border-l-4 border-green-500">
          <p className="text-sm text-green-600 dark:text-green-300">Jan 2023 - Running</p>
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
            Digital Logic
          </h3>
          <p className="text-gray-600 dark:text-gray-400">University of Oxford</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
