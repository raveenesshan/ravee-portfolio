"use client";

import { motion } from "motion/react";
import { featuredProjects } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import Icon from "./ui/Icon";

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="// projects"
          title="Featured Projects"
          description="Two builds I'm proud of — one shipped to the cloud, one you're looking at right now."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="h-full"
            >
              <GlassCard className="flex h-full flex-col p-7 sm:p-8">
                <div className="mb-6 flex items-start justify-between">
                  <span className="glow-cyan flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber/20 to-cyan/20 text-cyan">
                    <Icon name={project.icon} className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                    className="glass flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:text-cyan"
                  >
                    <Icon name="Github" className="h-4 w-4" />
                  </a>
                </div>

                <p className="font-mono text-xs uppercase tracking-wider text-amber">
                  {project.tagline}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

                <ul className="mt-5 space-y-2">
                  {project.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Icon
                        name="Check"
                        className="mt-0.5 h-4 w-4 shrink-0 text-cyan"
                        strokeWidth={2}
                      />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-7">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 font-mono text-xs text-cyan"
                    >
                      {t}
                    </span>
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
