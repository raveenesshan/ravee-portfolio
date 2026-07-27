"use client";

import { motion } from "motion/react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-mono text-sm font-medium tracking-tight transition-colors duration-200 px-6 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants = {
  primary: "bg-gradient-to-r from-amber to-cyan text-[#0b0e17] glow-amber hover:brightness-110",
  secondary: "glass text-foreground hover:border-cyan/40 hover:text-cyan",
  ghost: "text-muted hover:text-foreground",
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  icon,
  iconPosition = "right",
  children,
  className = "",
  external = false,
  ...props
}) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;
  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      <span>{children}</span>
      {icon && iconPosition === "right" && icon}
    </>
  );
  const motionProps = {
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring", stiffness: 400, damping: 25 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        {...motionProps}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" onClick={onClick} className={classes} {...motionProps} {...props}>
      {content}
    </motion.button>
  );
}
