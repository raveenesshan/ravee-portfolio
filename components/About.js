"use client";

import { motion } from "motion/react";
import { about } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import Icon from "./ui/Icon";

export default function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={about.eyebrow}
          title="About Me"
          description="A little about how I think, build, and what I'm chasing next."
        />

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {about.paragraphs.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted">
                {para}
              </p>
            ))}
          </motion.div>

          {/* Terminal-styled illustration — stands in for a stock illustration,
              drawn from the same "engineer's toolset" motif as the rest of the site */}
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: 1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard hover={false} className="overflow-hidden">
              <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-2 font-mono text-xs text-muted">
                  {about.terminal.title}
                </span>
              </div>
              <div className="space-y-2.5 px-5 py-6 font-mono text-sm">
                {about.terminal.lines.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.18, duration: 0.3 }}
                  >
                    <span
                      className={line.prompt === "$" ? "text-amber" : "text-cyan"}
                    >
                      {line.prompt}
                    </span>{" "}
                    <span className="text-foreground/90">{line.text}</span>
                  </motion.p>
                ))}
                <span
                  aria-hidden="true"
                  className="animate-blink-cursor inline-block h-4 w-2 bg-cyan align-middle"
                />
              </div>
            </GlassCard>
          </motion.div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {about.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GlassCard className="flex h-full flex-col items-start gap-3 p-5">
                <span className="glow-cyan flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                  <Icon name={h.icon} className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="text-sm leading-snug text-foreground/90">
                  {h.label}
                </span>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
