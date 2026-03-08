"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const filas = [
  { aspecto: "Visión del mundo", renacimiento: "Optimismo y confianza", barroco: "Pesimismo y desengaño" },
  { aspecto: "Estética", renacimiento: "Equilibrio y armonía", barroco: "Exageración y contraste" },
  { aspecto: "Ideal de belleza", renacimiento: "Belleza ideal y serena", barroco: "Tensión, movimiento, drama" },
  { aspecto: "Lenguaje", renacimiento: "Claridad y sencillez", barroco: "Complejidad y artificiosidad" },
  { aspecto: "Tono", renacimiento: "Confianza en el ser humano", barroco: "Angustia existencial" },
  { aspecto: "Época", renacimiento: "Siglo XVI — apogeo", barroco: "Siglo XVII — crisis" },
];

export default function DiferenciasRenacimiento() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const rowEls = gsap.utils.toArray<HTMLElement>(".diff-row");
        rowEls.forEach((row) => {
          ScrollTrigger.create({
            trigger: row,
            start: "top 78%",
            onEnter: () => row.classList.add("is-active"),
            onLeaveBack: () => row.classList.remove("is-active"),
          });
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="diferencias"
      ref={sectionRef}
      className="py-32 px-6 lg:px-24 bg-[#0d0d0d]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-label text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-4">
            06 — Comparativa
          </p>
          <h2
            className="font-display font-bold text-[#f5f5f7] leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Barroco vs.
            <br />
            <span className="text-[#a08a6a]">Renacimiento</span>
          </h2>
        </div>

        {/* Cabecera */}
        <div className="grid grid-cols-3 border-b border-[#2a2a2a] pb-4 mb-px">
          <span className="font-label text-xs tracking-widest text-[#a08a6a] uppercase px-2">
            Aspecto
          </span>
          <span className="font-label text-xs tracking-widest text-[#f5f5f7]/40 uppercase px-2">
            Renacimiento
          </span>
          <span className="font-label text-xs tracking-widest text-[#c9a84c] uppercase px-2">
            Barroco
          </span>
        </div>

        {/* Filas */}
        <div className="space-y-px">
          {filas.map((fila, i) => (
            <div
              key={i}
              className="diff-row grid grid-cols-3 gap-px border-l-2 border-transparent transition-all duration-300"
            >
              <div className="bg-[#0d0d0d] py-5 px-4">
                <span className="font-label text-sm text-[#f5f5f7]/40 uppercase tracking-wider">
                  {fila.aspecto}
                </span>
              </div>
              <div className="bg-[#0d0d0d] py-5 px-4">
                <p className="font-body text-[#f5f5f7]/50 text-base leading-snug">
                  {fila.renacimiento}
                </p>
              </div>
              <div className="bg-[#0d0d0d] py-5 px-4">
                <p className="font-body text-[#f5f5f7] text-base leading-snug font-medium">
                  {fila.barroco}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
