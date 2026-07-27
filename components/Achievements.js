"use client";

import { motion } from "motion/react";
import { achievements } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import Icon from "./ui/Icon";

export default function Achievements() {
  return (
    <section id="achievements" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="// achievements"
          title="Achievements"
          description="Milestones and recognitions along the way."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, scale: 0.85, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.5,
                delay: (i % 4) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <GlassCard className="flex h-full flex-col items-center gap-3 p-5 text-center">
                <span className="glow-amber flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber/20 to-cyan/20 text-amber">
                  <Icon name={a.icon} className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="text-sm leading-snug text-foreground/90">
                  {a.label}
                </span>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
