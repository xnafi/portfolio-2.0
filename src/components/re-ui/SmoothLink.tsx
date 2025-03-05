"use client";
import { Link } from "react-scroll";

interface SlinkProps {
  to: string;
  link: string;
  duration: number;
  className: string;
}

export default function SmoothLink({ to, duration, link }: SlinkProps) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={duration}
      className="bg-green-500 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md hover:bg-green-700"
    >
      {link}
    </Link>
  );
}
