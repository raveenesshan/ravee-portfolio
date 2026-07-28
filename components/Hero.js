"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { personal, heroStats } from "@/lib/data";
import Icon from "./ui/Icon";
import Button from "./ui/Button";

function useTypewriter(words, { typingSpeed = 65, deletingSpeed = 35, pause = 1500 } = {}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(t);
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return words[index].slice(0, subIndex);
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const typed = useTypewriter(personal.titleParts);
  const roleText = prefersReducedMotion ? personal.titleParts[0] : typed;

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center px-4 pb-20 pt-32 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            <span className="font-mono text-xs text-muted">
              Open to Cloud Engineering roles
            </span>
          </motion.div>

          <motion.p variants={item} className="font-mono text-sm text-muted">
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-2 text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            {personal.name}
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-5 flex h-8 items-center font-mono text-lg text-cyan sm:text-2xl"
          >
            <span>{roleText}</span>
            <span
              aria-hidden="true"
              className="animate-blink-cursor ml-1 inline-block h-[1.1em] w-[2px] bg-cyan align-middle"
            />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {personal.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Button
              href="#projects"
              variant="primary"
              icon={<Icon name="ArrowRight" className="h-4 w-4" strokeWidth={2} />}
            >
              View Projects
            </Button>
            <Button
              href={personal.resumeUrl}
              variant="secondary"
              external
              icon={<Icon name="Download" className="h-4 w-4" strokeWidth={1.75} />}
            >
              Download Resume
            </Button>
            <Button href="#contact" variant="ghost">
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8"
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-gradient font-mono text-2xl font-bold sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-muted sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative aspect-[4/5] w-full">
            <div className="animate-drift-a absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-amber via-cyan to-amber opacity-30 blur-2xl" />
            <div className="glass relative h-full w-full rounded-[2.5rem] p-2">
              <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/profile.jpg"
                  alt={`${personal.name}, ${personal.titleParts[0]}`}
                  className="absolute inset-0 h-full w-full object-cover object-[50%_18%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>
            </div>

            <div
              className="animate-float-y glass absolute -left-6 top-8 flex items-center gap-2 rounded-2xl px-3 py-2 sm:-left-10"
              style={{ animationDelay: "0s" }}
            >
              <Icon name="Cloud" className="h-4 w-4 text-amber" strokeWidth={1.75} />
              <span className="font-mono text-xs text-foreground/90">AWS</span>
            </div>
            <div
              className="animate-float-y glass absolute -right-4 top-1/2 flex items-center gap-2 rounded-2xl px-3 py-2 sm:-right-8"
              style={{ animationDelay: "1.4s" }}
            >
              <Icon name="Code2" className="h-4 w-4 text-cyan" strokeWidth={1.75} />
              <span className="font-mono text-xs text-foreground/90">Python</span>
            </div>
            <div
              className="animate-float-y glass absolute -bottom-4 left-1/4 flex items-center gap-2 rounded-2xl px-3 py-2"
              style={{ animationDelay: "2.6s" }}
            >
              <Icon name="FlaskConical" className="h-4 w-4 text-amber" strokeWidth={1.75} />
              <span className="font-mono text-xs text-foreground/90">Flask</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-cyan sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <Icon name="ChevronDown" className="h-4 w-4" strokeWidth={1.5} />
      </motion.a>
    </section>
  );
}
