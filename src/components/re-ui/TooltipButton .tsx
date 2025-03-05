"use client";
import React from "react";

interface TooltipButtonProps {
  icon: React.ReactNode;
  tooltip: string;
  href: string;
}

const TooltipButton = ({ icon, tooltip, href }: TooltipButtonProps) => {
  return (
    <div className="group relative inline-block">
      <a
        href={href}
        className="hover:scale-125 transition-transform duration-200 hover:text-gray-500"
      >
        {icon}
      </a>
      <span
        className="absolute -top-3 -left-10 -translate-x-1/2
        z-20 scale-0 px-3 rounded-lg border border-gray-300 bg-white dark:text-black
        py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out 
        group-hover:scale-100"
      >
        {tooltip}
      </span>
    </div>
  );
};

export default TooltipButton;
