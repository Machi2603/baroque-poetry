import dynamic from "next/dynamic";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ElBarroco from "@/components/ElBarroco";
import TemasBarroco from "@/components/TemasBarroco";
import TopicosLiterarios from "@/components/TopicosLiterarios";
import EstiloBarroco from "@/components/EstiloBarroco";
import Autores from "@/components/Autores";

// GSAP components importados con ssr: false
const ContextoHistorico = dynamic(
  () => import("@/components/ContextoHistorico"),
  { ssr: false }
);

const DosVertientes = dynamic(
  () => import("@/components/DosVertientes"),
  { ssr: false }
);

const Comparativa = dynamic(
  () => import("@/components/Comparativa"),
  { ssr: false }
);

const Conclusion = dynamic(
  () => import("@/components/Conclusion"),
  { ssr: false }
);

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <ContextoHistorico />
      <ElBarroco />
      <TemasBarroco />
      <TopicosLiterarios />
      <EstiloBarroco />
      <DosVertientes />
      <Comparativa />
      <Autores />
      <Conclusion />

      <footer className="border-t border-[#2a2a2a] py-8 px-6 text-center">
        <p className="font-label text-xs text-[#a08a6a] tracking-widest uppercase">
          La Poesía Barroca · 1º Bachillerato · Lengua Castellana y Literatura
        </p>
      </footer>
    </main>
  );
}
