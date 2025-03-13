"use client";

import React from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  span: string;
}

const AnimatedNumber: React.FC<CounterProps> = ({
  from = 0,
  to,
  duration = 2,
  className,
  span,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [displayCount, setDisplayCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration });
      const unsubscribe = rounded.on("change", (latest) =>
        setDisplayCount(latest)
      );

      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [count, duration, isInView, rounded, to]);

  return (
    <motion.span ref={ref} className={className}>
      {displayCount}
      {span}
    </motion.span>
  );
};

export default AnimatedNumber;