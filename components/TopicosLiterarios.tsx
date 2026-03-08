"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const topicos = [
  {
    name: "Carpe Diem",
    latin: "Aprovecha el día",
    desc: "Exhortación a gozar del momento presente ante la fugacidad de la vida. Heredado de Horacio, el Barroco lo transforma: ya no es llamada al placer sino conciencia angustiosa del tiempo.",
    example: {
      text: "\"Goza cuello, cabello, labio y frente, / antes que lo que fue en tu edad dorada / oro, lilio, clavel, cristal luciente...\"",
      author: "Luis de Góngora, Soneto CLXVI",
    },
    side: "left",
    svg: (
      <svg width="60" height="80" viewBox="0 0 60 80" fill="none" aria-hidden="true">
        <ellipse cx="30" cy="40" rx="18" ry="30" stroke="#c9a84c" strokeWidth="1.5" />
        <line x1="30" y1="10" x2="30" y2="70" stroke="#c9a84c" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="12" y1="25" x2="48" y2="25" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5" />
        <line x1="8" y1="40" x2="52" y2="40" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5" />
        <line x1="12" y1="55" x2="48" y2="55" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: "Collige, Virgo, Rosas",
    latin: "Recoge, virgen, las rosas",
    desc: "Variante del Carpe Diem: la joven debe aprovechar su belleza antes de que el tiempo la marchite. La rosa como símbolo de la hermosura perecedera.",
    example: {
      text: "\"Mientras por competir con tu cabello / oro bruñido al sol relumbra en vano...\"",
      author: "Luis de Góngora, Soneto",
    },
    side: "right",
    svg: (
      <svg width="60" height="80" viewBox="0 0 60 80" fill="none" aria-hidden="true">
        <circle cx="30" cy="30" r="12" stroke="#c9a84c" strokeWidth="1.5" />
        <circle cx="30" cy="30" r="6" stroke="#c9a84c" strokeWidth="1" opacity="0.6" />
        <line x1="30" y1="42" x2="30" y2="70" stroke="#c9a84c" strokeWidth="1.5" />
        <line x1="20" y1="55" x2="30" y2="48" stroke="#c9a84c" strokeWidth="1" />
        <line x1="40" y1="60" x2="30" y2="53" stroke="#c9a84c" strokeWidth="1" />
        <circle cx="30" cy="30" r="2" fill="#c9a84c" />
      </svg>
    ),
  },
  {
    name: "Memento Mori",
    latin: "Recuerda que morirás",
    desc: "La muerte como certeza absoluta que iguala a todos: reyes y mendigos, jóvenes y ancianos. El arte barroco convierte la calavera en símbolo omnipresente.",
    example: {
      text: "\"Míré los muros de la patria mía, / si un tiempo fuertes, ya desmoronados...\"",
      author: "Francisco de Quevedo",
    },
    side: "left",
    svg: (
      <svg width="60" height="80" viewBox="0 0 60 80" fill="none" aria-hidden="true">
        <ellipse cx="30" cy="28" rx="16" ry="18" stroke="#c9a84c" strokeWidth="1.5" />
        <rect x="18" y="44" width="8" height="10" rx="1" stroke="#c9a84c" strokeWidth="1" />
        <rect x="34" y="44" width="8" height="10" rx="1" stroke="#c9a84c" strokeWidth="1" />
        <circle cx="22" cy="26" r="4" stroke="#c9a84c" strokeWidth="1" />
        <circle cx="38" cy="26" r="4" stroke="#c9a84c" strokeWidth="1" />
        <path d="M24 36 Q30 40 36 36" stroke="#c9a84c" strokeWidth="1" fill="none" />
        <line x1="26" y1="44" x2="34" y2="44" stroke="#c9a84c" strokeWidth="1" />
      </svg>
    ),
  },
  {
    name: "Tempus Fugit",
    latin: "El tiempo huye",
    desc: "El tiempo como enemigo implacable que devora la juventud, la belleza y la vida. El río como metáfora del tiempo que fluye sin retorno hacia la muerte.",
    example: {
      text: "\"Nuestras vidas son los ríos / que van a dar en la mar, / que es el morir...\"",
      author: "Jorge Manrique, Coplas",
    },
    side: "right",
    svg: (
      <svg width="60" height="80" viewBox="0 0 60 80" fill="none" aria-hidden="true">
        <rect x="20" y="5" width="20" height="35" rx="2" stroke="#c9a84c" strokeWidth="1.5" />
        <rect x="20" y="40" width="20" height="35" rx="2" stroke="#c9a84c" strokeWidth="1.5" />
        <ellipse cx="30" cy="40" rx="10" ry="3" stroke="#c9a84c" strokeWidth="1" />
        <path d="M28 22 Q30 28 32 22" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <line x1="10" y1="40" x2="50" y2="40" stroke="#c9a84c" strokeWidth="0.5" opacity="0.4" />
        <ellipse cx="30" cy="55" rx="5" ry="8" fill="rgba(201,168,76,0.15)" />
      </svg>
    ),
  },
];

export default function TopicosLiterarios() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="topicos" className="py-32 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-label text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-4">
            04 — Tópicos
          </p>
          <h2
            className="font-display font-bold text-[#f5f5f7] leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Tópicos
            <br />
            <span className="text-[#a08a6a]">Literarios</span>
          </h2>
        </div>

        <div ref={ref} className="space-y-24">
          {topicos.map((topico, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: topico.side === "left" ? -80 : 80,
              }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: topico.side === "left" ? -80 : 80 }
              }
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className={`grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-start ${
                topico.side === "right" ? "lg:direction-rtl" : ""
              }`}
            >
              {topico.side === "right" && <div className="hidden lg:block" />}
              <div className={topico.side === "right" ? "lg:col-start-2 lg:col-span-2" : ""}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 mt-2">{topico.svg}</div>
                  <div>
                    <h3 className="font-display font-bold text-[#f5f5f7] text-2xl lg:text-3xl mb-1">
                      {topico.name}
                    </h3>
                    <p className="font-label text-xs tracking-widest text-[#c9a84c] uppercase mb-4">
                      {topico.latin}
                    </p>
                    <div className="gold-line mb-4" />
                    <p className="font-body text-[#a08a6a] leading-relaxed text-lg mb-6">
                      {topico.desc}
                    </p>
                    <blockquote className="border-l border-[#c9a84c] pl-5">
                      <p className="font-body italic text-[#f5f5f7]/70 text-base leading-relaxed mb-2">
                        {topico.example.text}
                      </p>
                      <cite className="font-label text-xs text-[#c9a84c] not-italic tracking-wider">
                        — {topico.example.author}
                      </cite>
                    </blockquote>
                  </div>
                </div>
              </div>
              {topico.side === "left" && <div className="hidden lg:block" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
