"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const recursos = [
  {
    num: "01",
    name: "Hipérbaton",
    def: "Alteración del orden sintáctico natural para crear énfasis o musicalidad. Recurso favorito de Góngora.",
    example: "\"De este, pues, formidable de la tierra / bostezo el melancólico vacío...\"",
  },
  {
    num: "02",
    name: "Metáfora",
    def: "Identificación de dos realidades distintas basada en una semejanza. El Barroco lleva la metáfora a su extremo más hermético.",
    example: "\"Las flores del romero, / niña Isabel, / hoy son flores azules / mañana serán miel.\"",
  },
  {
    num: "03",
    name: "Antítesis",
    def: "Contraposición de ideas contrarias para resaltar la tensión barroca entre opuestos irreconciliables.",
    example: "\"Es hielo abrasador, es fuego helado, / es herida que duele y no se siente...\"",
  },
  {
    num: "04",
    name: "Hipérbole",
    def: "Exageración desmedida para provocar asombro o efecto cómico. Quevedo la usa con maestría satírica.",
    example: "\"Érase un hombre a una nariz pegado, / érase una nariz superlativa...\"",
  },
  {
    num: "05",
    name: "Cultismos",
    def: "Palabras tomadas del latín y griego para elevar el registro y crear hermetismo. Signo del culteranismo gongorino.",
    example: "\"Purpúreo el cabello, undosa veste\"",
  },
  {
    num: "06",
    name: "Conceptismo",
    def: "Asociación ingeniosa e inesperada de ideas. El concepto busca la agudeza mental por encima del ornato sonoro.",
    example: "\"Ayer naciste y morirás mañana. / ¿Para tan breve ser, quién te dio vida?\"",
  },
];

export default function EstiloBarroco() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="estilo" className="py-32 px-6 lg:px-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-label text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-4">
            05 — Estilo
          </p>
          <h2
            className="font-display font-bold text-[#f5f5f7] leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Recursos
            <br />
            <span className="text-[#a08a6a]">Retóricos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#2a2a2a]">
          {recursos.map((recurso, i) => (
            <div
              key={i}
              className="relative bg-[#0d0d0d] p-8 group cursor-pointer overflow-hidden hover:bg-[#111] transition-colors duration-300"
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(null)}
            >
              {/* Giant number behind */}
              <span
                className="absolute -right-4 -bottom-6 font-display font-black text-transparent pointer-events-none select-none transition-all duration-500 group-hover:text-[#c9a84c]/10"
                style={{
                  fontSize: "8rem",
                  WebkitTextStroke: "1px rgba(201,168,76,0.06)",
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                {recurso.num}
              </span>

              <div className="relative z-10">
                <span className="font-label text-xs tracking-widest text-[#c9a84c] uppercase block mb-3">
                  {recurso.num}
                </span>
                <h3 className="font-display font-bold text-[#f5f5f7] text-2xl mb-3 group-hover:text-[#c9a84c] transition-colors duration-300">
                  {recurso.name}
                </h3>
                <p className="font-body text-[#a08a6a] leading-relaxed text-base mb-4">
                  {recurso.def}
                </p>
                <AnimatePresence>
                  {activeIdx === i && (
                    <motion.blockquote
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-l border-[#c9a84c] pl-4 overflow-hidden"
                    >
                      <p className="font-body italic text-[#f5f5f7]/60 text-sm leading-relaxed">
                        {recurso.example}
                      </p>
                    </motion.blockquote>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
