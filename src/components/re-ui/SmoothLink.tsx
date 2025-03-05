"use client";
import { Link } from "react-scroll";

interface SlinkProps {
  to: string;
  link: string;
  duration: number;
  className?: string;
}

export default function SmoothLink({
  to,
  duration,
  link,
  className,
}: SlinkProps) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={duration}
      className={`${className} cursor-pointer`}
    >
      {link}
    </Link>
  );
}
