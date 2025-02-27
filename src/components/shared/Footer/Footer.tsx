"use client";

import React from "react";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="w-full py-4 text-center text-sm transition-all div-dark">
      <p className="text-gray-500 dark:text-gray-400">
        © 2024{" "}
        <a
          href="https://yourwebsite.com"
          className="text-green-400 hover:underline"
        >
          tawam
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
