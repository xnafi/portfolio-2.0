import AnimatedNumber from "@/utils/AnimatedNumber/AnimatedNumber";
import React from "react";

const ShowCase: React.FC = () => {
  return (
    <div className="py-10 px-4 bg-gradient-to-r from-green-50 to-gray-100 dark:from-black dark:to-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {/* Item 1 */}
        <div className="border-b md:border-b-0 md:border-r border-dark last:border-none pb-4 md:pb-0 text-center md:text-left">
          <AnimatedNumber
            to={500}
            duration={2}
            span="%+"
            className="text-4xl sm:text-5xl font-bold text-green-500"
          />
          <p className="para-text mt-2">Resources 3+ years experienced.</p>
        </div>

        {/* Item 2 */}
        <div className="border-b md:border-b-0 md:border-r border-dark last:border-none pb-4 md:pb-0 text-center md:text-left">
          <AnimatedNumber
            to={85}
            duration={2}
            span="%+"
            className="text-4xl sm:text-5xl font-bold text-green-500"
          />
          <p className="para-text mt-2">Client retention rate</p>
        </div>

        {/* Item 3 */}
        <div className="border-b md:border-b-0 md:border-r border-dark last:border-none pb-4 md:pb-0 text-center md:text-left">
          <AnimatedNumber
            to={50}
            duration={2}
            span="+"
            className="text-4xl sm:text-5xl font-bold text-green-500"
          />
          <p className="para-text mt-2">Expert Team Member</p>
        </div>

        {/* Item 4 */}
        <div className="border-b md:border-b-0 md:border-r border-dark last:border-none pb-4 md:pb-0 text-center md:text-left">
          <AnimatedNumber
            to={300}
            duration={2}
            span="+"
            className="text-4xl sm:text-5xl font-bold text-green-500"
          />
          <p className="para-text mt-2">Top Talents Projects</p>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
