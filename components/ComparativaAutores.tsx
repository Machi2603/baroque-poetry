"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

const rows = [
  { aspecto: "Objetivo principal", gongora: "Belleza formal", quevedo: "Agudeza conceptual" },
  { aspecto: "Léxico", gongora: "Cultismos latinizantes", quevedo: "Vocablos cotidianos" },
  { aspecto: "Sintaxis", gongora: "Hipérbaton extremo", quevedo: "Directa y cortante" },
  { aspecto: "Tono dominante", gongora: "Sensorial, hedonista", quevedo: "Irónico, moralizante" },
  { aspecto: "Género preferido", gongora: "Poema largo, romance", quevedo: "Soneto, letrilla satírica" },
  { aspecto: "Relación entre sí", gongora: "Rivales literarios", quevedo: "Rivales literarios" },
];

export default function Comparativa() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const rowEls = gsap.utils.toArray<HTMLElement>(".comp-row");
        rowEls.forEach((row) => {
          ScrollTrigger.create({
            trigger: row,
            start: "top 75%",
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
      id="comparativa"
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
            Góngora
            <br />
            <span className="text-[#a08a6a]">versus Quevedo</span>
          </h2>
        </div>

        {/* Header row */}
        <div className="grid grid-cols-3 gap-px mb-px">
          <div className="bg-[#0d0d0d] py-4 px-6">
            <span className="font-label text-xs tracking-widest text-[#a08a6a] uppercase">
              Aspecto
            </span>
          </div>
          <div className="bg-[#0d0d0d] py-4 px-6 flex items-center gap-3">
            <Badge className="rounded-none bg-transparent border-[#c9a84c] text-[#c9a84c] text-xs tracking-wider font-label">
              Góngora
            </Badge>
          </div>
          <div className="bg-[#0d0d0d] py-4 px-6 flex items-center gap-3">
            <Badge className="rounded-none bg-transparent border-[#a08a6a] text-[#a08a6a] text-xs tracking-wider font-label">
              Quevedo
            </Badge>
          </div>
        </div>

        {/* Data rows */}
        <div className="space-y-px">
          {rows.map((row, i) => (
            <div
              key={i}
              className="comp-row grid grid-cols-3 gap-px border-l-2 border-transparent transition-all duration-300"
            >
              <div className="bg-[#0d0d0d] py-5 px-6">
                <span className="font-label text-sm text-[#f5f5f7]/50 uppercase tracking-wider">
                  {row.aspecto}
                </span>
              </div>
              <div className="bg-[#0d0d0d] py-5 px-6">
                <p className="font-body text-[#f5f5f7] text-base leading-snug">
                  {row.gongora}
                </p>
              </div>
              <div className="bg-[#0d0d0d] py-5 px-6">
                <p className="font-body text-[#f5f5f7] text-base leading-snug">
                  {row.quevedo}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 font-body italic text-[#a08a6a] text-base text-center">
          A pesar de sus diferencias estéticas, ambos comparten el mismo sustrato cultural barroco: el desengaño y la conciencia de la muerte.
        </p>
      </div>
    </section>
  );
}
