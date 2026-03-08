"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface PaintingData {
  src: string;
  title: string;
  authorYear: string;
  description: string;
  layout: "center" | "left";
  textPosition: "right" | "below";
}

const paintings: PaintingData[] = [
  {
    src: "/paintings/las-meninas.png",
    title: "Las Meninas",
    authorYear: "Diego Velázquez · 1656",
    description:
      "La obra cumbre del Barroco español. Velázquez juega con la realidad y la ilusión: ¿quién observa a quién?",
    layout: "center",
    textPosition: "right",
  },
  {
    src: "/paintings/david-goliat.png",
    title: "David con la cabeza de Goliat",
    authorYear: "Caravaggio · 1610",
    description:
      "El claroscuro llevado al extremo. La luz emerge de la oscuridad total, técnica que define el espíritu barroco.",
    layout: "left",
    textPosition: "right",
  },
  {
    src: "/paintings/rendicion-breda.png",
    title: "La rendición de Breda",
    authorYear: "Diego Velázquez · 1635",
    description:
      "El poder y la caída del Imperio español. Pintado en el mismo siglo en que España pierde su hegemonía en Europa.",
    layout: "center",
    textPosition: "below",
  },
];

// ─── Card individual ──────────────────────────────────────────────────────────

function PaintingCard({ painting, index }: { painting: PaintingData; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.6, 0.85, 1],
    [0, 1, 1, 1, 0]
  );

  const brightness = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.05, 0.7, 1, 0.7, 0.05]
  );

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);

  const radialOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [1, 0.3, 0.3, 1]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 0.85, 1],
    [0, 1, 1, 1, 0]
  );

  const isLeft = painting.layout === "left";
  const isBelow = painting.textPosition === "below";

  return (
    <>
      {/* Separador entre cuadros (excepto el primero) */}
      {index > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full flex justify-center py-2"
        >
          <div
            className="w-32 h-px"
            style={{ backgroundColor: "#c9a84c", opacity: 0.3 }}
          />
        </motion.div>
      )}

      <div
        ref={cardRef}
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <motion.div
          style={{ opacity }}
          className={`w-full max-w-6xl mx-auto ${
            isBelow
              ? "flex flex-col items-center gap-10"
              : "flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
          } ${isLeft ? "lg:justify-start" : "lg:justify-center"}`}
        >
          {/* ── Imagen ── */}
          <motion.div
            style={{
              scale,
              filter: useTransform(brightness, (v) => `brightness(${v})`),
              flexShrink: 0,
            }}
            className={`relative ${
              isBelow
                ? "w-full max-w-4xl"
                : isLeft
                ? "w-full lg:w-[55%] max-w-xl lg:max-w-none"
                : "w-[70%] max-w-[900px]"
            }`}
          >
            <Image
              src={painting.src}
              alt={painting.title}
              width={900}
              height={700}
              className="w-full h-auto object-contain rounded-sm"
              style={{
                boxShadow: "0 25px 80px rgba(0,0,0,0.85)",
              }}
              priority={index === 0}
            />

            {/* Capa de vela — radial gradient */}
            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at center, transparent 30%, #0a0a0a 80%)",
                opacity: radialOpacity,
                pointerEvents: "none",
                zIndex: 10,
              }}
            />
          </motion.div>

          {/* ── Texto ── */}
          <motion.div
            style={{ opacity: textOpacity }}
            className={`flex flex-col gap-4 ${
              isBelow
                ? "w-full max-w-2xl text-center items-center"
                : "flex-1 max-w-xs lg:max-w-sm"
            }`}
            transition={{ delay: 0.3 }}
          >
            <span
              className="block w-8 h-px"
              style={{ backgroundColor: "#c9a84c" }}
            />
            <h3
              className="font-display font-bold leading-tight"
              style={{
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                color: "#f5f5f7",
              }}
            >
              {painting.title}
            </h3>
            <p
              className="font-label text-xs tracking-widest uppercase"
              style={{ color: "#c9a84c" }}
            >
              {painting.authorYear}
            </p>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "#a08a6a" }}
            >
              {painting.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────

export default function GaleriaBarroco() {
  return (
    <section
      id="galeria"
      className="relative"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Label superior */}
      <div className="sticky top-14 z-20 pointer-events-none">
        <div className="px-6 lg:px-12 pt-4">
          <span
            className="font-label text-xs tracking-[0.4em] uppercase"
            style={{ color: "#c9a84c" }}
          >
            06 — El Arte Barroco
          </span>
        </div>
      </div>

      {/* Encabezado de sección */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="pt-24 pb-8 px-6 text-center"
      >
        <h2
          className="font-display font-black leading-tight mb-4"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: "#f5f5f7",
          }}
        >
          La pintura como espejo del alma
        </h2>
        <p
          className="font-body italic text-lg"
          style={{ color: "#a08a6a" }}
        >
          El claroscuro como metáfora del desengaño
        </p>
      </motion.div>

      {/* Cuadros */}
      {paintings.map((painting, i) => (
        <PaintingCard key={painting.src} painting={painting} index={i} />
      ))}

      {/* Degradado de salida */}
      <div
        className="h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #0a0a0a)",
        }}
      />
    </section>
  );
}
