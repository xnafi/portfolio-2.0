"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

// Import your logo images here
const logos = [
  { srcLight: "https://i.postimg.cc/7Z7yy9b4/5556468.png", srcDark: "https://i.postimg.cc/7Z7yy9b4/5556468.png", alt: "Bellhop" },
  { srcLight: "/logos/chickfila-light.png", srcDark: "/logos/chickfila-dark.png", alt: "Chick-fil-A" },
  { srcLight: "/logos/silvagni-light.png", srcDark: "/logos/silvagni-dark.png", alt: "Silvagni" },
  { srcLight: "/logos/channels-light.png", srcDark: "/logos/channels-dark.png", alt: "Channels" },
  { srcLight: "/logos/estudio-light.png", srcDark: "/logos/estudio-dark.png", alt: "E-Studio" },
];

const LogoSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="py-10 px-4 bg-gradient-to-r from-green-50 to-gray-100 dark:from-black dark:to-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 text-left ">
        {logos.map((logo, index) => (
          <div key={index} className="relative w-32 h-12 md:w-40 md:h-16">
            <Image
              src={theme === "dark" ? logo.srcDark : logo.srcLight}
              alt={logo.alt}
              layout="fill"
              objectFit="contain"
              className="transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoSection;
