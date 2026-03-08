"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lines = [
  "El Barroco refleja una época de crisis",
  "Predomina el desengaño como tema central",
  "Estilo complejo y elaborado",
  "Gran riqueza literaria — segunda mitad del Siglo de Oro",
  "",
  "",
  "El Barroco convirtió la crisis en arte.",
];

export default function Conclusion() {
  const sectionRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const lineEls = gsap.utils.toArray<HTMLElement>(".conc-line");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5,
          },
        });

        tl.fromTo(
          lineEls,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            ease: "none",
          }
        );

        tl.to(
          overlayRef.current,
          {
            opacity: 1,
            ease: "none",
          },
          "-=0.2"
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="conclusion"
      ref={sectionRef}
      className="relative min-h-[200vh]"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="font-label text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-12">
            09 — Conclusión
          </p>

          <div className="space-y-3">
            {lines.map((line, i) =>
              line === "" ? (
                <div key={i} className="h-4" />
              ) : (
                <p
                  key={i}
                  className={`conc-line font-display leading-snug opacity-0 ${
                    i < 6
                      ? "font-bold text-[#f5f5f7]"
                      : "font-normal italic text-[#a08a6a]"
                  }`}
                  style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.8rem)" }}
                >
                  {line}
                </p>
              )
            )}
          </div>

          <div className="mt-16 flex flex-col items-center gap-4">
            <div className="gold-line" />
            <p className="font-label text-xs tracking-widest text-[#c9a84c] uppercase">
              Siglo XVII · España
            </p>
          </div>
        </div>

        {/* Fade to black overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-[#0a0a0a] opacity-0 pointer-events-none"
        />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      </div>
    </section>
  );
}
