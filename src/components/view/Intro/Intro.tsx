import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const Intro = () => {
  return (
    <>
      <div className="py-10 px-4 sm:px-8 md:px-16 flex items-center justify-center mt-8 sm:mt-12 md:mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100">
              HELLO THIS IS
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold text-green-500 mt-2">
              Tawam
            </h2>
            <div className="mt-4 sm:mt-6 text-gray-700 dark:text-gray-300 space-y-4 sm:space-y-5">
              <p className="flex items-center gap-2 text-sm para-text sm:text-base md:text-lg">
                <GoArrowUpRight className="text-green-500 text-3xl sm:text-4xl" />{" "}
                I am working as a freelancer right now. I could create graphic
                design projects linked to all companies.
              </p>
              <p className="flex items-center gap-2 text-sm para-text sm:text-base md:text-lg">
                <GoArrowUpRight className="text-green-500 text-5xl sm:text-6xl" />{" "}
                With my graphic design skills, I can help you create awesome
                designs for your firm or business. I am constantly trying to
                improve my abilities to support various businesses.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex-1 flex flex-col items-center md:flex-row md:justify-end">
            <div className="relative w-[250px] sm:w-[280px] md:w-[350px] flex flex-col items-center">
              {/* Image */}
              <Image
                src="https://i.postimg.cc/7Z7yy9b4/5556468.png"
                alt="Tawam"
                width={350}
                height={350}
                className="rounded-lg shadow-lg w-full object-cover"
              />
              {/* Dotted Pattern - Now Appears Below Image on Mobile */}
              <div className="grid grid-cols-6 gap-2 mt-4 md:absolute md:mt-0 md:-top-24 md:-right-5 w-28 sm:w-36 md:w-44 h-16 sm:h-20 md:h-24">
                {Array.from({ length: 30 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full"
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
