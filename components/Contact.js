"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { contactCards, personal } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import Icon from "./ui/Icon";
import Button from "./ui/Button";

function ContactCard({ card, index }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(card.copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = card.href;
    }
  };

  const isExternal = card.href.startsWith("http");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <GlassCard className="group flex items-center gap-4 p-5">
        <span className="glow-cyan flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan/10 text-cyan">
          <Icon name={card.icon} className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <a
          href={card.href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="min-w-0 flex-1"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            {card.label}
          </p>
          <p className="truncate text-sm font-medium text-foreground transition-colors group-hover:text-cyan sm:text-base">
            {card.value}
          </p>
        </a>
        {card.copyValue && (
          <button
            type="button"
            onClick={handleCopy}
            aria-label={`Copy ${card.label.toLowerCase()}`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-foreground/5 hover:text-cyan"
          >
            <Icon
              name={copied ? "Check" : "Copy"}
              className="h-4 w-4"
              strokeWidth={1.75}
            />
          </button>
        )}
      </GlassCard>
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="// contact"
          title="Let's Build Something"
          description="Open to Cloud Engineering roles, internships, and interesting conversations."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {contactCards.map((card, i) => (
            <ContactCard key={card.id} card={card} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6"
        >
          <GlassCard
            hover={false}
            className="glow-amber flex flex-col items-center gap-6 p-9 text-center sm:flex-row sm:justify-between sm:p-10 sm:text-left"
          >
            <div>
              <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                Have a role in mind, or just want to talk cloud architecture?
              </h3>
              <p className="mt-2 text-muted">My inbox is open — I reply quickly.</p>
            </div>
            <Button
              href={`mailto:${personal.email}`}
              variant="primary"
              icon={<Icon name="Send" className="h-4 w-4" strokeWidth={1.75} />}
              className="shrink-0"
            >
              Say Hello
            </Button>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
