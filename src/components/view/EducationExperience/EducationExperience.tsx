import React from "react";
import Education from "./Education";
import Experience from "./Experience";


const EducationExperience = () => {
  return (
    <div className=" py-10 px-4 md:px-16">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 ">
      <Education />
      <Experience />
    </div>
    </div>
  );
};

export default EducationExperience;
