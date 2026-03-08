"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const temas = [
  {
    num: "01",
    nombre: "Desengaño",
    desc: "El tema central de toda la literatura barroca",
  },
  {
    num: "02",
    nombre: "La vida como conflicto",
    desc: "Contradicción y lucha interior",
  },
  {
    num: "03",
    nombre: "Tempus Fugit",
    desc: "El tiempo huye inexorablemente",
  },
  {
    num: "04",
    nombre: "Memento Mori",
    desc: "Recuerda que eres mortal",
  },
  {
    num: "05",
    nombre: "La vida como sueño",
    desc: "La realidad es ilusión y apariencia",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function TemasBarroco() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id="temas" className="py-32 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-label text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-4">
            04 — Temas
          </p>
          <h2
            className="font-display font-bold text-[#f5f5f7] leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Los grandes
            <br />
            <span className="text-[#a08a6a]">temas</span>
          </h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-px bg-[#2a2a2a]"
        >
          {temas.map((tema, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-[#0a0a0a] px-8 py-7 grid grid-cols-1 md:grid-cols-[6rem_14rem_1fr] gap-4 items-start group hover:bg-[#0f0f0f] transition-colors duration-300"
            >
              <span
                className="font-display font-black text-4xl leading-none"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(201,168,76,0.4)",
                }}
              >
                {tema.num}
              </span>
              <h3 className="font-display font-bold text-[#f5f5f7] text-xl leading-snug group-hover:text-[#c9a84c] transition-colors duration-300 pt-1">
                {tema.nombre}
              </h3>
              <p className="font-body text-[#a08a6a] text-lg leading-relaxed pt-1">
                {tema.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
