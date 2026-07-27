"use client";

import { motion } from "motion/react";
import Icon from "./Icon";

export default function ProgressBar({ name, level, icon, delay = 0 }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          {icon && (
            <span className="shrink-0 text-cyan">
              <Icon name={icon} className="h-4 w-4" strokeWidth={1.75} />
            </span>
          )}
          <span className="truncate text-sm text-foreground/90">{name}</span>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.5, duration: 0.4 }}
          className="shrink-0 font-mono text-xs text-muted"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-foreground/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-amber to-cyan"
        />
      </div>
    </div>
  );
}
