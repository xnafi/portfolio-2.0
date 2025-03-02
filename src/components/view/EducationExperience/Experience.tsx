import React from "react";

const Experience = () => {
  return (
    <div className="w-full md:w-1/2 mb-20 pb-2">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        My Experience
      </h2>
      <div className="space-y-6">
        {/* Experience Item 1 */}
        <div className="p-5 bg-green-100 dark:bg-green-900 rounded-lg border-l-4 border-green-500">
          <p className="text-sm text-green-600 dark:text-green-300">Dec 2023 - Current</p>
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
            Web Designer Wordpress - Creativemela
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Design and development of 30+ websites.
          </p>
          <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
            Remote
          </span>
        </div>

        {/* Experience Item 2 */}
        <div className="p-5 bg-green-100 dark:bg-green-900 rounded-lg border-l-4 border-green-500">
          <p className="text-sm text-green-600 dark:text-green-300">Aug 2022 - Jan 2023</p>
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
            Webflow Developer & Co-Founder
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Developed and designed projects using HTML, CSS, JavaScript, and Figma.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
