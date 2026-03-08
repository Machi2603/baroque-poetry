"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Separator } from "@/components/ui/separator";

gsap.registerPlugin(ScrollTrigger);

export default function DosVertientes() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          leftRef.current,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          rightRef.current,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1,
            delay: 0.3,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="vertientes"
      ref={sectionRef}
      className="py-32 px-6 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-label text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-4">
            05 — Vertientes
          </p>
          <h2
            className="font-display font-bold text-[#f5f5f7] leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Dos Grandes
            <br />
            <span className="text-[#a08a6a]">Corrientes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-0 items-stretch">
          {/* Culteranismo */}
          <div ref={leftRef} className="bg-[#0d0d0d] border border-[#2a2a2a] p-10 lg:p-14">
            <div className="mb-8">
              <span className="font-label text-xs tracking-widest text-[#c9a84c] uppercase block mb-3">
                Corriente I
              </span>
              <h3 className="font-display font-bold text-[#f5f5f7] text-4xl mb-2">
                Culteranismo
              </h3>
              <p className="font-label text-sm text-[#a08a6a]">
                También llamado <em>Gongorismo</em>
              </p>
            </div>

            <div className="gold-line mb-8" />

            <div className="space-y-4 mb-10">
              {[
                "Énfasis en la forma y la música del verso",
                "Cultismos latinos y griegos",
                "Metáforas oscuras y recargadas",
                "Hipérbaton extremo",
                "Belleza sensorial como fin",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#c9a84c] mt-1 text-xs">◆</span>
                  <p className="font-body text-[#a08a6a] text-lg">{item}</p>
                </div>
              ))}
            </div>

            <div className="border border-[#2a2a2a] p-5">
              <p className="font-label text-xs text-[#c9a84c] tracking-wider uppercase mb-3">
                Representante
              </p>
              <p className="font-display font-bold text-[#f5f5f7] text-2xl">
                Luis de Góngora
              </p>
              <p className="font-body italic text-[#a08a6a] text-sm mt-1">
                Córdoba, 1561–1627
              </p>
              <p className="font-body text-[#a08a6a] text-base mt-3 leading-relaxed">
                Soledades, Fábula de Polifemo y Galatea
              </p>
            </div>
          </div>

          {/* Separator */}
          <div className="flex items-center justify-center py-8 lg:py-0 lg:px-8">
            <Separator
              orientation="vertical"
              className="hidden lg:block h-full bg-[#c9a84c]/30 w-px"
            />
            <Separator
              orientation="horizontal"
              className="lg:hidden w-full bg-[#c9a84c]/30 h-px"
            />
          </div>

          {/* Conceptismo */}
          <div ref={rightRef} className="bg-[#0d0d0d] border border-[#2a2a2a] p-10 lg:p-14">
            <div className="mb-8">
              <span className="font-label text-xs tracking-widest text-[#c9a84c] uppercase block mb-3">
                Corriente II
              </span>
              <h3 className="font-display font-bold text-[#f5f5f7] text-4xl mb-2">
                Conceptismo
              </h3>
              <p className="font-label text-sm text-[#a08a6a]">
                También llamado <em>Quevedismo</em>
              </p>
            </div>

            <div className="gold-line mb-8" />

            <div className="space-y-4 mb-10">
              {[
                "Énfasis en el contenido y la idea",
                "Ingenio y agudeza conceptual",
                "Asociaciones inesperadas de ideas",
                "Economía de palabras",
                "Sátira y mordacidad",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#c9a84c] mt-1 text-xs">◆</span>
                  <p className="font-body text-[#a08a6a] text-lg">{item}</p>
                </div>
              ))}
            </div>

            <div className="border border-[#2a2a2a] p-5">
              <p className="font-label text-xs text-[#c9a84c] tracking-wider uppercase mb-3">
                Representante
              </p>
              <p className="font-display font-bold text-[#f5f5f7] text-2xl">
                Francisco de Quevedo
              </p>
              <p className="font-body italic text-[#a08a6a] text-sm mt-1">
                Madrid, 1580–1645
              </p>
              <p className="font-body text-[#a08a6a] text-base mt-3 leading-relaxed">
                Sueños, El Buscón, Poemas satíricos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
