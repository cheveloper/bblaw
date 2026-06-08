import type { Transition } from "framer-motion";

// Cubic-bezier easing typed as a mutable 4-number tuple, which is what
// framer-motion's `Easing` expects (a `readonly` tuple is NOT assignable).
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const spring: Transition = {
  duration: 0.8,
  ease: EASE,
};
