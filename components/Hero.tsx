"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background XVII */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-display font-black text-transparent"
          style={{
            fontSize: "clamp(12rem, 35vw, 30rem)",
            WebkitTextStroke: "1px rgba(201,168,76,0.06)",
            lineHeight: 1,
          }}
        >
          XVII
        </span>
      </div>

      {/* Gold horizontal line top */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto will-transform"
      >
        <div className="overflow-hidden mb-4">
          <AnimatedText
            text="La Poesía"
            tag="h1"
            delay={0}
            className="font-display font-black text-[#f5f5f7] leading-none block"
            style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}
          />
        </div>
        <div className="overflow-hidden mb-6">
          <AnimatedText
            text="Barroca"
            tag="h1"
            delay={0.8}
            className="font-display font-black leading-none block"
            style={{
              fontSize: "clamp(4rem, 10vw, 9rem)",
              color: "transparent",
              WebkitTextStroke: "2px #c9a84c",
            }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="font-label text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-6"
        >
          Lengua Castellana y Literatura · 1º Bachillerato
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="font-body italic text-xl text-[#a08a6a] max-w-xl mx-auto leading-relaxed"
        >
          Hecho por Alejandro de Blas, Saúl Arcos, Barbara Ballesteros y Claudia Ríos
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-12 flex flex-col items-center gap-1"
        >
          <span className="font-label text-xs tracking-widest text-[#f5f5f7]/30 uppercase">
            Desplaza
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="mt-2"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="text-[#c9a84c]"
            >
              <path
                d="M10 4v12M5 11l5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}
