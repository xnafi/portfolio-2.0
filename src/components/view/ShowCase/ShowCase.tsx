import React from "react";

const ShowCase: React.FC = () => {
  return (
    <div className="py-10 px-4 bg-gradient-to-r from-green-50 to-gray-100 dark:from-black dark:to-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-left ">
        {/* Item 1 */}
        <div className="border-r border-dark last:border-r-0">
          <h2 className="text-5xl font-bold text-green-500">90%</h2>
          <p className="para-text mt-2">
            Resources 3+ years experienced.
          </p>
        </div>

        {/* Item 2 */}
        <div className="border-r border-dark last:border-r-0">
          <h2 className="text-5xl font-bold text-green-500">85%+</h2>
          <p className="para-text mt-2">
            Client retention rate
          </p>
        </div>

        {/* Item 3 */}
        <div className="border-r border-dark last:border-r-0">
          <h2 className="text-5xl font-bold text-green-500">50+</h2>
          <p className="para-text mt-2">Expert Team Member</p>
        </div>

        {/* Item 4 */}
        <div>
          <h2 className="text-4xl font-bold text-green-500">300+</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Top Talents Projects
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
