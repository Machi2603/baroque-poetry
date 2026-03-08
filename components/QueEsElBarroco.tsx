"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const caracteristicas = [
  { label: "Inquietud", desc: "Sensación de inestabilidad y angustia vital." },
  { label: "Exageración", desc: "Ornamentación extrema en forma y contenido." },
  { label: "Complejidad", desc: "Lenguaje oscuro, sintaxis retorcida." },
  { label: "Desengaño", desc: "El mundo es apariencia, ilusión y vanidad." },
];

export default function QueEsElBarroco() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="barroco" className="py-32 px-6 lg:px-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-label text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-4">
            02 — El Barroco
          </p>
          <h2
            className="font-display font-bold text-[#f5f5f7] leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            ¿Qué es
            <br />
            <span className="text-[#a08a6a]">el Barroco?</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Definición */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <div className="gold-line mb-6" />
            <p className="font-body text-[#f5f5f7]/80 text-xl leading-relaxed mb-6">
              Movimiento cultural europeo del{" "}
              <span className="text-[#c9a84c]">siglo XVII</span> que surge como
              reacción a la crisis general: política, económica y religiosa.
            </p>
            <p className="font-body text-[#a08a6a] text-lg leading-relaxed mb-6">
              Forma parte de la segunda mitad del{" "}
              <span className="text-[#f5f5f7]/70">Siglo de Oro</span> español.
              Mientras el país se desmorona políticamente, florece una literatura
              de una riqueza sin precedentes.
            </p>
            <p className="font-body text-[#a08a6a] text-lg leading-relaxed">
              Su visión del mundo es profundamente{" "}
              <span className="text-[#f5f5f7]/70">pesimista</span>: el ser
              humano es frágil, la belleza efímera, el poder corrupto y la
              muerte, la única certeza.
            </p>
          </motion.div>

          {/* Características */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="space-y-4"
          >
            <p className="font-label text-xs tracking-widest text-[#c9a84c] uppercase mb-6">
              Rasgos definitorios
            </p>
            {caracteristicas.map((c, i) => (
              <div
                key={i}
                className="flex items-start gap-5 border border-[#2a2a2a] p-5 hover:border-[#c9a84c]/30 transition-colors duration-300"
              >
                <span
                  className="font-display font-bold text-2xl flex-shrink-0 leading-none"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1px #c9a84c",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display font-bold text-[#f5f5f7] text-lg mb-1">
                    {c.label}
                  </p>
                  <p className="font-body text-[#a08a6a] text-base leading-snug">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
