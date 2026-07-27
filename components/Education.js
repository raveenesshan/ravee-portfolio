"use client";

import { education } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import TimelineItem from "./ui/TimelineItem";

export default function Education() {
  return (
    <section id="education" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="// education"
          title="Education"
          description="Where the foundation was built."
        />
        <TimelineItem
          icon={education.icon}
          title={education.institution}
          subtitle={education.status}
          description={education.degree}
          isLast
          index={0}
        />
      </div>
    </section>
  );
}
