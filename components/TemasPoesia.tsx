"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const temas = [
  {
    num: "01",
    nombre: "El Desengaño",
    desc: "El mundo es una ilusión que encubre la verdad. El ser humano busca riqueza, gloria y amor, pero todo resulta ser apariencia y mentira. La desilusión es inevitable.",
  },
  {
    num: "02",
    nombre: "La vida como conflicto",
    desc: "La existencia es un campo de batalla de pasiones, contradicciones y sufrimientos. No hay paz posible: el alma lucha continuamente contra el cuerpo, el bien contra el mal.",
  },
  {
    num: "03",
    nombre: "Tempus fugit",
    desc: "El tiempo huye implacable y devora la juventud, la belleza y la vida. El río como metáfora: fluye sin retorno hacia el mar, que es la muerte.",
  },
  {
    num: "04",
    nombre: "Memento mori",
    desc: "Recuerda que morirás. La muerte iguala a todos: reyes y mendigos, jóvenes y ancianos. El arte barroco convierte la calavera en símbolo omnipresente.",
  },
  {
    num: "05",
    nombre: "La vida como sueño",
    desc: "La vida es un sueño del que despertamos con la muerte. La realidad y la apariencia se confunden. ¿Qué es real? ¿Qué es ilusión? Calderón lo convierte en drama.",
  },
];

export default function TemasPoesia() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="temas" className="py-32 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-label text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-4">
            03 — Temas
          </p>
          <h2
            className="font-display font-bold text-[#f5f5f7] leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Temas de la
            <br />
            <span className="text-[#a08a6a]">Poesía Barroca</span>
          </h2>
        </div>

        <motion.div
          ref={ref}
          className="space-y-px bg-[#2a2a2a]"
        >
          {temas.map((tema, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="bg-[#0a0a0a] px-8 py-7 grid grid-cols-1 md:grid-cols-[6rem_12rem_1fr] gap-4 items-start group hover:bg-[#0f0f0f] transition-colors duration-300"
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
              <p className="font-body text-[#a08a6a] text-lg leading-relaxed">
                {tema.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
