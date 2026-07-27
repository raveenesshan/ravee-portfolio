"use client";

import { motion } from "motion/react";
import { skillGroups } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import ProgressBar from "./ui/ProgressBar";

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="// skills"
          title="Skills & Expertise"
          description="The stack I reach for most, grouped the way I actually think about it."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: (gi % 3) * 0.08 }}
              className={group.featured ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <GlassCard
                hover={false}
                className={`h-full p-6 sm:p-7 ${group.featured ? "glow-amber" : ""}`}
              >
                <div className="mb-6 flex items-center justify-between gap-3">
                  <h3 className="font-mono text-lg font-semibold text-foreground">
                    {group.title}
                  </h3>
                  {group.featured && (
                    <span className="rounded-full bg-amber/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-amber">
                      Focus
                    </span>
                  )}
                </div>
                <div className="space-y-5">
                  {group.skills.map((skill, si) => (
                    <ProgressBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      icon={skill.icon}
                      delay={si * 0.08}
                    />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
