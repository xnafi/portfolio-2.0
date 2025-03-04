"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

// Logo Images
const logos = [
  { srcLight: "https://i.postimg.cc/XJQ5RBYX/Chick-fil-A-Logo-1985.png", srcDark: "https://i.postimg.cc/XJQ5RBYX/Chick-fil-A-Logo-1985.png", alt: "Bellhop" },
  { srcLight: "https://i.postimg.cc/yYQHD1k9/Chick-fil-A-logo.png", srcDark: "https://i.postimg.cc/yYQHD1k9/Chick-fil-A-logo.png", alt: "Chick-fil-A" },
  { srcLight: "https://i.postimg.cc/yYQHD1k9/Chick-fil-A-logo.png", srcDark: "https://i.postimg.cc/yYQHD1k9/Chick-fil-A-logo.png", alt: "Silvagni" },
  { srcLight: "https://i.postimg.cc/yYQHD1k9/Chick-fil-A-logo.png", srcDark: "https://i.postimg.cc/yYQHD1k9/Chick-fil-A-logo.png", alt: "Channels" },
  { srcLight: "https://i.postimg.cc/XJQ5RBYX/Chick-fil-A-Logo-1985.png", srcDark: "https://i.postimg.cc/XJQ5RBYX/Chick-fil-A-Logo-1985.png", alt: "E-Studio" },
];

const LogoSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="py-10 px-4 bg-gradient-to-r from-green-50 to-gray-100 dark:from-black dark:to-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 place-items-center">
        {logos.map((logo, index) => (
          <div key={index} className="relative w-28 sm:w-32 md:w-40 h-12 sm:h-14 md:h-16 flex items-center justify-center">
            <Image
              src={theme === "dark" ? logo.srcDark : logo.srcLight}
              alt={logo.alt}
              layout="intrinsic"
              width={160}
              height={64}
              className="transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoSection;
