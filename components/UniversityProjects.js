"use client";

import { universityProjects } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import TimelineItem from "./ui/TimelineItem";

export default function UniversityProjects() {
  return (
    <section id="university-projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="// university projects"
          title="University Projects"
          description="Coursework that pushed into new territory — immersive VR and applied data analysis."
        />
        <div className="space-y-10">
          {universityProjects.map((proj, i) => (
            <TimelineItem
              key={proj.id}
              icon={proj.icon}
              title={proj.name}
              subtitle={proj.period}
              description={proj.description}
              tags={proj.tech}
              isLast={i === universityProjects.length - 1}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
