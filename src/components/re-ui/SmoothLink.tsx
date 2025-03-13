"use client";
import { IconType } from "react-icons";
import { Link } from "react-scroll";

type ButtonVariant = "primary" | "secondary" | "outline" | "initial";

interface SlinkProps {
  to: string;
  name?: string;
  duration: number;
  className?: string;
  icon?: IconType;
  variant?: ButtonVariant;
  onClick?: () => void;
}

export default function SmoothLink({
  to,
  duration,
  name,
  variant = "initial",
  onClick,
}: SlinkProps) {
  const getButtonStyles = () => {
    switch (variant) {
      case "initial":
        return "font-semibold text-sm cursor-pointer";
      case "primary":
        return "text-lg bg-gray-100 backdrop-blur-md lg:font-semibold isolation-auto border before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-blue-400 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 z-10 px-6 py-2 overflow-hidden border-2 rounded-full group";
      case "secondary":
        return "text-lg bg-gray-100 backdrop-blur-md lg:font-semibold isolation-auto border before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full before:bg-blue-400 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 z-10 px-6 py-2 overflow-hidden border-2 rounded-full group";
      case "outline":
        return "border border-blue-600 text-blue-600 hover:bg-blue-100";
      default:
        return "";
    }
  };
  return (
    <Link
      to={to}
      smooth={true}
      duration={duration}
      className={`flex items-center gap-2 px-4 py-2 rounded-md transition cursor-pointer font-semibold ${getButtonStyles()}`}
      onClick={onClick}
    >
      {name}
    </Link>
  );
}
