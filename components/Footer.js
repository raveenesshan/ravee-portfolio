"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navLinks, personal } from "@/lib/data";
import Icon from "./ui/Icon";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer className="relative px-4 pb-10 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="glass rounded-3xl px-6 py-10 sm:px-10">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <a
              href="#top"
              className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber to-cyan text-xs font-bold text-[#0b0e17]">
                {personal.initials}
              </span>
              {personal.name}
            </a>

            <nav
              aria-label="Footer"
              className="flex flex-wrap justify-center gap-x-5 gap-y-2"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-xs text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="glass flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:text-cyan"
              >
                <Icon name="Github" className="h-4 w-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="glass flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:text-cyan"
              >
                <Icon name="Linkedin" className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="glass flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:text-cyan"
              >
                <Icon name="Mail" className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-6 text-center">
            <p className="font-mono text-xs text-muted">
              © {year} {personal.name}. All rights reserved.
            </p>
            <p className="mt-1 font-mono text-xs text-muted">
              Designed &amp; Developed by {personal.name}
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.a
            href="#top"
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 10 }}
            transition={{ duration: 0.25 }}
            whileHover={{ y: -3 }}
            className="glow-cyan glass fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full text-cyan"
          >
            <Icon name="ArrowUp" className="h-5 w-5" strokeWidth={2} />
          </motion.a>
        )}
      </AnimatePresence>
    </footer>
  );
}
