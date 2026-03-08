"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    year: "01",
    title: "Crisis económica y social en España",
    desc: "Malas cosechas, inflación desbocada, hambre y epidemias azotan a la población. El pueblo vive en condiciones de extrema precariedad.",
  },
  {
    year: "02",
    title: "Decadencia política — últimos Austrias: Felipe III, Felipe IV, Carlos II",
    desc: "Monarcas débiles que delegan el poder en validos corruptos. El Imperio español se desmorona en el exterior e interior.",
  },
  {
    year: "03",
    title: "Guerras y pérdida de poder en Europa — Paz de los Pirineos (1659)",
    desc: "España pierde Portugal, los Países Bajos y parte de sus territorios europeos. La hegemonía continental pasa a Francia.",
  },
  {
    year: "04",
    title: "Pobreza, hambrunas y epidemias",
    desc: "La brecha entre la nobleza y el pueblo es abismal. Las ciudades se llenan de mendigos, pícaros y enfermos sin recursos.",
  },
  {
    year: "05",
    title: "Pesimismo y desengaño — la Inquisición frena el pensamiento renovador",
    desc: "La crisis generalizada genera una visión desesperanzada del mundo. La Inquisición impide cualquier renovación intelectual o científica.",
  },
];

export default function ContextoHistorico() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Clip-path reveal for each item
        const itemEls = gsap.utils.toArray<HTMLElement>(".ctx-item");
        itemEls.forEach((el) => {
          gsap.fromTo(
            el,
            { clipPath: "inset(0 100% 0 0)", opacity: 0 },
            {
              clipPath: "inset(0 0% 0 0)",
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        document.fonts.ready.then(() => {
          ScrollTrigger.refresh();
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="contexto"
      ref={sectionRef}
      className="py-32 px-6 lg:px-24 max-w-7xl mx-auto"
    >
      <div ref={titleRef} className="mb-20 pt-4">
        <p className="font-label text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-4">
          01 — Contexto
        </p>
        <h2 className="font-display font-bold text-[#f5f5f7] leading-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
          Marco Histórico
          <br />
          <span className="text-[#a08a6a]">y Cultural</span>
        </h2>
      </div>

      <div className="space-y-0 ml-0 lg:ml-48">
        {items.map((item, i) => (
          <div
            key={i}
            className="ctx-item overflow-hidden border-t border-[#2a2a2a] py-8 grid grid-cols-1 md:grid-cols-[12rem_1fr] gap-4 group"
          >
            <div>
              <span className="font-label text-xs tracking-widest text-[#c9a84c] uppercase">
                {item.year}
              </span>
            </div>
            <div>
              <h3 className="font-display font-bold text-[#f5f5f7] text-xl mb-2 group-hover:text-[#c9a84c] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="font-body text-[#a08a6a] leading-relaxed text-lg">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
        <div className="border-t border-[#2a2a2a]" />
      </div>
    </section>
  );
}
