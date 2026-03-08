"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const autores = [
  {
    initial: "G",
    name: "Luis de Góngora",
    dates: "1561 – 1627",
    origin: "Córdoba, España",
    bio: "Canónigo cordobés, considerado el máximo exponente del culteranismo. Su obra supuso una revolución estética que dividió a la crítica de su tiempo y marcó toda la poesía posterior.",
    obras: [
      "Soledades (1613)",
      "Fábula de Polifemo y Galatea (1612)",
      "Romances y letrillas",
      "Sonetos",
    ],
    quote:
      "\"Mientras por competir con tu cabello, / oro bruñido el sol relumbra en vano...\"",
    style: "Culteranismo",
    color: "#c9a84c",
  },
  {
    initial: "Q",
    name: "Francisco de Quevedo",
    dates: "1580 – 1645",
    origin: "Madrid, España",
    bio: "Escritor madrileño, político y filósofo. Representante máximo del conceptismo, cultivó todos los géneros con igual maestría: la poesía amorosa, la filosófica y la satírica mordaz.",
    obras: [
      "Historia de la vida del Buscón (1626)",
      "Los Sueños (1627)",
      "Poemas metafísicos",
      "Letrillas satíricas",
    ],
    quote:
      "\"Érase un hombre a una nariz pegado, / érase una nariz superlativa...\"",
    style: "Conceptismo",
    color: "#a08a6a",
  },
];

export default function Autores() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="autores" className="py-32 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-label text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-4">
            07 — Autores
          </p>
          <h2
            className="font-display font-bold text-[#f5f5f7] leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Grandes
            <br />
            <span className="text-[#a08a6a]">Poetas</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {autores.map((autor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{
                duration: 0.8,
                delay: i * 0.2,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="relative border border-[#2a2a2a] p-10 group hover:border-[#c9a84c]/30 transition-colors duration-500"
            >
              {/* Giant initial */}
              <span
                className="section-number absolute -top-6 -left-4 opacity-50"
                aria-hidden="true"
              >
                {autor.initial}
              </span>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span
                      className="font-label text-xs tracking-widest uppercase block mb-2"
                      style={{ color: autor.color }}
                    >
                      {autor.style}
                    </span>
                    <h3 className="font-display font-bold text-[#f5f5f7] text-3xl mb-1">
                      {autor.name}
                    </h3>
                    <p className="font-label text-sm text-[#a08a6a]">
                      {autor.dates} · {autor.origin}
                    </p>
                  </div>
                </div>

                <div
                  className="h-px mb-6 transition-all duration-500"
                  style={{ backgroundColor: autor.color, width: "3rem" }}
                />

                <p className="font-body text-[#a08a6a] leading-relaxed text-lg mb-8">
                  {autor.bio}
                </p>

                <div className="mb-8">
                  <p
                    className="font-label text-xs tracking-widest uppercase mb-3"
                    style={{ color: autor.color }}
                  >
                    Obras principales
                  </p>
                  <ul className="space-y-2">
                    {autor.obras.map((obra, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <span
                          className="text-xs"
                          style={{ color: autor.color }}
                        >
                          ◆
                        </span>
                        <span className="font-body text-[#f5f5f7]/70 text-base">
                          {obra}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <blockquote className="border-l-2 pl-5"
                  style={{ borderColor: autor.color }}>
                  <p className="font-body italic text-[#f5f5f7]/50 text-sm leading-relaxed">
                    {autor.quote}
                  </p>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
