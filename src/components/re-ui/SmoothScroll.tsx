"use client";
import { Element } from "react-scroll";

interface scrollIe {
  id: string;
  children: React.ReactNode;
}
export default function SmoothScroll({ id, children }: scrollIe) {
  return <Element name={id}>{children}</Element>;
}
