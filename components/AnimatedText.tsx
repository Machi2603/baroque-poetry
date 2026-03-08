"use client";

import { motion, useReducedMotion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

const charVariants = {
  hidden: { opacity: 0, rotateX: -90, y: 20 },
  visible: { opacity: 1, rotateX: 0, y: 0 },
};

export default function AnimatedText({
  text,
  className = "",
  style,
  delay = 0,
  tag: Tag = "span",
}: AnimatedTextProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <Tag className={className} style={style}>{text}</Tag>;
  }

  const chars = Array.from(text);

  return (
    <Tag className={className} style={{ perspective: 1000, ...style }}>
      <motion.span
        aria-hidden="true"
        style={{ display: "inline-block" }}
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: 0.04,
          delayChildren: delay,
        }}
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            variants={charVariants}
            transition={{
              duration: 0.5,
              ease: [0.215, 0.610, 0.355, 1.000],
            }}
            style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
            className="will-transform"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
      <span className="sr-only">{text}</span>
    </Tag>
  );
}
