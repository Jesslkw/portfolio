"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds; keep small */
  delay?: number;
  as?: "div" | "section" | "footer";
};

export function FadeIn({
  children,
  className,
  delay = 0,
  as = "div",
}: FadeInProps) {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.82;
  const d = reduceMotion ? 0 : delay;

  const props = {
    className,
    initial: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-28px 0px -8px 0px" as const, amount: 0.12 },
    transition: { duration, ease, delay: d },
  };

  if (as === "section") {
    return <motion.section {...props}>{children}</motion.section>;
  }
  if (as === "footer") {
    return <motion.footer {...props}>{children}</motion.footer>;
  }
  return <motion.div {...props}>{children}</motion.div>;
}
