"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { navLinks, personal } from "@/lib/data";
import Icon from "./ui/Icon";
import ThemeToggle from "./ThemeToggle";
import Button from "./ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={`glass flex items-center justify-between rounded-2xl px-4 py-3 transition-shadow ${
            scrolled ? "shadow-lg shadow-black/5" : ""
          }`}
        >
          <a
            href="#top"
            className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber to-cyan text-xs font-bold text-[#0b0e17]">
              {personal.initials}
            </span>
            <span className="hidden sm:inline">{personal.firstName}</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 font-mono text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Button
              href={personal.resumeUrl}
              variant="secondary"
              external
              icon={<Icon name="Download" className="h-4 w-4" strokeWidth={1.75} />}
              className="!px-4 !py-2 text-xs"
            >
              Resume
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-foreground"
            >
              <Icon name={open ? "X" : "Menu"} className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mt-2 md:hidden"
          >
            <div className="glass flex flex-col gap-1 rounded-2xl p-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 font-mono text-sm text-foreground/90 transition-colors hover:bg-foreground/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber to-cyan px-4 py-3 font-mono text-sm font-medium text-[#0b0e17]"
              >
                <Icon name="Download" className="h-4 w-4" strokeWidth={1.75} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
