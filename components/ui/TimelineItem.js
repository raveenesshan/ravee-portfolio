"use client";

import { motion } from "motion/react";
import Icon from "./Icon";
import GlassCard from "./GlassCard";

export default function TimelineItem({
  icon,
  title,
  subtitle,
  description,
  tags,
  isLast = false,
  index = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="relative pl-14 sm:pl-20"
    >
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute bottom-[-2.5rem] left-[19px] top-10 w-px bg-gradient-to-b from-amber/50 to-cyan/10 sm:left-[27px]"
        />
      )}
      <span className="glass glow-cyan absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-2xl text-cyan sm:h-14 sm:w-14">
        <Icon name={icon} className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
      </span>
      <GlassCard className="p-6 sm:p-7">
        {subtitle && (
          <p className="mb-1 font-mono text-xs uppercase tracking-wider text-amber">
            {subtitle}
          </p>
        )}
        <h3 className="mb-2 text-lg font-semibold text-foreground sm:text-xl">
          {title}
        </h3>
        <p className="mb-4 leading-relaxed text-muted">{description}</p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 font-mono text-xs text-cyan"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </GlassCard>
    </motion.div>
  );
}
