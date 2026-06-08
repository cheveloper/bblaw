"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode, ElementType } from "react";
import { EASE } from "@/lib/motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.08,
      ease: EASE,
    },
  }),
};

type Tag = "div" | "section" | "li" | "span";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
}) {
  // motion(as) returns a single concrete motion component, avoiding the
  // "union type too complex" error from indexing a map of motion.* tags.
  const MotionTag = motion[as] as ElementType;
  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </MotionTag>
  );
}
