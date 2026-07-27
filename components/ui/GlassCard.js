"use client";

import { motion } from "motion/react";

export default function GlassCard({
  children,
  className = "",
  hover = true,
  ...props
}) {
  return (
    <motion.div
      className={`glass rounded-2xl ${className}`}
      whileHover={
        hover
          ? {
              y: -6,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }
          : undefined
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}
