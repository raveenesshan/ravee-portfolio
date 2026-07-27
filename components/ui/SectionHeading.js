"use client";

import { motion } from "motion/react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const centered = align === "center";
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "mx-auto max-w-2xl text-center" : ""}`}>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-3 font-mono text-sm text-cyan"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`mt-4 text-lg text-muted ${centered ? "" : "max-w-xl"}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
