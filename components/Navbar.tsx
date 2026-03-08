"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const sections = [
  { id: "hero", label: "Inicio" },
  { id: "contexto", label: "Contexto" },
  { id: "barroco", label: "El Barroco" },
  { id: "topicos", label: "Tópicos" },
  { id: "estilo", label: "Estilo" },
  { id: "vertientes", label: "Vertientes" },
  { id: "comparativa", label: "Comparativa" },
  { id: "autores", label: "Autores" },
  { id: "conclusion", label: "Conclusión" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-10% 0px -40% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#2a2a2a]"
      style={{
        backgroundColor: `rgba(10,10,10,${bgOpacity.get()})`,
        backdropFilter: "blur(12px)",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-[#0a0a0a]"
        style={{ opacity: bgOpacity }}
      />
      <div className="relative flex items-center justify-between px-6 lg:px-12 h-14">
        <span
          className="font-display text-sm font-bold tracking-widest text-[#c9a84c] uppercase cursor-pointer"
          onClick={() => scrollTo("hero")}
        >
          Barroco
        </span>
        <ul className="hidden md:flex items-center gap-6 relative">
          {sections.slice(1).map(({ id, label }) => (
            <li key={id} className="relative">
              <button
                onClick={() => scrollTo(id)}
                className="font-label text-xs tracking-wider uppercase text-[#f5f5f7]/60 hover:text-[#f5f5f7] transition-colors duration-200 pb-1"
              >
                {label}
              </button>
              {activeSection !== null && activeSection === id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#c9a84c]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
