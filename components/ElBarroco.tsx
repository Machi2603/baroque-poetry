"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const concepts = [
  {
    num: "01",
    title: "Inquietud",
    desc: "Frente al equilibrio renacentista, el Barroco introduce tensión y angustia vital. Nada es estable, nada es seguro.",
    icon: "",
  },
  {
    num: "02",
    title: "Exageración",
    desc: "Todo llevado al extremo: ornamentación, metáforas encadenadas, hipérbaton. El exceso como norma estética.",
    icon: "",
  },
  {
    num: "03",
    title: "Complejidad",
    desc: "Lenguaje elaborado y artificioso. El hermetismo como signo de distinción intelectual y cultural.",
    icon: "",
  },
  {
    num: "04",
    title: "Desengaño",
    desc: "Visión pesimista de la realidad. El mundo como ilusión engañosa; la muerte, la única certeza absoluta.",
    icon: "",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function ElBarroco() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id="barroco" className="py-32 px-6 lg:px-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-label text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-4">
            03 — El Barroco
          </p>
          <h2
            className="font-display font-bold text-[#f5f5f7] leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Un movimiento nacido
            <br />
            <span className="text-[#a08a6a]">de la crisis</span>
          </h2>
          <p className="font-label text-sm text-[#f5f5f7]/30 mt-4 tracking-widest">
            Segunda mitad del Siglo de Oro · Siglo XVII
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2a2a2a]"
        >
          {concepts.map((concept, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-[#0d0d0d] p-10 group hover:bg-[#111] transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-label text-xs tracking-widest text-[#c9a84c] uppercase">
                  {concept.num}
                </span>
                <span className="text-2xl text-[#2a2a2a] group-hover:text-[#c9a84c] transition-colors duration-500">
                  {concept.icon}
                </span>
              </div>
              <h3 className="font-display font-bold text-[#f5f5f7] text-2xl mb-4 group-hover:text-[#c9a84c] transition-colors duration-300">
                {concept.title}
              </h3>
              <div className="gold-line mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="font-body text-[#a08a6a] leading-relaxed text-lg">
                {concept.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-12 font-body italic text-[#a08a6a] text-lg leading-relaxed max-w-2xl">
          Surge en un ambiente de malestar social. En España, la Inquisición frena cualquier renovación del pensamiento.
        </p>
      </div>
    </section>
  );
}
